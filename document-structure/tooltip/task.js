'use strict'

const tooltips = document.querySelectorAll('.has-tooltip');

function showTooltip(event) {
    event.preventDefault();

    if (this.nextElementSibling && this.nextElementSibling.classList.contains('tooltip')) { 
        this.nextElementSibling.classList.toggle('tooltip_active');
    } else {  
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.innerText = `${this.getAttribute('title')}`

        this.insertAdjacentElement('afterEnd', tooltip);
    } 
}

for (const element of tooltips) {
    element.addEventListener('click', showTooltip);
}