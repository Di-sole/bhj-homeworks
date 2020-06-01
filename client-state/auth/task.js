'use strict'

const signinElem = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcomeElem = document.getElementById('welcome');
const userId = document.getElementById('user_id');

signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            
            if (response.success === false) {
                alert('Неверный логин/пароль');
            } else {
                localStorage.userId = response.user_id;
                userId.textContent = response.user_id;
                signinElem.classList.remove('signin_active');
                welcomeElem.classList.add('welcome_active');
            }
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.userId) {
        userId.textContent = localStorage.userId;
        welcomeElem.classList.add('welcome_active');
    } else {
        signinElem.classList.add('signin_active');
    }
})