window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav__ul"),
    menuItem = document.querySelectorAll(".nav__items"),
    hamburger = document.querySelector(".burger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("nav__ul-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("nav__ul-active");
    });
  });
});
