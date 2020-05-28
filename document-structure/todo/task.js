'use strict'

const tasksList = document.getElementById('tasks__list');
const form = document.querySelector('.tasks__control');
const inputField = document.getElementById('task__input');

function addTask(event) {
    if (inputField.value != '') {
        event.preventDefault();

        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">${inputField.value}</div>
            <a href="#" class="task__remove">&times;</a>
        `;

        tasksList.appendChild(task);
        inputField.value = '';
    }
}

function removeTask(event) {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        event.target.parentElement.remove();
    }
}

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', removeTask);