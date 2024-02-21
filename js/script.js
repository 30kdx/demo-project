window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-bar__list'),
    menuItem = document.querySelectorAll('.list__items'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-bar__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-bar__list_active');
        })
    })
})