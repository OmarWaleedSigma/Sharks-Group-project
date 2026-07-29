(() => {
  const nav = document.querySelector(".site-nav");
  const toggle = nav?.querySelector(".site-nav__toggle");
  const menu = nav?.querySelector(".site-nav__menu");

  if (!nav || !toggle || !menu) return;

  const closeMenu = ({ restoreFocus = false } = {}) => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");

    if (restoreFocus) toggle.focus();
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
  };

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu({ restoreFocus: true });
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 768px)");
  const handleDesktopChange = (event) => {
    if (event.matches) closeMenu();
  };

  desktopQuery.addEventListener?.("change", handleDesktopChange);
})();
