export function AboutPage() {
  return `
      <section class="about-hero">
        <div class="about-hero__layout container">
          <div class="about-hero__content">
            <h1 class="page-title">
              Our Mission: Making Learning an Adventure
            </h1>
            <p>
              Founded in the heart of the digital ocean, SHARKS Online School
              was born from a simple idea: that education should be as thrilling
              as a deep-sea exploration. We believe curiosity is the compass
              that guides every young learner to greatness. Our curriculum
              isn't just about facts; it's about the journey of discovery.
            </p>
            <a class="button about-hero__button" href="#/courses">
              Dive In Now
            </a>
          </div>
          <img
            class="about-hero__image"
            src="../../assets/Hero-img.png"
            alt="Young ocean explorers learning together"
            width="635"
            height="651"
          />
        </div>
        <img
          class="about-hero__wave"
          src="../../assets/Wave Divider.png"
          alt=""
          width="1280"
          height="60"
          aria-hidden="true"
        />
      </section>

      <section class="crew-section">
        <div class="container">
          <div class="about-section-heading">
            <h2 class="section-title">Meet the Crew</h2>
            <p>
              Our expert instructors are more than just teachers—they are
              explorers, scientists, and creators dedicated to guiding your
              path.
            </p>
          </div>
          <div class="crew-grid">
            <article class="teacher">
              <img
                src="../../assets/CaptainSarah.png"
                alt="Captain Sarah"
                width="192"
                height="192"
                loading="lazy"
              />
              <h3>Captain Sarah</h3>
              <p class="teacher__role">Marine Biology Lead</p>
              <p>
                Sarah has spent 15 years studying the deep blue and loves
                sharing oceanic secrets with curious minds.
              </p>
            </article>
            <article class="teacher">
              <img
                src="../../assets/Dr. Finn.png"
                alt="Dr. Finn"
                width="192"
                height="192"
                loading="lazy"
              />
              <h3>Dr. Finn</h3>
              <p class="teacher__role">Tech &amp; Robotics</p>
              <p>
                Finn builds underwater drones and teaches students how to code
                their way through any challenge.
              </p>
            </article>
            <article class="teacher">
              <img
                src="../../assets/Navigator Julia.png"
                alt="Navigator Julia"
                width="192"
                height="192"
                loading="lazy"
              />
              <h3>Navigator Julia</h3>
              <p class="teacher__role">Creative Design</p>
              <p>
                Julia helps students map out their imagination, turning digital
                sketches into interactive worlds.
              </p>
            </article>
            <article class="teacher">
              <img
                src="../../assets/Prof. Ray.png"
                alt="Professor Ray"
                width="192"
                height="192"
                loading="lazy"
              />
              <h3>Professor Ray</h3>
              <p class="teacher__role">History &amp; Ethics</p>
              <p>
                Ray explores the history of navigation and ensures every
                student learns the value of safe travels.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="container">
          <div class="values-section__heading">
            <div>
              <h2 class="section-title">Values That Guide Us</h2>
              <p>
                Our core principles are the currents that keep us moving
                forward in the right direction.
              </p>
            </div>
            <img
              src="../../assets/Icon.png"
              alt=""
              width="54"
              height="59"
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div class="values-grid">
            <article class="value">
              <img
                src="../../assets/Innovation.png"
                alt=""
                width="64"
                height="64"
                loading="lazy"
              />
              <h3>Innovation</h3>
              <p>
                We use cutting-edge VR and interactive simulations to bring
                lessons to life, ensuring students are always at the forefront
                of technology.
              </p>
            </article>
            <article class="value">
              <img
                src="../../assets/Fun-icon.png"
                alt=""
                width="64"
                height="64"
                loading="lazy"
              />
              <h3>Fun</h3>
              <p>
                Learning shouldn't be a chore. We gamify the curriculum to keep
                engagement high and smiles even higher throughout the day.
              </p>
            </article>
            <article class="value">
              <img
                src="../../assets/Safety.png"
                alt=""
                width="64"
                height="64"
                loading="lazy"
              />
              <h3>Safety</h3>
              <p>
                Our digital ocean is a safe harbor. We prioritize student
                privacy and moderate all interactions to ensure a healthy
                learning space.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="about-cta">
        <div class="about-cta__content container">
          <h2 class="section-title">Ready to embark on your journey?</h2>
          <p>
            Join thousands of young explorers discovering their potential under
            the waves of knowledge.
          </p>
          <div class="about-cta__actions">
            <a class="button button--primary" href="#/courses">
              View All Courses
            </a>
            <a class="button button--outline" href="#/contact">
              Tour the Campus
            </a>
          </div>
        </div>
      </section>
    `;
}
