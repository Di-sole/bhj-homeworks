'use strict'

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText).data;
        const title = data.title;
        const answers = data.answers;

        pollTitle.innerText = title;

        for (const answer of answers) {
            const button = document.createElement('button');
            button.className = 'poll__answer'
            button.innerText = answer;

            pollAnswers.appendChild(button);
        }

        const buttons = document.querySelectorAll('.poll__answer');

        for (const button of buttons) {
            button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }
    }
});

xhr.send();