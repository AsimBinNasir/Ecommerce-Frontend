import {
  getCartItems,
  refreshCartData,
  removeFromCart,
  incrementItemCount,
  decrementItemCount,
} from "../utils/addProducts.js";
import AddressModal from "../components/Modal.js";

export default function Cart(loadPage) {
  refreshCartData();
  const cartItems = getCartItems();

  const section = document.createElement("section");
  section.id = "page-content";
  section.className = "mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24";

  const container = document.createElement("div");
  section.appendChild(container);

  if (cartItems.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "text-center text-gray-500";
    emptyMsg.textContent = "Your cart is empty.";
    container.appendChild(emptyMsg);
    return section;
  }

  const heading = document.createElement("h3");
  heading.className = "text-2xl text-center font-semibold mb-4";
  heading.textContent = "Your Cart".toUpperCase();
  container.appendChild(heading);

  const totalContainer = document.createElement("div");
  totalContainer.className = "flex flex-col md:flex-row justify-between space-x-10 mt-8";
  container.appendChild(totalContainer);

  const productContainer = document.createElement("div");
  productContainer.className = "md:w-2/3";
  totalContainer.appendChild(productContainer);

  // Header for cart items
  const cartItemDetails = document.createElement("div");
  cartItemDetails.className = "flex justify-between border-b items-center mb-4 text-xs font-bold";
  productContainer.appendChild(cartItemDetails);

  const products = document.createElement("p");
  products.textContent = "Product";
  cartItemDetails.appendChild(products);

  const infoRow = document.createElement("div");
  infoRow.className = "flex space-x-11";
  cartItemDetails.appendChild(infoRow);

  const infos = ["Price", "Quantity", "Subtotal", "Remove"];
  infos.forEach(item => {
    const info = document.createElement("p");
    info.textContent = item;
    infoRow.appendChild(info);
  });

  // Cart Items
  cartItems.forEach(product => {
    const item = document.createElement("div");
    item.className = "flex items-center justify-between p-3 border-b";
    productContainer.appendChild(item);

    const imageDiv = document.createElement("div");
    imageDiv.className = "md:flex items-center space-x-4";
    item.appendChild(imageDiv);

    const images = document.createElement("img");
    images.src = product.imageUrl;
    images.alt = product.name;
    images.className = "w-16 h-16 object-contain rounded";
    imageDiv.appendChild(images);

    const nameDiv = document.createElement("div");
    nameDiv.className = "flex-1 ml-4";
    imageDiv.appendChild(nameDiv);

    const productName = document.createElement("h3");
    productName.className = "text-lg font-semibold";
    productName.textContent = product.name;
    nameDiv.appendChild(productName);

    const productInfoContainer = document.createElement("div");
    productInfoContainer.className = "flex items-center justify-between space-x-8";
    item.appendChild(productInfoContainer);

    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;
    productInfoContainer.appendChild(price);

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "flex items-center justify-center border";
    productInfoContainer.appendChild(buttonDiv);

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.className = "text-xl font-bold px-1.5 border-r";
    decrementButton.addEventListener("click", () => {
      decrementItemCount(product.id);
      refreshCart();
    });
    buttonDiv.appendChild(decrementButton);

    const qty = document.createElement("p");
    qty.textContent = product.count;
    qty.className = "text-xl px-2";
    buttonDiv.appendChild(qty);

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.className = "text-xl px-1 border-l";
    incrementButton.addEventListener("click", () => {
      incrementItemCount(product.id);
      refreshCart();
    });
    buttonDiv.appendChild(incrementButton);

    const subtotal = document.createElement("p");
    subtotal.textContent = `$${(product.price * product.count).toFixed(2)}`;
    productInfoContainer.appendChild(subtotal);

    const removeButton = document.createElement("button");
    removeButton.className = "text-red-500 hover:text-red-700";
    removeButton.addEventListener("click", () => {
      removeFromCart(product.id);
      refreshCart();
    });

    const trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash-alt";
    removeButton.appendChild(trashIcon);
    productInfoContainer.appendChild(removeButton);
  });

  // Cart summary container
  const cartSummary = document.createElement("div");
  cartSummary.className = "md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:self-start";
  totalContainer.appendChild(cartSummary);

  const cartHeading = document.createElement("h3");
  cartHeading.className = "text-sm font-semibold mb-5";
  cartHeading.textContent = "CART TOTALS";
  cartSummary.appendChild(cartHeading);

  // Total Items
  const totalItemQuantity = document.createElement("div");
  totalItemQuantity.className = "flex justify-between mb-5 border-b pb-1";
  cartSummary.appendChild(totalItemQuantity);

  const totalItemSpan = document.createElement("span");
  totalItemSpan.className = "text-sm";
  totalItemSpan.textContent = "Total Items: ";
  totalItemQuantity.appendChild(totalItemSpan);

  const totalQuantity = document.createElement("span");
  totalQuantity.textContent = cartItems.reduce((sum, item) => sum + item.count, 0);
  totalItemQuantity.appendChild(totalQuantity);

  // Shipping Details
  const shippingDetails = document.createElement("div");
  shippingDetails.className = "mb-4 border-b pb-2";
  cartSummary.appendChild(shippingDetails);

  const shipping = document.createElement("p");
  shipping.textContent = "Shipping";
  shippingDetails.appendChild(shipping);

  const shippingto = document.createElement("p");
  shippingto.className = "ml-2";
  shippingto.textContent = "Shipping to: ";
  shippingDetails.appendChild(shippingto);

  const shippingtoSpan = document.createElement("span");
  shippingtoSpan.className = "text-sm font-bold";
  shippingtoSpan.textContent = "Your address";
  shippingto.appendChild(shippingtoSpan);

  const changeAdressButton = document.createElement("button");
  changeAdressButton.className = "text-blue-500 hover: underline mt-1 ml-2";
  changeAdressButton.textContent = "Change Address";
  shippingDetails.appendChild(changeAdressButton);

  // Modal for changing address
  const modal = AddressModal((newAddress) => {
    shippingtoSpan.textContent = newAddress;
  });
  container.appendChild(modal);

  changeAdressButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Total Price
  const totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "flex justify-between mb-4";
  cartSummary.appendChild(totalPriceDiv);

  const totalPriceSpan = document.createElement("span");
  totalPriceSpan.textContent = "Total Price: ";
  totalPriceDiv.appendChild(totalPriceSpan);

  const totalPrice = document.createElement("span");
  totalPrice.textContent = `$${cartItems.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2)}`;
  totalPriceDiv.appendChild(totalPrice);

  // Checkout Button
  const proceedToCheckout = document.createElement("button");
  proceedToCheckout.className = "w-full py-2 text-white bg-red-600 hover:bg-red-700";
  proceedToCheckout.textContent = "Proceed to Checkout";
  proceedToCheckout.addEventListener("click", (event) => {
    event.preventDefault();
    loadPage("Checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  cartSummary.appendChild(proceedToCheckout);

  // Refresh function to re-render cart UI
  function refreshCart() {
    const refreshedCart = Cart(loadPage);
    const old = document.getElementById("page-content");
    if (old) old.replaceWith(refreshedCart);
  }

  return section;
}
