//BURGER MENU
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-bar__list"),
    menuItem = document.querySelectorAll(".nav-bar__items"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("nav-bar__list_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("nav-bar__list_active");
    });
  });
});

//SET THEME AND REMEMBER
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeStyleLink = document.getElementById("theme-style");
  let selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme) {
    document.body.className = selectedTheme;
    themeStyleLink.href = `css/${selectedTheme}.css`;
  }

  themeToggleBtn.addEventListener("click", function () {
    if (themeStyleLink.href.includes("light-theme")) {
      themeStyleLink.href = "css/style.css";
      selectedTheme = "style";
    } else {
      themeStyleLink.href = "css/light-theme.css";
      selectedTheme = "light-theme";
    }
    localStorage.setItem("selectedTheme", selectedTheme);
  });
});
