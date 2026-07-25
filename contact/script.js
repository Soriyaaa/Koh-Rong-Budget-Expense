document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var mainNav   = document.getElementById("mainNav");

  if (!navToggle || !mainNav) return;

  function onToggle() {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
  navToggle.addEventListener("click", onToggle);

  // Close menu after any nav link is tapped
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu if viewport is resized past the breakpoint
  function onResize() {
    if (window.innerWidth > 640) {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
  window.addEventListener("resize", onResize);
});
