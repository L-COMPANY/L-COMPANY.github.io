let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartElement.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - Rp " + item.price;
    cartElement.appendChild(li);
  });

  totalElement.textContent = "Rp " + total;
}
