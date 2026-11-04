
document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("nav-btn");
  const navbar = document.getElementById("navbar");
  const navClose = document.getElementById("nav-close");

  navBtn.addEventListener("click", function () {
    navbar.classList.toggle("showNav");
  });

  navClose.addEventListener("click", function () {
    navbar.classList.remove("showNav");
  });
});