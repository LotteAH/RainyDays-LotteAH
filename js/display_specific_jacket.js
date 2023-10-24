
const resultsContainer = document.getElementById("specific_jacket");
const loadingIndicator = document.getElementById("loading-indicator");

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getSpecificJacketIdFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function displaySpecificJacket() {
  // Show the loading indicator while fetching data
  showLoadingIndicator();

  const jacketsId = await getSpecificJacketIdFromQuery();
  if (!jacketsId) {
    return;
  }

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketsId}`);
  const jackets = await response.json();

  // Hide the loading indicator after data is loaded
  hideLoadingIndicator();

  resultsContainer.innerHTML = `
    <div id="specific_jacket">
      <div class="selcted_image_products selected_image_products">
        <img src="${jackets.image}" alt="${jackets.description}" />
      </div>
      <div class="product_info">
        <h3>${jackets.title}</h3>
        <h4>${jackets.baseColor}</h4>
        <h5>${jackets.description}</h5>
        <p class="price">$ ${jackets.price}</p>
        <a href="cart.html" class="cta-blue_left">ADD TO CART</a>
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

  

   // async function fetchSpecificJacket() {
    //     const specificJacket = getSpecificJacketIdFromQuery();
    //     if(!specificJacket) {
    //         return;
    //     }
    //     const response = await fetch (`https://api.noroff.dev/api/v1/rainy-days${itemId}`);
    //       return;
    //   }


        
     
    
    // const response = await fetch(url);

//   const jackets = await response.json();

//   resultsContainer.innerHTML = "";
//     const specificJacket = getSpecificJacket();
//     if (!specific_jacketId) {
//       throw new Error("specificJacketId is not found in the query parameter");
//     }
  
//     try {
//       const response = await fetch(
//         `"https://api.noroff.dev/api/v1/rainy-days"${itemId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to get jacket with that id");
//       }
 // } catch (error) {
    //   showError(error.message);
    // }

    // async function getWomensJackets() {
// // showLoadingIndicator();
//   const response = await fetch(url);
//   const jackets = await response.json();
//   return jackets;
// }
 
// async function displayJackets() {
//   const jackets = await getWomensJackets();
//   const resultsContainer = document.getElementById("womens_results");
//   resultsContainer.innerHTML = "";
 
//   for (let i = 0; i < jackets.length; i++) {
//     if (jackets[i].gender == "Female") {
//       console.log(jackets[i]);
    
//       resultsContainer.innerHTML += `<div class="container products ">
//                                           <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
//                                           <div id="image-container"></div>
//                                           <h3>${jackets[i].title}</h3>
//                                           <h4>${jackets[i].baseColor}</h4>
//                                           <p class="price">$ ${jackets[i].price}</p>
//                                           <a href="specific_jacket.html"> </a>
//                                           </div>
//                                           `;
//       resultsContainer.addEventListener("click", () => {
//         window.location.href = `specific_jacket.html?id=${jackets[i].id}`;
//       });
//     }
//   }
// }

// getWomensJackets();

// const resultsContainer = document.getElementById("specific_jacket");

// const url = "https://api.noroff.dev/api/v1/rainy-days";
