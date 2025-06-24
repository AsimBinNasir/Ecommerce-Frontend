import { createRandomStarRating } from "../components/topProduct";
import { addToCart }  from "../utils/addProducts"

export default function Shop(limit = null) {

  // Create main section container
  const section = document.createElement("section");
  section.className = "bg-white mt-2 px-4 md:px-16 lg:px-24";

  // Create Card container
  const container = document.createElement("div");
  container.className = "container mx-auto pt-4 pb-8";
  section.appendChild(container);

  // Create Title
  const heading = document.createElement("h2");
  heading.className = "text-2xl font-bold text-center mb-6";
  heading.textContent = "Shop Products";
  container.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer";
  container.appendChild(grid);

  // Assign random rating to each product
  const starRating = createRandomStarRating()
  console.log(starRating);

  // Apply limit if passed
  const displayedProducts = limit ? starRating.slice(0, limit) : starRating;

  if (displayedProducts.length > 0) {
    displayedProducts.forEach(product => {
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

      // Rating
      const starContainer = document.createElement("div");
      starContainer.className = "flex items-center gap-1 mt-2";
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.className = `fa fa-star ${i < product.randomRating ? "text-yellow-500" : "text-gray-600"}`;
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

      addtoCartButton.addEventListener("click", () => {
        addToCart(product);
      });

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
    noProduct.textContent = "Error: No products found";
    container.appendChild(noProduct);
  }

  return section;
}

