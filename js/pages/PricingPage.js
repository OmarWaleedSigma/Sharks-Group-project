import { getJson } from "../api.js";

function createPassCard({
  name,
  eyebrow,
  price,
  currency,
  duration,
  features,
  featured,
  badge,
  identifier,
}) {
  const isElite = featured === true;
  const cardClass = isElite
    ? "plan-card plan-card--elite"
    : `plan-card plan-card--${identifier || "basic"}`;
  const eliteMarkup = isElite
    ? `
      <div class="plan-card__accent" aria-hidden="true"></div>
      <p class="plan-card__badge">${badge || "Best Value"}</p>
    `
    : "";
  const innerMarkup = isElite ? '<div class="plan-card__inner">' : "";
  const closeInnerMarkup = isElite ? "</div>" : "";

  return `
  <article class="${cardClass}">
            ${eliteMarkup}
            ${innerMarkup}
            <p class="plan-card__eyebrow">${eyebrow}</p>
            <h3>${name}</h3>
            <p class="plan-card__price">
              <strong>${currency}${price}</strong><span>${duration}</span>
            </p>
            <ul class="plan-features">
              ${features
                .map((feature) => {
                  let featureClass = "is-disabled";

                  if (feature.included) {
                    featureClass = "";
                  }

                  return `
                    <li class="${featureClass}">
                      <img
                        src="${feature.icon}"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <span>${feature.label}</span>
                    </li>
                  `;
                })
                .join("")}
            </ul>
            <a class="button plan-card__button" href="#/courses">
              Get Started
            </a>
            ${closeInnerMarkup}
          </article>
`;
}
export async function PricingPage() {
  const plans = await getJson("/pricingPlans?_sort=order");
  let planCards;
  if (plans.length === 0) {
    planCards = `<p>No plans available at the moment.</p>`;
  } else {
    planCards = plans.map((plan) => createPassCard(plan)).join("");
  }
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
          ${planCards}
        </div>
        </section>
      </section>
    `;
}
