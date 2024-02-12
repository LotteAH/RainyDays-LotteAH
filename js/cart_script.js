const resultsContainer = document.getElementById("cart_item");

const url = "http://flower-power.local/wp-admin/edit.php?post_type=product";

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function createCartItem(item) {
  const cartContainer = document.getElementById("cart_item");

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart_item");

  const anchor = document.createElement("a");
  anchor.href = `cart.html?id=${item.id}`;

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.description;

  resultDiv.appendChild(img);

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("product_info");

  const titleHeading = document.createElement("h3");
  titleHeading.textContent = item.title;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price");
  priceParagraph.textContent = `$ ${item.price}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeFromCart(item.id));

  productInfoDiv.appendChild(titleHeading);
  productInfoDiv.appendChild(priceParagraph);
  productInfoDiv.appendChild(removeButton);

  anchor.appendChild(resultDiv);
  anchor.appendChild(productInfoDiv);

  cartItem.appendChild(anchor);
  cartContainer.appendChild(cartItem);
}

function removeFromCart(itemId) {
  let cartItems = getCartItems();
  const updatedCart = cartItems.filter(item => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  renderUpdatedCart();
}

function calculateSubtotal() {
  const cart = getCartItems();
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += parseFloat(item.price); 
  });

  return subtotal;
}

function renderUpdatedCart() {
  const cartContainer = document.getElementById("cart_item");
  cartContainer.innerHTML = "";
  const cart = getCartItems();
  cart.forEach(createCartItem);

  const subtotalElement = document.getElementById("subtotal");
  const subtotal = calculateSubtotal();
  subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
}


renderUpdatedCart(); 

