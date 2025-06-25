export let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Save to localStorage every time it's updated
export function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function clearCart() {
  localStorage.removeItem("cartItems");
}

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

export function refreshCartData() {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
}

export function getCartItems() {
  return cartItems;
}

export function addToCart(product) {
  const existingItem = cartItems.find(item => item.id === product.id);
  if (!existingItem) {
    cartItems.push({ ...product, count: 1 });
  } else {
    existingItem.count++;
  }
  saveCartToLocalStorage();
  updateCartBadge();
}

export function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.id === productId);
  if (index > -1) {
    cartItems.splice(index, 1);
    saveCartToLocalStorage();
    updateCartBadge();
  }
}

export function incrementItemCount(productId) {
  const item = cartItems.find(i => i.id === productId);
  if (item) {
    item.count++;
    saveCartToLocalStorage();
    updateCartBadge();
  }
}

export function decrementItemCount(productId) {
  const item = cartItems.find(i => i.id === productId);
  if (item && item.count > 1) {
    item.count--;
    saveCartToLocalStorage();
    updateCartBadge();
  }
}
