import { getJson } from "../api.js";

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

export async function CoursesPage() {
  const pageSize = 2;
  const currentPage = 1;
  const pagedCourses = await getJson(
    `/courses?_page=${currentPage}&_per_page=${pageSize}&_sort=order`,
  );
  const courses = Array.isArray(pagedCourses.data) ? pagedCourses.data : [];
  const courseCards =
    courses.length > 0
      ? courses.map((course) => makeCourseCard(course)).join("")
      : `<p class="container">No courses available right now.</p>`;
  const totalPages = pagedCourses.pages || 1;
  let paginationMarkup = "";

  for (let i = 1; i <= totalPages; i += 1) {
    const isCurrent = i === currentPage;
    const buttonClass = isCurrent ? "current" : "";
    paginationMarkup += `<button type="button" class="${buttonClass}" data-page="${i}" aria-pressed="${isCurrent}">${i}</button>`;
  }

  paginationMarkup = `<button type="button" aria-label="Previous page" data-page="prev">←</button>${paginationMarkup}<button type="button" aria-label="Next page" data-page="next">→</button>`;

  setTimeout(() => {
    // Find the main app container where the page content is rendered.
    const container = document.querySelector("#app");
    // Find the pagination controls inside the page.
    const pagination = container?.querySelector(".pagination");
    // Find the course grid that will display the cards.
    const courseGrid = container?.querySelector(".course-grid");

    // Stop here if the pagination or course grid is missing.
    if (!pagination || !courseGrid) return;

    // Start the current page at the first page.
    let page = 1;
    // Store the total number of available pages.
    let pages = totalPages;

    // Create a function that rebuilds the pagination buttons.
    const renderButtons = () => {
      // Start the button markup with the previous-page button.
      let buttons = `<button type="button" aria-label="Previous page" data-page="prev">←</button>`;
      // Loop through each page number and create a button for it.
      for (let i = 1; i <= pages; i += 1) {
        // Check whether this button represents the active page.
        const isCurrent = i === page;
        // Give the active button the current class.
        const buttonClass = isCurrent ? "current" : "";
        // Add the page button to the markup.
        buttons += `<button type="button" class="${buttonClass}" data-page="${i}" aria-pressed="${isCurrent}">${i}</button>`;
      }
      // Add the next-page button to the markup.
      buttons += `<button type="button" aria-label="Next page" data-page="next">→</button>`;
      // Replace the existing pagination buttons with the new markup.
      pagination.innerHTML = buttons;
    };

    // Create a function that loads and displays a specific page of courses.
    const loadPage = async (pageNumber) => {
      // Keep the requested page inside the valid range.
      const safePage = Math.max(1, Math.min(pageNumber, pages));
      // Fetch the courses for the chosen page from the API.
      const data = await getJson(
        `/courses?_page=${safePage}&_per_page=2&_sort=order`,
      );
      // Make sure the returned data is an array before using it.
      const items = Array.isArray(data.data) ? data.data : [];
      // Replace the course grid content with the new cards.
      courseGrid.innerHTML =
        items.length > 0
          ? items.map((course) => makeCourseCard(course)).join("")
          : `<p class="container">No courses available right now.</p>`;
      // Update the total number of pages from the API response.
      pages = data.pages || 1;
      // Save the current page number.
      page = safePage;
      // Rebuild the pagination buttons for the new page.
      renderButtons();
    };

    // Listen for clicks on the pagination buttons.
    pagination.addEventListener("click", async (event) => {
      // Find the button that was clicked.
      const button = event.target.closest("button[data-page]");
      // Do nothing if the click was not on a pagination button.
      if (!button) return;
      // Read the page value from the clicked button.
      const pageValue = button.dataset.page;
      // Load the previous page when the previous button is clicked.
      if (pageValue === "prev") await loadPage(page - 1);
      // Load the next page when the next button is clicked.
      else if (pageValue === "next") await loadPage(page + 1);
      // Load the selected page number for normal page buttons.
      else await loadPage(Number(pageValue));
    });
  }, 0);

  return `
    <section class="courses-hero">
      <div class="courses-hero__content container">
        <h1 class="page-title">Find Your Next Adventure</h1>
        <div class="course-search">
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
        </div>
        <div class="course-categories" aria-label="Course categories">
          <button class="category-button is-selected" type="button" aria-pressed="true">
            All Courses
          </button>
          <button class="category-button" type="button" aria-pressed="false">
            Coding
          </button>
          <button class="category-button" type="button" aria-pressed="false">
            Art
          </button>
          <button class="category-button" type="button" aria-pressed="false">
            Language
          </button>
          <button class="category-button" type="button" aria-pressed="false">
            Science
          </button>
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

export function attachCoursesPagination(container) {
  const pagination = container.querySelector(".pagination");
  const courseGrid = container.querySelector(".course-grid");

  if (!pagination || !courseGrid) return;

  let currentPage = 1;
  let totalPages = 1;

  async function loadPage(pageNumber) {
    const safePage = Math.max(1, Math.min(pageNumber, totalPages)); // Ensure the page number is within valid bounds
    const pagedCourses = await getJson(
      `/courses?_page=${safePage}&_per_page=2&_sort=order`,
    ); // Adjust the _per_page value as needed
    const courses = Array.isArray(pagedCourses.data) ? pagedCourses.data : []; // Ensure courses is an array even if the API response is unexpected
    const courseCards =
      courses.length > 0
        ? courses.map((course) => makeCourseCard(course)).join("")
        : `<p class="container">No courses available right now.</p>`;

    courseGrid.innerHTML = courseCards;
    totalPages = pagedCourses.pages || 1;
    currentPage = safePage;

    let buttons = `<button type="button" aria-label="Previous page" data-page="prev">←</button>`;
    for (let i = 1; i <= totalPages; i += 1) {
      const isCurrent = i === currentPage;
      const buttonClass = isCurrent ? "current" : "";
      buttons += `<button type="button" class="${buttonClass}" data-page="${i}" aria-pressed="${isCurrent}">${i}</button>`;
    }
    buttons += `<button type="button" aria-label="Next page" data-page="next">→</button>`;
    pagination.innerHTML = buttons;
  }

  pagination.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-page]"); // Find the closest button with a data-page attribute
    if (!button) return;

    const pageValue = button.dataset.page; // Get the value of the data-page attribute
    if (pageValue === "prev")
      await loadPage(currentPage - 1); // Load the previous page
    else if (pageValue === "next")
      await loadPage(currentPage + 1); // Load the next page
    else await loadPage(Number(pageValue)); // Load the specific page number
  });
}
