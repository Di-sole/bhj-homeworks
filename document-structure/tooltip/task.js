'use strict'

const tooltips = document.querySelectorAll('.has-tooltip');
const text = document.getElementsByTagName('body')[0];

function showTooltip(event) {
    event.preventDefault();

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = `${this.getAttribute('title')}`

    if (!this.nextElementSibling) {
        this.insertAdjacentElement('afterEnd', tooltip);
        tooltip.classList.add('tooltip_active');

        console.log('новый');
    } else if (!this.nextElementSibling.classList.contains('tooltip')) {
        text.insertBefore(tooltip, this.nextElementSibling);
        tooltip.classList.add('tooltip_active');

        console.log('новый');
    } else {
        // const activeTooltip = document.querySelector('.tooltip_active');
        // console.log(activeTooltip);
        
        // if (activeTooltip === null) {
        //     this.nextElementSibling.classList.add('tooltip_active');
        // } else if (activeTooltip === this.nextElementSibling) {
        //     activeTooltip.classList.remove('tooltip_active');
        //     this.nextElementSibling.classList.add('tooltip_active');
        // } else {
        //     this.nextElementSibling.classList.add('tooltip_active');
        // }

        this.nextElementSibling.classList.toggle('tooltip_active');

        console.log('уже есть');        
    }
}

for (const element of tooltips) {
    element.addEventListener('click', showTooltip);
}