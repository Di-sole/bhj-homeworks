'use strict'

const bookContent = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.font-size');
const textColorControls = document.querySelector('.book__control_color').querySelectorAll('.color');
const backgroundColorControls = document.querySelector('.book__control_background').querySelectorAll('.color');

function changeFontSize(event) {
    event.preventDefault();

    const activeControl = document.querySelector('.font-size_active');

    activeControl.classList.remove('font-size_active');
    this.classList.add('font-size_active');

    bookContent.classList.remove('book_fs-small');
    bookContent.classList.remove('book_fs-big');

    if (this.dataset.size === 'small') {
        bookContent.classList.add('book_fs-small');
    } else if (this.dataset.size === 'big') {
        bookContent.classList.add('book_fs-big');
    }
}

function changeTextColor(event) {
    event.preventDefault();

    const activeControl = document.querySelector('.color_active');

    activeControl.classList.remove('color_active');
    this.classList.add('color_active');

    bookContent.classList.remove('book_color-gray');
    bookContent.classList.remove('book_color-whitesmoke');

    if (this.dataset.color === 'gray') {
        bookContent.classList.add('book_color-gray');
    } else if (this.dataset.color === 'whitesmoke') {
        bookContent.classList.add('book_color-whitesmoke');
    }
}

function changeBackgroundColor(event) {
    event.preventDefault();

    const activeControl = document.querySelector('.color_active');
    
    activeControl.classList.remove('color_active');
    this.classList.add('color_active');

    bookContent.classList.remove('book_bg-gray');
    bookContent.classList.remove('book_bg-black');

    if (this.dataset.color === 'gray') {
        bookContent.classList.add('book_bg-gray');
    } else if (this.dataset.color === 'black') {
        bookContent.classList.add('book_bg-black');
    }
}

for (const element of fontSizeControls) {
    element.addEventListener('click', changeFontSize);
}

for (const control of textColorControls) {
    control.addEventListener('click', changeTextColor);
}

for (const control of backgroundColorControls) {
    control.addEventListener('click', changeBackgroundColor);
}