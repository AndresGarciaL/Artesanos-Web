// Obtener el elemento del selector de cantidad
var quantitySelector = document.querySelector('.quantity-selector');

// Obtener los botones y el input
var minusBtn = quantitySelector.querySelector('.minus');
var plusBtn = quantitySelector.querySelector('.plus');
var quantityInput = quantitySelector.querySelector('.quantity-input');

// Función para incrementar la cantidad
function increaseQuantity() {
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

// Función para decrementar la cantidad
function decreaseQuantity() {
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Asociar eventos a los botones
plusBtn.addEventListener('click', increaseQuantity);
minusBtn.addEventListener('click', decreaseQuantity);
