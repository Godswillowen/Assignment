let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
  alert(item + " added to cart!");
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((product, index) => {
    cartItems.innerHTML += `<p>${index + 1}. ${product.item} - ₦${product.price}</p>`;
  });

  cartTotal.innerText = "Total: ₦" + total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
  } else {
    alert("Order placed! Total: ₦" + total);
    cart = [];
    total = 0;
    updateCart();
  }
}
