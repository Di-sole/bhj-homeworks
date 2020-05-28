'use strict'

const nextImage = document.querySelector('.slider__arrow_next');
const previousImage = document.querySelector('.slider__arrow_prev');
const images = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

let activeImageIndex = 0;
let activeDotIndex = 0;

nextImage.onclick = function() {
    images[activeImageIndex].classList.remove('slider__item_active');
    sliderDots[activeDotIndex].classList.remove('slider__dot_active');

    if (activeImageIndex < images.length - 1) {
        images[activeImageIndex + 1].classList.add('slider__item_active');
        activeImageIndex++;
    } else {
        images[0].classList.add('slider__item_active');
        activeImageIndex = 0;
    }

    sliderDots[activeImageIndex].classList.add('slider__dot_active');
    activeDotIndex = activeImageIndex;
}

previousImage.onclick = function() {
    images[activeImageIndex].classList.remove('slider__item_active');
    sliderDots[activeDotIndex].classList.remove('slider__dot_active');

    if (activeImageIndex > 0) {
        images[activeImageIndex - 1].classList.add('slider__item_active');
        activeImageIndex--;
    } else {
        images[images.length - 1].classList.add('slider__item_active');
        activeImageIndex = images.length - 1;
    }

    sliderDots[activeImageIndex].classList.add('slider__dot_active');
    activeDotIndex = activeImageIndex;
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = function() {
        images[activeImageIndex].classList.remove('slider__item_active');
        images[i].classList.add('slider__item_active');
        sliderDots[activeDotIndex].classList.remove('slider__dot_active');
        sliderDots[i].classList.add('slider__dot_active');

        activeImageIndex = i;
        activeDotIndex = i;
    }
}