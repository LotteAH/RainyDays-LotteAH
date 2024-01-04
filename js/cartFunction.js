
function getCartItems() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  
  function updateCartItemsCount() {
    const cartItems = getCartItems();
    const cartItemsCountElement = document.getElementById("cart-items-count");
  
    if (cartItemsCountElement) {
      cartItemsCountElement.textContent = cartItems.length.toString();
    }
  }
  
  // Call updateCartItemsCount() when the page loads or cart items change
  updateCartItemsCount(); // Make sure this function is called appropriately
  