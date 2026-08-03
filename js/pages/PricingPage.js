export function PricingPage() {
  return `
    <section class="pricing-page">
      <section class="pricing-hero container">
        <h1 class="page-title">Choose Your Learning Path</h1>
        <p>
          Dive into our ocean of knowledge. Whether you're just dipping your
          toes or ready to become an apex predator in your field, we have a plan
          for you.
        </p>
      </section>

      <section class="pricing-section container" aria-labelledby="plans-title">
        <h2 class="visually-hidden" id="plans-title">Learning plans</h2>
        <div class="pricing-grid">
          <article class="plan-card plan-card--basic">
            <p class="plan-card__eyebrow">Entry Level</p>
            <h3>Basic</h3>
            <p class="plan-card__price">
              <strong>$0</strong><span>/forever</span>
            </p>
            <ul class="plan-features">
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Access to introductory courses</span>
              </li>
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Community forum access</span>
              </li>
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Mobile app learning</span>
              </li>
              <li class="is-disabled">
                <img
                  src="../../assets/feature-disabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span><span class="visually-hidden">Not included: </span>Certified Diplomas</span>
              </li>
            </ul>
            <a class="button plan-card__button" href="#/courses">
              Get Started
            </a>
          </article>

          <article class="plan-card plan-card--elite">
            <div class="plan-card__accent" aria-hidden="true"></div>
            <p class="plan-card__badge">Best Value</p>
            <div class="plan-card__inner">
              <p class="plan-card__eyebrow">Yearly Pass</p>
              <h3>Elite</h3>
              <p class="plan-card__price">
                <strong>$299</strong><span>/year</span>
              </p>
              <ul class="plan-features">
                <li>
                  <img
                    src="../../assets/Elite-feature.png"
                    alt=""
                    width="24"
                    height="23"
                  />
                  <span>Access to all courses</span>
                </li>
                <li>
                  <img
                    src="../../assets/Elite-feature.png"
                    alt=""
                    width="24"
                    height="23"
                  />
                  <span>Certified Diplomas</span>
                </li>
                <li>
                  <img
                    src="../../assets/Elite-feature.png"
                    alt=""
                    width="24"
                    height="23"
                  />
                  <span>1-on-1 Mentorship</span>
                </li>
                <li>
                  <img
                    src="../../assets/Elite-feature.png"
                    alt=""
                    width="24"
                    height="23"
                  />
                  <span>Offline learning downloads</span>
                </li>
                <li>
                  <img
                    src="../../assets/Elite-feature.png"
                    alt=""
                    width="24"
                    height="23"
                  />
                  <span>Exclusive Masterclasses</span>
                </li>
              </ul>
              <a class="button plan-card__button" href="#/courses">
                Get Started
              </a>
            </div>
          </article>

          <article class="plan-card plan-card--pro">
            <p class="plan-card__eyebrow">Monthly Explorer</p>
            <h3>Pro</h3>
            <p class="plan-card__price">
              <strong>$29</strong><span>/month</span>
            </p>
            <ul class="plan-features">
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Access to all courses</span>
              </li>
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Certified Diplomas</span>
              </li>
              <li>
                <img
                  src="../../assets/feature-enabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Live Q&amp;A Sessions</span>
              </li>
              <li class="is-disabled">
                <img
                  src="../../assets/feature-disabled.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <span><span class="visually-hidden">Not included: </span>1-on-1 Mentorship</span>
              </li>
            </ul>
            <a class="button plan-card__button" href="#/courses">
              Get Started
            </a>
          </article>
        </div>
        </section>
      </section>
    `;
}
