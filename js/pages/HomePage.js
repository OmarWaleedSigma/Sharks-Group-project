import { getJson } from "../api.js";

function createFeatureCard({ icon, title, description }) {
  return `
  <article class="feature">
            <div class="feature__icon" aria-hidden="true">${icon}</div>
            <h2>${title}</h2>
            <p>
              ${description}
            </p>
          </article>`;
}
function createCourseCard({ image, title, description, price, currency }) {
  return `
  <article class="course">
              <img
                src= ${image}
                alt=""
                width="374"
                height="192"
                loading="lazy"
              />
              <div class="course__body">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="course__footer">
                  <strong>${currency}${price}</strong>
                  <a class="button button--primary" href="#/courses">
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
  `
}
function createSuccessStory({ studentName, age, quote, avatarText }) {
  return `
  <article class="student">
              <div class="student__avatar" aria-hidden="true">${avatarText}</div>
              <blockquote>
                ${quote}
              </blockquote>
              <p>— ${studentName}, ${age} years old</p>
            </article>`
}
export async function HomePage() {
  const features = await getJson("/homeFeatures?_sort=order");
  let featureCards;
   if (features.length === 0) {
    featureCards = `<p>No features available at the moment.</p>`;
   }else {
    featureCards = features.map((feature) => createFeatureCard(feature)).join("");
   }
  
  const courses = await getJson("/popularCourses?_sort=order");
  let courseCards;
   if (courses.length === 0) {
    courseCards = `<p>No courses available at the moment.</p>`;
   }else {
    courseCards = courses.map((course) => createCourseCard(course)).join("");
   }
  const successStories = await getJson("/successStories?_sort=order");
  let successStoryCards;``
   if (successStories.length === 0) {
    successStoryCards = `<p>No success stories available at the moment.</p>`;
   }else {
    successStoryCards = successStories.map((story) => createSuccessStory(story)).join("");
   }
  return `
        <section class="hero">
        <div class="hero__content container">
          <h1 class="page-title">Dive Into Learning 🦈</h1>
          <p>
            Fun, expert-led online courses for kids and teens designed to spark
            creativity and build future skills.
          </p>
          <div class="hero__actions">
            <a class="button button--light" href="#/courses">
              Browse Courses
            </a>
            <button class="button button--outline" type="button" disabled>
              Watch a Free Lesson
              <span class="visually-hidden">(coming soon)</span>
            </button>
          </div>
        </div>
        <img
          class="hero__waves"
          src="./assets/Layered Waves Decoration.png"
          alt=""
          width="1280"
          height="285"
          aria-hidden="true"
        />
      </section>

      <section class="features-section">
        <div class="features-grid container">
          ${featureCards}
        </div>
      </section>

      <section class="popular-courses">
        <div class="container">
          <div class="section-heading">
            <div>
              <h2 class="section-title">Popular Courses</h2>
              <p>Dive into our most loved classes by students worldwide.</p>
            </div>
            <a class="text-link" href="#/courses">
              View All Courses <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="popular-grid">
            ${courseCards}
          </div>
        </div>
      </section>

      <section class="how-it-works">
        <div class="container">
          <div class="section-heading section-heading--center">
            <div>
              <h2 class="section-title">How It Works</h2>
              <p>Simple steps to start your educational journey.</p>
            </div>
          </div>
          <ol class="steps">
            <li class="step">
              <span aria-hidden="true">1</span>
              <h3>Choose Your Course</h3>
              <p>
                Explore our diverse catalog and find the perfect match for your
                interests.
              </p>
            </li>
            <li class="step">
              <span aria-hidden="true">2</span>
              <h3>Learn with Experts</h3>
              <p>
                Watch high-quality lessons and complete interactive projects at
                your pace.
              </p>
            </li>
            <li class="step">
              <span aria-hidden="true">3</span>
              <h3>Build Your Skills</h3>
              <p>
                Practice what you learn, track your progress, and celebrate
                every achievement.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section class="success-stories">
        <div class="container">
          <h2 class="section-title">Student Success Stories</h2>
          <div class="stories">
            ${successStoryCards}
          </div>
        </div>
      </section>
    `;
}