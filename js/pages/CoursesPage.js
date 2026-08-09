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
  const courses = await getJson("/courses?_sort=order");
  const courseCards =
    Array.isArray(courses) && courses.length > 0
      ? courses.map((course) => makeCourseCard(course)).join("")
      : `<p class="container">No courses available right now.</p>`;

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
      <button type="button" aria-label="Previous page">←</button>
      <button type="button" class="current">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" aria-label="Next page">→</button>
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
