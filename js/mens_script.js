const resultsContainer = document.getElementById("mens_results");
const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getMensJackets() {
  // showLoadingIndicator(); // Show the loading indicator
  const response = await fetch(url);
  const jackets = await response.json();

  // Hide the loading indicator when the data is loaded
  // hideLoadingIndicator();

  resultsContainer.innerHTML = "";

  for (let i = 0; i < jackets.length; i++) {
    if (jackets[i].gender == "Male") {
      // Create a unique ID for each jacket element
      const jacketId = jackets[i].id;

      // Create the HTML for each jacket with a dynamic link
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

      // Create a temporary div element to hold the jacket HTML
      const jacketElement = document.createElement('div');
      jacketElement.innerHTML = jacketHTML;

      // Append the jacket element to the results container
      resultsContainer.appendChild(jacketElement);
    }
  }
}

// function showLoadingIndicator() {
//   const loadingIndicator = document.querySelector(".loader"); // Select the loading indicator by class
//   loadingIndicator.style.display = "block"; // Show the loading indicator
// }

// function hideLoadingIndicator() {
//   const loadingIndicator = document.querySelector(".loader"); // Select the loading indicator by class
//   loadingIndicator.style.display = "none"; // Hide the loading indicator
// }

getMensJackets();





      // const resultsContainer = document.getElementById("mens_results");

// const url = "https://api.noroff.dev/api/v1/rainy-days";

// async function getMensJackets() {
//     // showLoadingIndicator();
//   const response = await fetch(url);
//   // clearLoadingIndicator();
//   const jackets = await response.json();

//   resultsContainer.innerHTML = "";

//   for (let i = 0; i < jackets.length; i++) {
//     if (jackets[i].gender == "Male") {
//       console.log(jackets[i]);

//       resultsContainer.innerHTML += `<div class="container products">
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
//       })
//     }
//   }
// }

// // function showLoadingIndicator() {
// //     const jackets = document.getElementByClass("loader");
// //     itemList.innerHTML = "class= loader">;
// //   }

// getMensJackets();