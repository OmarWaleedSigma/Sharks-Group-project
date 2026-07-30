export function CoursesPage() {
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
            <button
              class="category-button is-selected"
              type="button"
              aria-pressed="true"
            >
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
          src="../../assets/Wave Transition.png"
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
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course1-img(courses-page).png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.9 out of 5</span>
                  <strong>4.9</strong>
                  <small>(120 students)</small>
                </div>
                <h3>Ocean Explorer Coding</h3>
                <p>
                  Learn the basics of coding through exciting underwater
                  challenges.
                </p>
                <div class="course-card__action">
                  <strong>$49</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course2-img.png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.8 out of 5</span>
                  <strong>4.8</strong>
                  <small>(98 students)</small>
                </div>
                <h3>Digital Reef Painting</h3>
                <p>
                  Create colorful ocean worlds while learning digital painting
                  techniques.
                </p>
                <div class="course-card__action">
                  <strong>$39</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course3-img.png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.9 out of 5</span>
                  <strong>4.9</strong>
                  <small>(145 students)</small>
                </div>
                <h3>Marine Biology 101</h3>
                <p>
                  Discover fascinating sea creatures and the ecosystems they
                  call home.
                </p>
                <div class="course-card__action">
                  <strong>$59</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course4-img.png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.7 out of 5</span>
                  <strong>4.7</strong>
                  <small>(87 students)</small>
                </div>
                <h3>Shark Speak: English</h3>
                <p>
                  Grow vocabulary and confidence with stories, games, and
                  conversation.
                </p>
                <div class="course-card__action">
                  <strong>$45</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course5-img.png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.9 out of 5</span>
                  <strong>4.9</strong>
                  <small>(112 students)</small>
                </div>
                <h3>Advanced Python Predator</h3>
                <p>
                  Build larger Python projects and sharpen problem-solving
                  skills.
                </p>
                <div class="course-card__action">
                  <strong>$69</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
            <article class="course-card">
              <div class="course-card__image">
                <img
                  src="../../assets/course6-img.png"
                  alt=""
                  width="388"
                  height="192"
                  loading="lazy"
                />
              </div>
              <div class="course-card__content">
                <div class="course-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span class="visually-hidden">Rated 4.8 out of 5</span>
                  <strong>4.8</strong>
                  <small>(104 students)</small>
                </div>
                <h3>Climate Action Hero</h3>
                <p>
                  Explore climate science and design a project that protects
                  our planet.
                </p>
                <div class="course-card__action">
                  <strong>$55</strong>
                  <button class="button button--primary" type="button">
                    Enroll
                  </button>
                </div>
              </div>
            </article>
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
          <p>
            Get course updates, learning tips, and ocean-sized inspiration.
          </p>
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
