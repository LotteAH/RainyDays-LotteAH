const resultsContainer = document.getElementById("specific_jacket");
const loadingIndicator = document.getElementById("loading-indicator");

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getSpecificJacketIdFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function displaySpecificJacket() {
  showLoadingIndicator();

  try {
    const jacketsId = await getSpecificJacketIdFromQuery();
    if (!jacketsId) {
      throw new Error("Jacket ID not found in the query parameters.");
    }

    const response = await fetch(`${url}/${jacketsId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jackets = await response.json();
    hideLoadingIndicator();

    resultsContainer.innerHTML = `
      <div id="specific_jacket">
        <div class="container_specific_jacket">
          <div class="selected_image_products">
            <img src="${jackets.image}" alt="${jackets.description}" />
          </div>
          <div class="product_info">
            <h3>${jackets.title}</h3>
            <h4>${jackets.baseColor}</h4>
            <h5>${jackets.description}</h5>
            <p class="price">$ ${jackets.price}</p>
            <button class="cta-blue_cart" id="addToCartBtn">ADD TO CART</button>
          </div>
        </div>
      </div>
    `;


    const addToCartButton = document.getElementById("addToCartBtn");
    addToCartButton.addEventListener("click", () => {
      addToCart(jackets); // Call function to add item to cart
    });
  } catch (error) {
    console.error("An error occurred:", error);

    const errorMessage = document.createElement('div');
    errorMessage.textContent = "An error occurred. Please try again later.";
    errorMessage.classList.add('error-message');
  
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(errorMessage);
  }
}

function showLoadingIndicator() {
  loadingIndicator.style.display = "block";
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}

function addToCart(item) {
  // Here, you can write the logic to add the 'item' to the cart.
  // For example, you can use localStorage to store the item details.
  // This is a simple example, you might need to adjust it based on your cart implementation.

  // Sample code to store item details in localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Optionally, redirect the user to the cart page after adding to the cart
  window.location.href = "cart.html";
}

displaySpecificJacket();
