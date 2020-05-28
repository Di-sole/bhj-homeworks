const quantityControls = document.querySelectorAll('.product__quantity-control');
const addProductBtns = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

function changeQuantity() {
    let productQuantity = this.parentElement.querySelector('.product__quantity-value');

    if (this.classList.contains('product__quantity-control_dec') && productQuantity.textContent > 1) {
        --productQuantity.textContent;
    } else if (this.classList.contains('product__quantity-control_inc')) {
        ++productQuantity.textContent;
    }
}

function addProduct() {
    const newProductQuantity = this.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
    const newProductImage = this.closest('.product').querySelector('.product__image').getAttribute('src');
    const newProductId = this.closest('.product').dataset.id;

    const productsInCart = Array.from(cartProducts.children);
    const productInCart = productsInCart.find(e => e.dataset.id === newProductId);

    if (productInCart) {
        const productInCartQuantity = productInCart.querySelector('.cart__product-count');
        
        productInCartQuantity.textContent = parseInt(productInCartQuantity.textContent) + parseInt(newProductQuantity);
    } else {
        const newProduct = document.createElement('div');
        newProduct.className = 'cart__product';
        newProduct.dataset.id = `${newProductId}`;
        newProduct.innerHTML = `
            <img class="cart__product-image" src="${newProductImage}">
            <div class="cart__product-count">${newProductQuantity}</div>
        `;

        cartProducts.appendChild(newProduct);
    }
}

for (const control of quantityControls) {
    control.addEventListener('click', changeQuantity);
}

for (const btn of addProductBtns) {
    btn.addEventListener('click', addProduct);
}
