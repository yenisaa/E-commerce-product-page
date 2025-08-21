"use strict";
// Burger Menu 
const burgerMenu = document.querySelector('#burger-menu');
// Side Menu 
const sideMenu = document.querySelector('#side-nav');
// Close Icon 
const closeIcon = document.querySelector('#close');
if (burgerMenu && sideMenu) {
    burgerMenu.addEventListener('click', () => {
        sideMenu.style.display = 'block';
        sideMenu.classList.add('show');
        document.body.classList.add("lock-scroll");
    });
}
if (burgerMenu && sideMenu) {
    closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', () => {
        sideMenu.classList.remove("show");
        document.body.classList.remove("lock-scroll");
    });
}
