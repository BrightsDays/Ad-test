window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const productsOrder = document.querySelector('.products__order'),
          productsList = document.querySelectorAll('.products__card');

    const changeButton = () => {
        console.log(productsList.length)
        if (productsList.length % 2 === 0) {
            console.log('lo')
            productsOrder.style.margin = '0 auto';
            if (window.width > 600 || document.body.clientWidth > 600) {
                productsOrder.style.gridColumnStart = '1';
                productsOrder.style.gridColumnEnd = '3';
            } else {
                productsOrder.style.gridColumnStart = '1';
                productsOrder.style.gridColumnEnd = '1';
            }
        }
    }

    changeButton();
    window.addEventListener(`resize`, () => {
        changeButton();
    });
});