import { categories } from "../assets/mockData";
import iPhone from "../assets/images/iphone-purple-16.jpg";
import infoSection from "../components/infoSection.js";
import categorySection from "../components/categorySection.js";
import topProduct from "../components/topProduct.js";
export default function Home() {

  // Create main section container
  const section = document.createElement("div");
  section.className = "bg-white mt-2 px-4 md:px-16 lg:px-24";

  // Create flex container
  const container = document.createElement("div");
  container.className = "container mx-auto py-4 flex flex-col md:flex-row space-x-2";

  // ==== Left Categories Panel ====
  const leftDiv = document.createElement("div");
  leftDiv.className = "w-full md:w-3/12";

  // Title
  const categoryTitle = document.createElement("div");
  categoryTitle.className = "bg-red-600 text-white text-xs font-bold px-2 py-2.5";
  categoryTitle.textContent = "SHOP BY CATEGORIES";
  leftDiv.appendChild(categoryTitle);

  // Category List
  const ul = document.createElement("ul");
  ul.className = "space-y-4 bg-gray-100 p-3 border";

  // Create li elements using map
  const liElements = categories.map((category) => {
    const li = document.createElement("li");
    li.className = "flex items-center text-sm font-medium";

    const dot = document.createElement("div");
    dot.className = "w-2 h-2 border border-red-600 rounded-full mr-2";

    li.appendChild(dot);
    li.appendChild(document.createTextNode(category));
    return li;
  });

  // Append all li elements to ul
  liElements.forEach(li => ul.appendChild(li));

  // Append ul to parent
  leftDiv.appendChild(ul);

  // ==== Right Image Section ====
  const rightDiv = document.createElement("div");
  rightDiv.className = "w-full md:w-9/12 mt-8 md:mt-0 h-96 relative";

  // Background Image
  const bgImage = document.createElement("img");
  bgImage.src = iPhone;
  bgImage.alt = "iphone purple";
  bgImage.className = "w-full h-full";
  rightDiv.appendChild(bgImage);

  // Text Overlay Container
  const overlay = document.createElement("div");
  overlay.className = "absolute bottom-20 left-8";

  const p1 = document.createElement("p");
  p1.className = "text-white mb-5";
  p1.textContent = "Code with Asim";

  const h2 = document.createElement("h2");
  h2.className = "text-white text-3xl font-bold";
  h2.textContent = "WELCOME TO E-SHOP";

  const p2 = document.createElement("p");
  p2.className = "text-white text-xl mt-2.5 font-bold";
  p2.textContent = "MILLIONS+ PRODUCTS";

  const button = document.createElement("button");
  button.className = "bg-red-600 text-white font-bold px-8 py-2 rounded-md mt-4 hover:bg-red-700 transform transition-transform duration-500 hover:translate-x-2 hover:translate-y-2 hover:scale-110";
  button.textContent = "SHOP NOW";

  overlay.append(p1, h2, p2, button);
  rightDiv.appendChild(overlay);

  // Assemble all
  container.append(leftDiv, rightDiv);
  section.appendChild(container);

  // Append info and category sections
  section.appendChild(infoSection());
  section.appendChild(categorySection());
  section.appendChild(topProduct());

  return section;

}
