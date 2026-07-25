document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var navMobile = document.getElementById("navMobile");

  if (!navToggle || !navMobile) return;

  function closeMenu() {
    navMobile.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    var isOpen = navMobile.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  navToggle.addEventListener("click", toggleMenu);

  // Close menu after any mobile nav link is tapped
  navMobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close menu if viewport is resized past the mobile breakpoint (768px)
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});
