import { HomePage } from "./pages/HomePage.js";
import { CoursesPage } from "./pages/CoursesPage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { PricingPage } from "./pages/PricingPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";

// كل مسار مرتبط بصفحة وعنوان
const routes = {
  "/": {
    title: "SHARKS Online School",
    render: HomePage,
  },

  "/courses": {
    title: "Courses | SHARKS Online School",
    render: CoursesPage,
  },

  "/about": {
    title: "About | SHARKS Online School",
    render: AboutPage,
  },

  "/pricing": {
    title: "Pricing | SHARKS Online School",
    render: PricingPage,
  },

  "/contact": {
    title: "Contact | SHARKS Online School",
    render: ContactPage,
  },
};

function getCurrentRoute() {
  // مثال:
  // الرابط #/about
  // النتيجة ستكون /about
  return window.location.hash.slice(1) || "/";
}

function updateActiveNavigation(currentRoute) {
  // نحصل على جميع لينكات النافبار
  const links = document.querySelectorAll("[data-route]");

  links.forEach((link) => {
    const linkRoute = link.dataset.route;

    if (linkRoute === currentRoute) {
      // تحديد الصفحة الحالية
      link.setAttribute("aria-current", "page");
    } else {
      // إزالة التحديد من الصفحات الأخرى
      link.removeAttribute("aria-current");
    }
  });
}

export async function renderCurrentRoute() {
  // استخدمنا async لأن بعض الصفحات تحتاج انتظار بيانات من الـ API
  const app = document.querySelector("#app");
  const currentRoute = getCurrentRoute();

  // إذا لم نجد المسار نستخدم صفحة 404
  const route = routes[currentRoute];

  if (!route) {
    document.title = "Page Not Found | SHARKS Online School";
    app.innerHTML = NotFoundPage();
    updateActiveNavigation("");
    return;
  }

  // نعرض رسالة تحميل بسيطة أثناء انتظار تحميل الصفحة
  app.innerHTML = "<p>Loading page...</p>";

  try {
    // await ينتظر انتهاء تحميل الصفحة قبل عرضها
    const page = await route.render();
    app.innerHTML = page;

    // تغيير عنوان التاب
    document.title = route.title;

    // وضع محتوى الصفحة داخل main
  } catch (error) {
    // try يجرب تنفيذ الكود الذي قد ينتج عنه خطأ
    // catch يمسك الخطأ حتى لا يتوقف الموقع بالكامل
    document.title = "Error | SHARKS Online School";

    app.innerHTML = `
      <p>Something went wrong.</p>
      <p>We could not load this page. Please try again.</p>
    `;

    // المستخدم يرى رسالة بسيطة بينما المطور يرى تفاصيل الخطأ
    console.error(error);
  }

  // تحديث اللينك النشط
  updateActiveNavigation(currentRoute);

  // الرجوع إلى أعلى الصفحة
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  // نقل التركيز للمحتوى الجديد لدعم Accessibility
  app.focus();
}

export function initializeRouter() {
  // عرض الصفحة عند فتح الموقع
  renderCurrentRoute();

  // إعادة العرض كلما تغير الجزء الموجود بعد #
  window.addEventListener("hashchange", renderCurrentRoute);
}
