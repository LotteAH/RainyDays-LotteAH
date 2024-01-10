function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartItemsCount() {
  const cartItems = getCartItems();
  const cartItemsCountElement = document.getElementById("cart-items-count");

  if (cartItemsCountElement) {
    if (cartItems.length === 0) {
      cartItemsCountElement.style.display = "none"; // Hide the count element
    } else {
      cartItemsCountElement.textContent = cartItems.length.toString();
      cartItemsCountElement.style.display = "block"; // Show the count element
    }
  }
}

updateCartItemsCount();
