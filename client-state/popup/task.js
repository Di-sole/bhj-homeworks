'use strict'

const subscribeModal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");

    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}

function showPopup() {
    if (getCookie('shown') != 'true') {
        subscribeModal.classList.add('modal_active');
    }
}

function closePopup() {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'shown=true';
}

window.addEventListener('load', () => setTimeout(showPopup, 1000));
closeBtn.addEventListener('click', closePopup);