
const resultsContainer = document.getElementById("specific_jacket");

const url = "https://api.noroff.dev/api/v1/rainy-days";


 function getSpecificJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location);
    const id = urlParams.get("id");
    return id;
 }

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

  async function displaySpecificJacket(){
    const jackets = getSpecificJacketIdFromQuery; {
    const specificJacketResult = await response.json(); {
  
      const specificJacket = document.getElementById("specific_jacket");
      resultsContainer.innerHTML += `<div class="container products ">
                                          <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
                                          <div id="image-container"></div>
                                          <h3>${jackets[i].title}</h3>
                                          <h4>${jackets[i].baseColor}</h4>
                                          <h4>${jackets[i].size}</h4>
                                          <h5>${jackets[i].description}</h5>
                                          <p class="price">$ ${jackets[i].price}</p>
                                          `;
   
  }
}
  }
  displaySpecificJacket();
  