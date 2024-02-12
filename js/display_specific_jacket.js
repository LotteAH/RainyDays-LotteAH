import { showLoadingIndicator, hideLoadingIndicator } from "./indicator.js";

const resultsContainer = document.getElementById("specific_jacket");

const url = "http://flower-power.local/wp-json/wc/store/products";

async function getSpecificJacketIdFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function displaySpecificJacket() {

  try {
    showLoadingIndicator()
    const jacketId = await getSpecificJacketIdFromQuery();
    if (!jacketId) {
      throw new Error("Jacket ID not found in the query parameters.");
    }

    const response = await fetch(`${url}/${jacketId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jacket = await response.json();
    hideLoadingIndicator()
    resultsContainer.innerHTML = `
      <div id="specific_jacket">
        <div class="container_specific_jacket">
          <div class="selected_image_products">
            <img src="${jacket.images[0].src}" alt="${jacket.name}" />
          </div>
          <div class="product_info">
            <h3>${jacket.name}</h3>
            <h4>${jacket.attributes[0].name}: ${jacket.attributes[0].terms[0].name}</h4>
            <h5>${jacket.description}</h5>
            <p class="price">${jacket.prices.currency_prefix} ${jacket.prices.price}</p>
            <button class="cta-blue_cart" id="addToCartBtn">ADD TO CART</button>
          </div>
        </div>
      </div>
    `;

    const addToCartButton = document.getElementById("addToCartBtn");
    addToCartButton.addEventListener("click", () => {
      addToCart(jacket); 
    });
  } catch (error) {
    console.error("An error occurred:", error);

    const errorMessage = document.createElement('div');
    errorMessage.textContent = "An error occurred. Please try again later.";
    errorMessage.classList.add('error-message');
  
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(errorMessage);
    hideLoadingIndicator()
  }
}

function addToCart(item) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.location.href = "cart.html";
}

displaySpecificJacket();
