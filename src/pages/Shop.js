export default function Shop() {
  const section = document.createElement("section");
  section.className = "p-8 bg-gray-50";
  section.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-center">Welcome to the Shop</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${generateMockProducts(6)}
    </div>
  `;
  return section;
}

// Helper function to generate some mock product cards
function generateMockProducts(count) {
  let cards = "";
  for (let i = 1; i <= count; i++) {
    cards += `
      <div class="bg-white p-4 rounded shadow hover:shadow-md transition">
        <img src="https://via.placeholder.com/150?text=Product+${i}" 
             alt="Product ${i}" class="w-full h-40 object-contain mb-3" />
        <h3 class="font-semibold text-lg">Product ${i}</h3>
        <p class="text-gray-500 text-sm mb-2">$${(Math.random() * 100).toFixed(2)}</p>
        <button class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    `;
  }
  return cards;
}
