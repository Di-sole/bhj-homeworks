'use strict'

const menuButtons = document.getElementsByClassName('dropdown__value');
const links = document.getElementsByClassName('dropdown__link');

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', function() {
        const list = this.nextElementSibling;
        const activeList = document.querySelector('.dropdown__list_active');
        
        if (!!activeList && activeList != list) {
            activeList.classList.remove('dropdown__list_active');
        }

        list.classList.toggle('dropdown__list_active'); 
    });
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();
        const list = this.closest('.dropdown__list');
        const button = this.closest('.dropdown__list').previousElementSibling;

        list.classList.remove('dropdown__list_active');
        button.textContent = this.textContent;
    });
}