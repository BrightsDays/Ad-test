const productsOrder = document.querySelector('.products__order'),
      orderButton = productsOrder.querySelector('button'),
      productsList = document.querySelectorAll('.products__card');

function changeButton() {
    if (productsList.length % 2 === 0) {
        orderButton.style.margin = '0 auto';
        productsOrder.style.maxWidth = '100%';
    }
}

changeButton();
window.addEventListener('resize', function() {
        changeButton();
});