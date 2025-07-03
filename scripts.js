// Dark Mode Toggle with Lucide Rotation
const toggle = document.getElementById("dark-toggle");
const icon = document.getElementById("dark-icon");
const root = document.documentElement;

function setTheme(theme) {
  if (theme === "dark") {
    root.classList.add("dark");
    icon.setAttribute("data-lucide", "moon");
  } else {
    root.classList.remove("dark");
    icon.setAttribute("data-lucide", "sun");
  }
  lucide.createIcons(); // Lucide ikonlarını güncelle
}

toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";

  // Icon rotate + fade animation
  icon.classList.add("rotate-180", "opacity-0");
  setTimeout(() => {
    icon.setAttribute("data-lucide", isDark ? "moon" : "sun");
    lucide.createIcons();
    icon.classList.remove("rotate-180", "opacity-0");
  }, 300);
});

setTheme(localStorage.theme || "light");

// AOS Animations Init
AOS.init({
  duration: 800,
  once: true,
});

// Scroll-to-Top
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 200 ? "block" : "none";
});
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Smooth Scroll with Header Offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const headerHeight = document.querySelector("header").offsetHeight; // Dinamik header yüksekliği
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
