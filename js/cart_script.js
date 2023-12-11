const resultsContainer = document.getElementById("cart_item");
const loadingIndicator = document.getElementById("loading-indicator");
const url = "https://api.noroff.dev/api/v1/rainy-days";

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart_items")) || [];
}
  
  async function fetchCartDetails(productId) {
    showLoadingIndicator(); 
  const url = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productDetails = await response.json();
    hideLoadingIndicator();
    
    resultsContainer.innerHTML = `
      <div id="fetchCartDetails">
        <div class="container_specific_jacket">
          <div class="selected_image_products">
            <img src="${jackets.image}" alt="${jackets.description}" />
          </div>
          <div class="product_info">
            <h3>${jackets.title}</h3>
            <h4>${jackets.baseColor}</h4>
            <h5>${jackets.description}</h5>
            <p class="price">$ ${jackets.price}</p>
            <button class="cta-blue_cart" id="addToCartBtn">ADD TO CART</button>
            <button class="cta-green cta-cart">CHECK OUT</a>
        <a href="categories.html" class="cta-blue cta-cart"
          >CONTINUE SHOPPING</a
          </div>
        </div>
      </div>
    `;

    addToCart(item);

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function displayCartItems() {
  const cartContainer = document.getElementById("cart_item");
  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = "";

    cartItems.forEach((item) => {
      const cartHTML = `
          <div class="cart_item">
          <a href="cart.html?id=${fetchCartDetailsId}">
            <div class="result">
            <img src="${jackets.image}" alt="${jackets.description}" />
            </div>
            <div class="product_info">
              <h3>${jackets.title}</h3>
              <h4>${jackets.baseColor}</h4>
              <h5>${jackets.description}</h5>
              <p class="price">$ ${jackets.price}</p>
              <button class="cta-blue_cart" id="addToCartBtn">ADD TO CART</button>
            </div>
          </div>
        `;
        cartContainer.innerHTML += cartHTML;
    });
  }
}

  

function addToCart(item) {
  const cartItems = getCartItems();
  cartItems.push(item);
  localStorage.setItem("cart_items", JSON.stringify(cartItems));
  displayCartItems();
}
  
async function fetchCartDetails(productId) {
  const url = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productDetails = await response.json();
      const cartElement = document.getElementById('cart');
      cartElement.innerHTML = `
      <div class="cart_item">
      <a href="cart.html?id=${fetchCartDetailsId}">
        <div class="result">
        <img src="${jackets.image}" alt="${jackets.description}" />
        </div>
        <div class="product_info">
          <h3>${jackets.title}</h3>
          <h4>${jackets.baseColor}</h4>
          <h5>${jackets.description}</h5>
          <p class="price">$ ${jackets.price}</p>
          <button class="cta-blue_cart" id="addToCartBtn">ADD TO CART</button>
        </div>
      </div>
    `;
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  function initCartPage() {
    displayCartItems();
  
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
  
    if (productId) {
      fetchCartDetails(productId);
    }
  }
  
  initCartPage();
  