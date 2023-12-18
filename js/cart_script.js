import { showLoadingIndicator, hideLoadingIndicator } from "./indicator.js";

const resultsContainer = document.getElementById("cart_item");

const url = "https://api.noroff.dev/api/v1/rainy-days";

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function createCartItem(item) {
  const cartContainer = document.getElementById("cart_item");

  const cartHTML = `
          <div class="cart_item">
          <a href="cart.html?id=${item.id}">
            <div class="result">
            <img src="${item.image}" alt="${item.description}" />
            </div>
            <div class="product_info">
              <h3>${item.title}</h3>
              <h4>${item.baseColor}</h4>
              <h5>${item.description}</h5>
              <p class="price">$ ${item.price}</p>
              <a href="/checkout.html" class="cta-green cta-cart" id="addToCartBtn">CHECK OUT</a>
              <button class="cta-blue cta-cart">CONTINUE SHOPPINGT</button>
            </div>
          </div>
        `;

  cartContainer.innerHTML += cartHTML;
}

function initCartPage() {
  const cart = getCartItems();
  cart.forEach(createCartItem);
  hideLoadingIndicator();
}

initCartPage();
