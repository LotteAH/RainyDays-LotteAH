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
            <a href="cart.html" class="cta-blue_cart">ADD TO CART</a>
          </div>
        </div>
      </div>
    `;
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

displaySpecificJacket();


