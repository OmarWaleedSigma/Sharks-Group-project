export function Header() {
    return `
    <header class="site-header">
      <nav class="site-nav container" aria-label="Primary navigation">
        <a class="site-brand" href="#/" data-route="/">
          <img
            class="site-brand__logo"
            src="./assets/sharks_logo.jpg"
            alt=""
            width="50"
            height="50"
          />
          <span class="site-brand__name">SHARKS Online School</span>
        </a>
        <button
          class="site-nav__toggle"
          type="button"
          aria-expanded="false"
          aria-controls="primary-navigation"
          aria-label="Open navigation menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <div class="site-nav__menu" id="primary-navigation">
          <ul class="site-nav__links">
            <li><a href="#/" data-route="/" aria-current="page">Home</a></li>
            <li><a href="./Courses/index.html">Courses</a></li>
            <li><a href="./About/index.html">About</a></li>
            <li><a href="./Pricing-Page/index.html">Pricing</a></li>
            <li><a href="./Contact/index.html">Contact</a></li>
          </ul>
          <a class="button button--nav" href="./Courses/index.html">
            Start Learning
          </a>
        </div>
      </nav>
    </header>
    
    `
}