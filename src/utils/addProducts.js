export let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Save to localStorage every time it's updated
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
// this function will update the cart badge
export function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.count, 0);

  if (badge) {
    if (totalQuantity > 0) {
      badge.textContent = totalQuantity;
      badge.classList.remove("hidden");
    } else {
      badge.textContent = "";
      badge.classList.add("hidden");
    }
  }
}

// this function will add item to cart
export function addToCart(products) {
  const existingItem = cartItems.find(items => items.id === products.id);
  if (!existingItem) {
    cartItems.push({ ...products, count: 1, });
  } else {
    existingItem.count++;
  }

  console.log("Cart Items", cartItems);

  saveCartToLocalStorage();
  updateCartBadge();
}

export function refreshCartData() {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
}
