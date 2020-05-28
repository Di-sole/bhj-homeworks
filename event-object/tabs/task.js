'use strict'

const tabElements = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', function() {
        const activeTab = document.querySelector('.tab_active');
        const activeContent = document.querySelector('.tab__content_active');

        activeTab.classList.remove('tab_active');
        activeContent.classList.remove('tab__content_active');
        tabElements[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active'); 
    });
}