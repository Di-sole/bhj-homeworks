'use strict'

const currencyItems = document.getElementById('items');
const LoaderElem = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const currency = data.response.Valute;

        for (const i in currency) {
            const currencyItem = document.createElement('div');
            currencyItem.className = 'item';
            currencyItem.innerHTML = `
                <div class="item__code">
                    ${currency[i].CharCode}
                </div>
                <div class="item__value">
                    ${currency[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            `
            currencyItems.appendChild(currencyItem);
        }

        LoaderElem.classList.remove('loader_active');
    }
});

xhr.send();