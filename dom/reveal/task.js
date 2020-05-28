'use strict'

const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (const element of revealElements) {
        const revealBottom = element.getBoundingClientRect().bottom;

        if (revealBottom < window.innerHeight && revealBottom > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
});