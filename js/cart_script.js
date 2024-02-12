const resultsContainer = document.getElementById("cart_item");
const url = "http://flower-power.local/wp-json/wc/store/products";

async function getCartItemById(itemId) {
  const response = await fetch(`${url}/${itemId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const item = await response.json();
  return item;
}

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

async function createCartItemElement(itemId) {
  const item = await getCartItemById(itemId);

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart_item");

  const anchor = document.createElement("a");
  anchor.href = `cart.html?id=${item.id}`;

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");

  const img = document.createElement("img");
  img.src = item.images[0].src;
  img.alt = item.name;

  resultDiv.appendChild(img);

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("product_info");

  const titleHeading = document.createElement("h3");
  titleHeading.textContent = item.name;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price");
  priceParagraph.textContent = `Kr ${item.prices.price}`;

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
  resultsContainer.appendChild(cartItem);
}

async function removeFromCart(itemId) {
  let cartItems = getCartItems();
  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  renderUpdatedCart();
}

async function calculateSubtotal() {
  const cart = getCartItems();
  let subtotal = 0;

  for (const item of cart) {
    const itemDetails = await getCartItemById(item.id);
    subtotal += parseFloat(itemDetails.prices.price);
  }

  return subtotal;
}

async function renderUpdatedCart() {
  resultsContainer.innerHTML = "";
  const cart = getCartItems();
  for (const item of cart) {
    await createCartItemElement(item.id);
  }

  const subtotalElement = document.getElementById("subtotal");
  const subtotal = await calculateSubtotal();
  subtotalElement.textContent = `Subtotal: Kr ${subtotal.toFixed(2)}`;
}

renderUpdatedCart();
