
const resultsContainer = document.getElementById("specificJacket");

const url = "https://api.noroff.dev/api/v1/rainy-days";


  async function getSpecificJacket() {
    const response = await fetch(url);

  const jackets = await response.json();

  resultsContainer.innerHTML = "";
    const specificJacket = getSpecificJacket();
    if (!specific_jacketId) {
      throw new Error("specificJacketId is not found in the query parameter");
    }
  
    try {
      const response = await fetch(
        `"https://api.noroff.dev/api/v1/rainy-days"${specificJacketId}`
      );
      if (!response.ok) {
        throw new Error("Failed to get jacket with that id");
      }
      const specificJacket = await response.json();
  
      const specificJacket = document.getElementById("item-details");
      resultsContainer.innerHTML += `<div class="container products ">
                                          <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
                                          <div id="image-container"></div>
                                          <h3>${jackets[i].title}</h3>
                                          <h4>${jackets[i].baseColor}</h4>
                                          <h5>${jackets[i].description}</h5>
                                          <p class="price">$ ${jackets[i].price}</p>
                                          `;
    } catch (error) {
      showError(error.message);
    }
  }
  
  getSpecificJacket();
  