(function() {
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__navbar');
const menuClose = document.querySelector('.header__navbar-close');
const menuLinks = document.querySelectorAll('.header__navbar-link');

burger.addEventListener('click', () => {
    menu.classList.add('header__navbar--active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('header__navbar--active');
});

if (window.innerWidth <= 768) {
    menuLinks.forEach (link => {
        link.addEventListener('click', () => {
            menu.classList.remove('header__navbar--active');
        });
    });
}
}());