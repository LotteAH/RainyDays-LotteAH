import { showLoadingIndicator, hideLoadingIndicator } from "./indicator.js";

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function getCartTotal(items) {
  return items.reduce(function(total, item) {
    return total += item.price;
  }, 0);
}

function showCartTotal() {
  const cart = getCartItems();
  console.log(cart);
  const cartTotalContainer = document.querySelector(".cartnumbers");
  cartTotalContainer.innerText = getCartTotal(cart);
  console.log(getCartTotal(cart));
}

showCartTotal();