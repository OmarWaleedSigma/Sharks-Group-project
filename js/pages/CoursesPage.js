import { getJson } from "../api.js";
import { EmptyState, ErrorState, LoadingState } from "../components/PageState.js";

function coursesEmptyState() {
  return EmptyState({
    icon: "⌕",
    title: "No courses found in these waters",
    message: "Try another category or check back soon for a new learning adventure.",
  });
}
const courseState = {
  category: "all",
  search: "",
  page: 1,
  perPage: 6,
};

function resetCourseState() {
  courseState.category = "all";
  courseState.search = "";
  courseState.page = 1;
  courseState.perPage = 6;
}

function buildCourseQuery() {
  const query = new URLSearchParams({
    _page: String(courseState.page),
    _per_page: String(courseState.perPage),
    _sort: "order",
  });

  if (courseState.category !== "all") {
    query.set("category", courseState.category);
  }

  if (courseState.search.trim()) {
    query.set("title:contains", courseState.search.trim());
  }

  return query.toString();
}

function createCategoryButton(category) {
  const isSelected = category.id === courseState.category;

  return `
    <button
      class="category-button ${isSelected ? "is-selected" : ""}"
      type="button"
      data-category="${category.id}"
      aria-pressed="${isSelected}"
    >
      ${category.label}
    </button>
  `;
}

function makeCourseCard(course) {
  const image = course.image || course.img || "./assets/Background.png";
  const rating = course.rating || 4.9;
  const students = course.students || 120;
  const currency = course.currency || "$";
  const price = course.price || 0;

  return `
    <article class="course-card">
      <div class="course-card__image">
        <img
          src="${image}"
          alt=""
          width="388"
          height="192"
          loading="lazy"
        />
      </div>
      <div class="course-card__content">
        <div class="course-rating">
          <span aria-hidden="true">★★★★★</span>
          <span class="visually-hidden">Rated ${rating} out of 5</span>
          <strong>${rating}</strong>
          <small>(${students} students)</small>
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-card__action">
          <strong>${currency}${price}</strong>
          <button class="button button--primary" type="button">
            Enroll
          </button>
        </div>
      </div>
    </article>
  `;
}
function createPagination(result) {
  const currentPage = courseState.page;
  const totalPages = Math.max(1, result.pages || 1);

  let pageButtons = "";

  for (let page = 1; page <= totalPages; page += 1) {
    const isCurrent = page === currentPage;

    pageButtons += `
      <button
        type="button"
        class="${isCurrent ? "current" : ""}"
        data-page="${page}"
        aria-current="${isCurrent ? "page" : "false"}"
      >
        ${page}
      </button>
    `;
  }

  return `
    <button
      type="button"
      data-page="prev"
      aria-label="Previous page"
      ${result.prev === null ? "disabled" : ""}
    >
      ←
    </button>

    ${pageButtons}

    <button
      type="button"
      data-page="next"
      aria-label="Next page"
      ${result.next === null ? "disabled" : ""}
    >
      →
    </button>
  `;
}
async function loadCourses() {
  const courseGrid = document.querySelector(".course-grid");
  const pagination = document.querySelector(".pagination");

  if (!courseGrid || !pagination) return;

  courseGrid.setAttribute("aria-busy", "true");

  courseGrid.innerHTML = LoadingState({
    title: "Loading courses...",
    message: "Searching the learning ocean for your next adventure.",
  });

  try {
    const result = await getJson(`/courses?${buildCourseQuery()}`);
    const courses = Array.isArray(result.data) ? result.data : [];

    courseGrid.innerHTML = courses.length
      ? courses.map((course) => makeCourseCard(course)).join("")
      : coursesEmptyState();

    pagination.innerHTML = createPagination(result);
    pagination.hidden = courses.length === 0;
  } catch (error) {
    console.error(error);

    courseGrid.innerHTML = ErrorState();

    pagination.hidden = true;

    courseGrid
      .querySelector("[data-retry-courses]")
      ?.addEventListener("click", loadCourses, { once: true });
  } finally {
    courseGrid.removeAttribute("aria-busy");
  }
}
function attachCourseInteractions() {
  const categoryContainer = document.querySelector(".course-categories");
  const searchForm = document.querySelector(".course-search");
  const searchInput = document.querySelector("#course-search");
  const pagination = document.querySelector(".pagination");

  if (!categoryContainer || !searchForm || !searchInput || !pagination) {
    return;
  }

  categoryContainer.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    courseState.category = button.dataset.category;
    courseState.page = 1;

    categoryContainer.querySelectorAll("[data-category]").forEach((item) => {
      const isSelected = item.dataset.category === courseState.category;

      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    await loadCourses();
  });

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    courseState.search = searchInput.value.trim();
    courseState.page = 1;

    await loadCourses();
  });

  pagination.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-page]");

    if (!button || button.disabled) return;

    const requestedPage = button.dataset.page;

    if (requestedPage === "prev") {
      courseState.page -= 1;
    } else if (requestedPage === "next") {
      courseState.page += 1;
    } else {
      courseState.page = Number(requestedPage);
    }

    courseState.page = Math.max(1, courseState.page);

    await loadCourses();
  });
}

export async function CoursesPage() {

  resetCourseState();

  const [categories, pagedCourses] = await Promise.all([
    getJson("/categories?_sort=order"),
    getJson(`/courses?${buildCourseQuery()}`),
  ]);

  const courses = Array.isArray(pagedCourses.data)
    ? pagedCourses.data
    : [];

  const categoryButtons = categories
    .map((category) => createCategoryButton(category))
    .join("");

  const courseCards = courses.length
    ? courses.map((course) => makeCourseCard(course)).join("")
    : coursesEmptyState();

  const paginationMarkup = createPagination(pagedCourses);

  setTimeout(attachCourseInteractions, 0);

  return `
    <section class="courses-hero">
      <div class="courses-hero__content container">
        <h1 class="page-title">Find Your Next Adventure</h1>
        <form class="course-search" role="search">
          <span class="course-search__icon" aria-hidden="true">⌕</span>
          <label class="visually-hidden" for="course-search">
            Search courses
          </label>
          <input
            class="course-search__input"
            id="course-search"
            type="search"
            name="course-search"
            placeholder="What do you want to discover today?"
          />
          <button class="button button--light" type="submit">
            Search
          </button>
        </form>

        </form>
        <div class="course-categories" aria-label="Course categories">
          ${categoryButtons}
        </div>
      </div>
      <img
        class="courses-hero__wave"
        src="./assets/Wave Transition.png"
        alt=""
        width="1280"
        height="107"
        aria-hidden="true"
      />
    </section>

    <section class="course-catalog">
      <div class="container">
        <h2 class="visually-hidden">Available courses</h2>
        <div class="course-grid">
          ${courseCards}
        </div>
      </div>
    </section>

    <nav class="pagination container" aria-label="Course pages">
      ${paginationMarkup}
    </nav>

    <section class="newsletter">
      <img
        class="newsletter__wave"
        src="./assets/top-waves.png"
        alt=""
        width="1280"
        height="107"
        aria-hidden="true"
      />
      <div class="newsletter__content container">
        <h2 class="section-title">Stay in the Loop</h2>
        <p>Get course updates, learning tips, and ocean-sized inspiration.</p>
        <form class="newsletter__form">
          <label class="visually-hidden" for="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Enter your email address"
            required
          />
          <button class="button button--light" type="submit">
            Join the School
          </button>
        </form>
      </div>
    </section>
  `;
}
