// NavBar Scroll Color Change
window.addEventListener("scroll", () => {
  const primaryHeader = document.querySelector(".primary-header");
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
});
