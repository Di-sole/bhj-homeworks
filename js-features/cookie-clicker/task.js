'use strict'

const cookieImage = document.getElementById('cookie');
const clickRate = document.getElementById('clicker__rate');
const numberOfClicks = document.getElementById('clicker__counter');
let resentClickTime = new Date().getTime();;

cookieImage.onclick = function() {
    const clickTime = new Date().getTime();

    ++numberOfClicks.textContent;
    cookieImage.width === 200 ? cookieImage.width = 170 : cookieImage.width = 200;
    clickRate.textContent = (1000 / (clickTime - resentClickTime)).toFixed(2);

    resentClickTime = new Date().getTime();
}