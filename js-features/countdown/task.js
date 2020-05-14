const countdown = function() {
    const startValue = document.getElementById('timer');

    if (startValue.textContent > 0) {
        startValue.textContent -= 1;
    } else {
        alert('Вы победили в конкурсе!');
        startValue.textContent = 59;
    }
}

setInterval(countdown, 1000);