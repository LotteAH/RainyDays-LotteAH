const resultsContainer = document.getElementById('womens_results');


const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {

  const response = await fetch(url); 

  const jackets = await response.json();

  // fetch('https://api.example.com/images')
  // .then(response => response.json())
  // .then(data => {
  //   const container = document.getElementById('image-container');
  //   data.forEach(image => {
  //     const imageElement = document.createElement('img');
  //     imageElement.src = image.url;
  //     container.appendChild(imageElement);
  //   });
  // })
  // .catch(error => {
  //   console.error('Error fetching data from the API: ', error);
  // });


  resultsContainer.innerHTML = "";
  
  for(let i = 0; i < jackets.length; i++) {
      console.log(jackets[i]);

      resultsContainer.innerHTML += `<div class="container products">
                                      <div class"result">${jackets[i].image}</div> 
                                      <div id="image-container"></div>
                                      <h3>${jackets[i].title}</h3>
                                      <h4>${jackets[i].baseColor}</h4>
                                      <h5>${jackets[i].description}</h5>
                                      <p class="price">$ ${jackets[i].price}</p>
                                      <a href="oslo_urban.html"> </a>
                                      </div>
                                      `;
                                      }
}


getJackets();


// hello, it's Talitha here 
// Hi :)


  //                             <a href="oslo_urban.html"
          //                             ><img
          //                             src="images/womens_1.jpg"
          //     alt="Oslo Urban Anorak"
          //     class="product_img_men"
          // /></a>
