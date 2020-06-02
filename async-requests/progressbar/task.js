'use strict'

const formElem = document.forms.form;
const progressElem = document.getElementById('progress');

formElem.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formElem);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(event) {
        progressElem.value = event.loaded / event.total
    }
    xhr.send(formData);
})