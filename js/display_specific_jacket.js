
const resultsContainer = document.getElementById("specific_jacket");
const loadingIndicator = document.getElementById("loading-indicator");

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getSpecificJacketIdFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function displaySpecificJacket() {
  showLoadingIndicator();

  const jacketsId = await getSpecificJacketIdFromQuery();
  if (!jacketsId) {
    return;
  }

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketsId}`);
  const jackets = await response.json();

  hideLoadingIndicator();

  resultsContainer.innerHTML = `
    <div id="specific_jacket">
    <div  class="container_specific_jacket">
      <div class="selected_image_products">
        <img src="${jackets.image}" alt="${jackets.description}" />
      </div>
      <div class="product_info">
        <h3>${jackets.title}</h3>
        <h4>${jackets.baseColor}</h4>
        <h5>${jackets.description}</h5>
        <p class="price">$ ${jackets.price}</p>
        <a href="cart.html" class="cta-blue_cart">ADD TO CART</a>
      </div>
    </div>
    </div>
  `;
}

function showLoadingIndicator() { 
  loadingIndicator.style.display = "block";
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}

displaySpecificJacket();

