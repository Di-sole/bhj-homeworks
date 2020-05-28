'use strict'

const mainModal = document.getElementById('modal_main');
const successModal = document.getElementById('modal_success');
const popupCloseBtn = document.getElementsByClassName('modal__close');
const successButton = document.querySelector('.btn_success');

function showPopup() {
    mainModal.classList.add('modal_active');
}

setTimeout(showPopup, 1000);

for (let i = 0; i < popupCloseBtn.length; i++) {
    popupCloseBtn[i].onclick = function() {
        if (popupCloseBtn[i].classList.contains('show-success')) {
            mainModal.classList.remove('modal_active');
            successModal.classList.add('modal_active');
        } else {
            mainModal.classList.remove('modal_active');
            successModal.classList.remove('modal_active');
        }
    }
}

successButton.onclick = function() {
    successModal.classList.remove('modal_active');
}
