'use strict'

function changeAds() {
    const activeCase = document.querySelector('.rotator__case_active');
    activeCase.classList.remove('rotator__case_active');

    if (activeCase.nextElementSibling) {
        activeCase.nextElementSibling.classList.add('rotator__case_active');
    } else {
        document.querySelector('.rotator__case').classList.add('rotator__case_active');
    }
}

setInterval(changeAds, 1000);