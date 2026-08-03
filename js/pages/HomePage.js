export function HomePage() {
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
          <article class="feature">
            <div class="feature__icon" aria-hidden="true">◎</div>
            <h2>Focused Learning</h2>
            <p>
              Our bite-sized lessons keep kids engaged and on track to master
              new skills effectively.
            </p>
          </article>
          <article class="feature">
            <div class="feature__icon" aria-hidden="true">✦</div>
            <h2>Gamified Experience</h2>
            <p>
              Earn badges and points while learning. Education has never felt
              more like an adventure.
            </p>
          </article>
          <article class="feature">
            <div class="feature__icon" aria-hidden="true">▯</div>
            <h2>Learn Anywhere</h2>
            <p>
              Our mobile-first platform allows students to learn on tablets or
              phones during their commute or at home.
            </p>
          </article>
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
            <article class="course">
              <img
                src="./assets/Background.png"
                alt=""
                width="374"
                height="192"
                loading="lazy"
              />
              <div class="course__body">
                <h3>Web Design Basics</h3>
                <p>Learn to build your first website with HTML and CSS.</p>
                <div class="course__footer">
                  <strong>$49</strong>
                  <a class="button button--primary" href="#/courses">
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
            <article class="course">
              <img
                src="./assets/Background (1).png"
                alt=""
                width="374"
                height="192"
                loading="lazy"
              />
              <div class="course__body">
                <h3>Creative Drawing</h3>
                <p>Unlock your imagination through digital art techniques.</p>
                <div class="course__footer">
                  <strong>$39</strong>
                  <a class="button button--primary" href="#/courses">
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
            <article class="course">
              <img
                src="./assets/Background (2).png"
                alt=""
                width="374"
                height="192"
                loading="lazy"
              />
              <div class="course__body">
                <h3>English for Kids</h3>
                <p>Engaging stories and games to learn English naturally.</p>
                <div class="course__footer">
                  <strong>$59</strong>
                  <a class="button button--primary" href="#/courses">
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
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
            <article class="student">
              <div class="student__avatar" aria-hidden="true">L</div>
              <blockquote>
                “The coding course helped me build my first game. The lessons
                made every challenge feel possible.”
              </blockquote>
              <p>— Leo, 14 years old</p>
            </article>
            <article class="student">
              <div class="student__avatar" aria-hidden="true">S</div>
              <blockquote>
                “I love learning at my own pace, and every new badge makes me
                excited to keep exploring.”
              </blockquote>
              <p>— Sarah, 11 years old</p>
            </article>
          </div>
        </div>
      </section>
    `
}