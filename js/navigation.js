export const initNavigation = () => {
  const nav = document.querySelector(".site-nav");
  const toggle = nav?.querySelector(".site-nav__toggle");
  const menu = nav?.querySelector(".site-nav__menu");

  // نتوقف إذا لم نجد العناصر المطلوبة
  if (!nav || !toggle || !menu) {
    return;
  }

  function closeMenu({ restoreFocus = false } = {}) {
    // إزالة كلاس فتح القائمة
    nav.classList.remove("is-open");

    // تحديث معلومات Accessibility
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");

    // إعادة التركيز للزر عند استخدام Escape
    if (restoreFocus) {
      toggle.focus();
    }
  }

  function openMenu() {
    // إضافة كلاس فتح القائمة
    nav.classList.add("is-open");

    // تحديث معلومات Accessibility
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    // إغلاق القائمة بعد الضغط على أي لينك
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    // إغلاق القائمة عند الضغط على Escape
    if (event.key === "Escape") {
      closeMenu({ restoreFocus: true });
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 768px)");

  desktopQuery.addEventListener("change", (event) => {
    // إغلاق قائمة الموبايل عند الانتقال لحجم الديسكتوب
    if (event.matches) {
      closeMenu();
    }
  });
};
