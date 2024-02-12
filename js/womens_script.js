import { showLoadingIndicator, hideLoadingIndicator } from "./indicator.js";

const resultsContainer = document.getElementById("womens_results");
const loadingIndicator = document.querySelector(".loader");
const url = "http://flower-power.local/wp-json/wc/store/products";

async function getWomensJackets() {
  try {
    showLoadingIndicator();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    resultsContainer.innerHTML = "";
    hideLoadingIndicator();
    
    products.forEach(product => {
      if (product.categories.some(cat => cat.slug === "womens")) {
        const productHTML = `
          <div class="container products">
            <a href="${product.permalink}">
              <div class="result">
                <img src="${product.images[0].src}" alt="${product.name}" class="product_img_women"/>
              </div>
              <h3>${product.name}</h3>
              <h4>${product.attributes[0].terms[0].name}</h4>
              <p class="price">$ ${product.prices.price}</p>
            </a>
          </div>
        `;
        
        const productElement = document.createElement('div');
        productElement.innerHTML = productHTML;
        
        resultsContainer.appendChild(productElement);
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);

    const errorMessage = document.createElement('div');
    errorMessage.textContent = "An error occurred. Please try again later.";
    errorMessage.classList.add('error-message');
  
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(errorMessage);
    hideLoadingIndicator();
  }
}

getWomensJackets();
