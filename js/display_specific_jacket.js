
const resultsContainer = document.getElementById("specific_jacket");
 
const url = "https://api.noroff.dev/api/v1/rainy-days";
 


 async function getSpecificJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
 }  

  async function displaySpecificJacket() {
    const jacketsId = await getSpecificJacketIdFromQuery();
      if (!jacketsId) {
        return;
      }
    
      const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketsId}`); 
      const jackets = await response.json();

      const resultsContainer = document.getElementById("specific_jacket");
      resultsContainer.innerHTML += `<div class="container products">
                                          <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
                                          <div id="image-container"></div>
                                          <h3>${jackets[i].title}</h3>
                                          <h4>${jackets[i].baseColor}</h4>
                                          <h4>${jackets[i].size}</h4>
                                          <h5>${jackets[i].description}</h5>
                                          <p class="price">$ ${jackets[i].price}</p>
                                          `; 
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
