'use strict'

const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.getElementById( 'chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

function getResponseMessage() {
    const responseMessage = [
        'Вы нам не нравитесь, не пишите нам больше',
        'Кто тут?',
        'К сожалению, все операторы сейчас заняты',
        'До свидания!',
        'Мы ничего не будем вам продавать!',
        'Вы ничего не купили, до свидания!',
        'Где ваша совесть?',
        'Я слишком устал, чтобы с вами разговаривать',
        'Ожидайте, но мы вам не ответим',
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
    ];
    
    let index = Math.floor(Math.random() * responseMessage.length);

    return responseMessage[index];
}

chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && chatInput.value != '') {
        const currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
        const responseMessage = getResponseMessage();

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
            <div class="message">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">${responseMessage}</div>
            </div>
        `;

        chatInput.value = '';
    }
})