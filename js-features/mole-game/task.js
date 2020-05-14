'use strict'

getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        const hits = document.getElementById('dead');
        const misses = document.getElementById('lost');

        if (getHole(i).classList.contains('hole_has-mole')) {
            ++hits.textContent;
        } else {
            ++misses.textContent;
        }    
    
        if (hits.textContent == 10) {
            alert('Победа!');
            hits.textContent = 0;
            misses.textContent = 0;
        } else if (misses.textContent == 5) {
            alert('Вы проиграли');
            hits.textContent = 0;
            misses.textContent = 0;
        } 
    }
}