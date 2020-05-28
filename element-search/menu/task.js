'use strict'

const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function(event) {
        const itemWithSubMenu = menuLinks[i].closest('.menu__item').querySelector('.menu_sub');
        const activeItem = document.querySelector('.menu_active');

        if (!!activeItem && itemWithSubMenu != activeItem) {
            activeItem.classList.remove('menu_active');
        }

        if (!!itemWithSubMenu) {
            event.preventDefault();
            itemWithSubMenu.classList.toggle('menu_active');
        }
    }
}