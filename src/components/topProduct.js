import { mockData } from "../assets/mockData";
export function createRandomStarRating() {
  const fiveStarProducts = mockData
    .map(product => {
      product.randomRating = Math.floor(Math.random() * 3) + 3; // 3 to 5 stars
      return product;
    })
  return fiveStarProducts;
}

export default function topProduct() {
  // Create Card container
  const container = document.createElement("div");
  container.className = "container mx-auto py-12";

  // Create Title
  const heading = document.createElement("h2");
  heading.className = "text-2xl font-bold text-center mb-6";
  heading.textContent = "Top Products";
  container.appendChild(heading);

  // Create Grid for Products
  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer";
  container.appendChild(grid);

  // Assign random rating to each product and filter 5-star ones

  const fiveStarProducts = createRandomStarRating()
  const filterFiveStarProducts = fiveStarProducts.filter(product => product.randomRating === 5)
    .slice(0, 5); // Take first 5 five-star products

  if (filterFiveStarProducts.length > 0) {
    filterFiveStarProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer";

      // Image
      const img = document.createElement("img");
      img.src = product.imageUrl;
      img.alt = product.name;
      img.className = "w-full h-48 object-contain mb-4";

      // Title
      const title = document.createElement("h3");
      title.className = "text-lg font-semibold text-gray-800";
      title.textContent = product.name;

      // Price
      const price = document.createElement("p");
      price.className = "text-gray-600 text-sm mt-1";
      price.textContent = `$${product.price.toFixed(2)}`;

      // Stars (always 5 golden stars here)
      const starContainer = document.createElement("div");
      starContainer.className = "flex items-center gap-1 mt-2";
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.className = "fa fa-star text-yellow-500";
        star.setAttribute("aria-hidden", "true");
        starContainer.appendChild(star);
      }

      // Add to Cart button
      const addtoCartButton = document.createElement("span");
      addtoCartButton.className = "absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300";

      const beforeHoverText = document.createElement("span");
      beforeHoverText.className = "group-hover:hidden";
      beforeHoverText.textContent = "+";

      const afterHoverText = document.createElement("span");
      afterHoverText.className = "hidden group-hover:block";
      afterHoverText.textContent = "Add to Cart";

      addtoCartButton.appendChild(beforeHoverText);
      addtoCartButton.appendChild(afterHoverText);

      // Append elements to card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(starContainer);
      card.appendChild(addtoCartButton);

      grid.appendChild(card);
    });
  } else {
    const noProduct = document.createElement("p");
    noProduct.className = "text-center text-gray-500";
    noProduct.textContent = "No top products found this time. Try refreshing!";
    container.appendChild(noProduct);
  }

  return container;
}

