'use strict'

const interestCheck = document.querySelectorAll('.interest__check');

function isChecked() {
    const list = this.closest('.interest');
        
    if (list.children.length > 1) {
        const nestedListItems = list.querySelectorAll('.interest__check');

        if (this.checked) {
            nestedListItems.forEach(element => element.checked = true);
        } else {
            nestedListItems.forEach(element => element.checked = false);
        }
    }
}

for (const interest of interestCheck) {
    interest.addEventListener('change', isChecked);
}