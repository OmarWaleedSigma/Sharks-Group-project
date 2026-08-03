export function Footer() {
    return `
        <footer class="footer">
      <div class="footer__grid container">
        <div class="footer__brand">
          <p class="footer__title">SHARKS Online School</p>
          <p class="footer__description">
            Making learning an adventure for the next generation of creators and
            thinkers.
          </p>
        </div>
        <div class="footer__group">
          <p class="footer__heading">Explore</p>
          <a class="footer__link" href="#/courses">Courses</a>
          <a class="footer__link" href="#/pricing">Pricing</a>
          <span class="footer__unavailable" aria-disabled="true"
            >Curriculum</span
          >
        </div>
        <div class="footer__group">
          <p class="footer__heading">Company</p>
          <a class="footer__link" href="#/about">About</a>
          <a class="footer__link" href="#/contact">Contact</a>
          <span class="footer__unavailable" aria-disabled="true">Careers</span>
        </div>
        <div class="footer__group">
          <p class="footer__heading">Legal</p>
          <span class="footer__unavailable" aria-disabled="true">
            Privacy Policy
          </span>
          <span class="footer__unavailable" aria-disabled="true"> 
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
    `
}