// Dark Mode Toggle
const toggle = document.getElementById("dark-toggle");
const root = document.documentElement;
toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
});
if (localStorage.theme === "dark") root.classList.add("dark");

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
