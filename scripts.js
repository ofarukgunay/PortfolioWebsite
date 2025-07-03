const toggle = document.getElementById("dark-toggle");
const icon = document.getElementById("dark-icon");
const root = document.documentElement;

// Set Theme and Update Icon
function setTheme(theme) {
  if (theme === "dark") {
    root.classList.add("dark");
    icon.setAttribute("data-lucide", "moon");
  } else {
    root.classList.remove("dark");
    icon.setAttribute("data-lucide", "sun");
  }
  lucide.createIcons(); // Render Lucide Icons
}

// Toggle Click
toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";

  icon.classList.add("rotate-180", "opacity-0");
  setTimeout(() => {
    icon.setAttribute("data-lucide", isDark ? "moon" : "sun");
    lucide.createIcons();
    icon.classList.remove("rotate-180", "opacity-0");
  }, 300);
});

// Load saved theme
setTheme(localStorage.theme || "light");

// 📜 AOS Animations Init
AOS.init({
  duration: 800,
  once: true,
});

// 🔝 Scroll-to-Top Button
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.style.display = "block";
    toTop.classList.add("opacity-100", "translate-y-0");
  } else {
    toTop.classList.remove("opacity-100", "translate-y-0");
    toTop.style.display = "none";
  }
});
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// 🖱️ Smooth Scroll with Header Offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const headerHeight = document.querySelector("header").offsetHeight;
    const targetID = this.getAttribute("href");
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
// 🌐 Translation Data
const translations = {
  tr: {
    "hero-title": "Merhaba, ben Omer Faruk",
    "hero-subtitle":
      "Bilgisayar Mühendisliği Öğrencisi | Yapay Zeka Tutkunu | AUV Geliştirici",
    "about-title": "Hakkımda",
    "about-text":
      "Ben, Yapay Zeka, robotik ve yazılım geliştirme deneyimine sahip tutkulu bir bilgisayar mühendisliği öğrencisiyim...",
    "projects-title": "Projeler",
    "contact-title": "İletişim",
    "send-message": "Mesaj Gönder",
    "footer-text": "© 2025 Omer Faruk Gunay. Tüm hakları saklıdır.",
  },
  en: {
    "hero-title": "Hi, I'm Omer Faruk",
    "hero-subtitle":
      "Computer Engineering Student | AI Enthusiast | AUV Developer",
    "about-title": "About Me",
    "about-text":
      "I am a passionate computer engineering student with experience in AI, robotics, and software development...",
    "projects-title": "Projects",
    "contact-title": "Contact Me",
    "send-message": "Send Message",
    "footer-text": "© 2025 Omer Faruk Gunay. All rights reserved.",
  },
};

// 🌐 Language Toggle
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  const currentLang = localStorage.getItem("lang") || "tr";
  const newLang = currentLang === "tr" ? "en" : "tr";
  localStorage.setItem("lang", newLang);
  setLanguage(newLang);
});

// 🌐 Set Language
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.getElementById("lang-icon").textContent =
    lang === "tr" ? "🇹🇷" : "🇬🇧";
  document.getElementById("lang-text").textContent = lang.toUpperCase();
}

// 🌐 Load saved language
setLanguage(localStorage.getItem("lang") || "tr");
