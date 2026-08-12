export function NotFoundPage() {
  return `
    <section class="not-found-page page-state container">
      <div class="not-found-page__bubbles" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="page-state__eyebrow">Lost at sea</p>
      <p class="not-found-page__code" aria-hidden="true">404</p>
      <h1 class="page-state__title">This page swam away</h1>
      <p class="page-state__message">
        The link may be outdated, or this corner of the ocean does not exist.
      </p>
      <div class="page-state__actions">
        <a class="button button--primary" href="#/">Return Home</a>
        <a class="button button--outline" href="#/courses">Explore Courses</a>
      </div>
    </section>
    `;
}
