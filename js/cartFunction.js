
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
  
  updateCartItemsCount();
  