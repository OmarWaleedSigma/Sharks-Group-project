export function LoadingState({
  title = "Diving into this page...",
  message = "Gathering everything you need from the learning ocean.",
} = {}) {
  return `
    <section class="page-state page-state--loading container" role="status" aria-live="polite" aria-busy="true">
      <div class="ocean-loader" aria-hidden="true"><span></span></div>
      <p class="page-state__eyebrow">Just a moment</p>
      <h1 class="page-state__title">${title}</h1>
      <p class="page-state__message">${message}</p>
    </section>
  `;
}

export function EmptyState({
  title,
  message,
  icon = "☆",
  actionHref = "",
  actionLabel = "",
} = {}) {
  const action = actionHref && actionLabel
    ? `<a class="button button--primary" href="${actionHref}">${actionLabel}</a>`
    : "";

  return `
    <div class="page-state page-state--compact" role="status">
      <div class="page-state__icon" aria-hidden="true">${icon}</div>
      <h3 class="page-state__title">${title}</h3>
      <p class="page-state__message">${message}</p>
      ${action}
    </div>
  `;
}

export function ErrorState() {
  return `
    <section class="page-state page-state--error container" role="alert">
      <div class="page-state__icon" aria-hidden="true">!</div>
      <p class="page-state__eyebrow">We hit a rogue wave</p>
      <h1 class="page-state__title">This page could not be loaded</h1>
      <p class="page-state__message">Check that the API is running, then give it another try.</p>
      <div class="page-state__actions">
        <button class="button button--primary" type="button" data-retry-route>Try Again</button>
        <a class="button button--outline" href="#/">Back to Home</a>
      </div>
    </section>
  `;
}
