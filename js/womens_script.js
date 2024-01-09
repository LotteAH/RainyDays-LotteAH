import { showLoadingIndicator, hideLoadingIndicator } from "./indicator.js";
const resultsContainer = document.getElementById("womens_results");
const loadingIndicator = document.querySelector(".loader");
const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getWomensJackets() {

  try {
    showLoadingIndicator ()
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jackets = await response.json();

    resultsContainer.innerHTML = "";
    hideLoadingIndicator ()
    for (let i = 0; i < jackets.length; i++) {
      if (jackets[i].gender == "Female") {
        const jacketId = jackets[i].id;

        const jacketHTML = `
          <div class="container products">
            <a href="specific_jacket.html?id=${jacketId}">
              <div class="result">
                <img src="${jackets[i].image}" alt="${jackets[i].description}" class="product_img_men"/>
              </div>
              <h3>${jackets[i].title}</h3>
              <h4>${jackets[i].baseColor}</h4>
              <p class="price">$ ${jackets[i].price}</p>
            </a>
          </div>
        `;

        const jacketElement = document.createElement('div');
        jacketElement.innerHTML = jacketHTML;

        resultsContainer.appendChild(jacketElement);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);

    const errorMessage = document.createElement('div');
    errorMessage.textContent = "An error occurred. Please try again later.";
    errorMessage.classList.add('error-message');
  
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(errorMessage);
    hideLoadingIndicator ()
  }
}

getWomensJackets();

