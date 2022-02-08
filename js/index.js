const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".nav-toggle");

window.addEventListener("scroll", () => {
  const primaryHeader = document.querySelector(".primary-header");
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
});

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
