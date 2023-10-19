const resultsContainer = document.getElementById("womens_results");

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getWomensJackets() {
  const response = await fetch(url);

  const jackets = await response.json();

  resultsContainer.innerHTML = "";

  for (let i = 0; i < jackets.length; i++) {
    if (jackets[i].gender == "Female") {
      console.log(jackets[i]);

      resultsContainer.innerHTML += `<div class="container products ">
                                          <div class"result"><img src="${jackets[i].image}" alt="${jackets[i].description} class="product_img_men"/></div>
                                          <div id="image-container"></div>
                                          <h3>${jackets[i].title}</h3>
                                          <h4>${jackets[i].baseColor}</h4>
                                          <h5>${jackets[i].description}</h5>
                                          <p class="price">$ ${jackets[i].price}</p>
                                          `;
    }
  }
}

getWomensJackets();


// hello, it's Talitha here 
// Hi :)


  //                             <a href="oslo_urban.html"
          //                             ><img
          //                             src="images/womens_1.jpg"
          //     alt="Oslo Urban Anorak"
          //     class="product_img_men"
          // /></a>
