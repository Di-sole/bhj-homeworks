'use strict'

const textEditor = document.getElementById('editor');
const clearButton = document.getElementById('clear-button');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.text) {
        textEditor.value = localStorage.text;
    }
});

textEditor.addEventListener('input', () => localStorage.text = textEditor.value);

clearButton.addEventListener('click', (e) => {
    textEditor.value = '';
    delete localStorage.text;
})