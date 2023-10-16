
function fetchAkraJacketData() {
    const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        for (const product of data) {
            console.log("Title:", product.title);
            console.log("Description:", product.description);
            console.log("Gender:", product.gender);
            console.log("Sizes:", product.sizes.join(", "));
            console.log("Base Color:", product.baseColor);
            console.log("Price:", product.price);
            console.log("Discounted Price:", product.discountedPrice);
            console.log("On Sale:", product.onSale);
            console.log("Image:", product.image);
            console.log("Tags:", product.tags.join(", "));
            console.log("Favorite:", product.favorite);
        }
      })
      .catch(error => {
        console.error("An error occurred while fetching data:", error);
      });
}

fetchAkraJacketData();
