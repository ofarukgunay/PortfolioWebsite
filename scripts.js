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
    "about-nav": "Hakkımda",
    "projects-nav": "Projeler",
    "contact-nav": "İletişim",
    "hero-title": "Merhaba, ben Omer Faruk",
    "hero-subtitle":
      "Bilgisayar Mühendisliği Öğrencisi | Yapay Zeka Tutkunu | AUV Geliştirici",
    "view-projects": "Projeleri Gör",
    "contact-me": "İletişime Geç",
    "about-title": "Hakkımda",
    "about-text":
      "Ben, Yapay Zeka, robotik ve yazılım geliştirme deneyimine sahip tutkulu bir bilgisayar mühendisliği öğrencisiyim. Otonom sistemler geliştiriyorum, öğrenci topluluklarını yönetiyorum ve hackathonlarda yenilikçi çözümler üretiyorum.",
    "projects-title": "Projeler",
    "contact-title": "İletişim",
    "send-message": "Mesaj Gönder",
    "footer-text": "© 2025 Omer Faruk Gunay. Tüm hakları saklıdır.",
  },
  en: {
    "about-nav": "About",
    "projects-nav": "Projects",
    "contact-nav": "Contact",
    "hero-title": "Hi, I'm Omer Faruk",
    "hero-subtitle":
      "Computer Engineering Student | AI Enthusiast | AUV Developer",
    "view-projects": "View Projects",
    "contact-me": "Contact Me",
    "about-title": "About Me",
    "about-text":
      "I am a passionate computer engineering student with experience in AI, robotics, and software development. I build autonomous systems, lead student communities, and create innovative solutions at hackathons.",
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
    el.textContent = translations[lang][key];
  });
  document.getElementById("lang-icon").textContent =
    lang === "tr" ? "🇹🇷" : "🇬🇧";
  document.getElementById("lang-text").textContent = lang.toUpperCase();
}

// 🌐 Load Language
setLanguage(localStorage.getItem("lang") || "tr");
// 📚 Lucide Icons Initialization
lucide.createIcons();
// Ensure Lucide icons are created after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});
