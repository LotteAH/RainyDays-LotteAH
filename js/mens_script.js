const resultsContainer = document.getElementById("mens_results");

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getMensJackets() {
    // showLoadingIndicator();
  const response = await fetch(url);
  // clearLoadingIndicator();
  const jackets = await response.json();

  resultsContainer.innerHTML = "";

  for (let i = 0; i < jackets.length; i++) {
    if (jackets[i].gender == "Male") {
      console.log(jackets[i]);

      resultsContainer.innerHTML += `<div class="container products">
                                          <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
                                          <div id="image-container"></div>
                                          <h3>${jackets[i].title}</h3>
                                          <h4>${jackets[i].baseColor}</h4>
                                          <p class="price">$ ${jackets[i].price}</p>
                                          <a href="specific_jacket.html"> </a>
                                          </div>
                                          `;
      resultsContainer.addEventListener("click", () => {
        window.location.href = `specific_jacket.html?id=${jackets[i].id}`;
      })
    }
  }
}

// function showLoadingIndicator() {
//     const jackets = document.getElementByClass("loader");
//     itemList.innerHTML = "class= loader">;
//   }

getMensJackets();