import ManCategory from "../assets/Images/men-1.jpg";
import WomanCategory from "../assets/Images/women.jpg";
import KidsCategory from "../assets/Images/kid.jpg";
export default function categorySection() {
  const categories = [
    { title: "Men", imageUrl: ManCategory },
    { title: "Women", imageUrl: WomanCategory },
    { title: "Kids", imageUrl: KidsCategory },
  ];

  const container = document.createElement("div");
  container.className = "container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6";

  const categoryElements = categories.map(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer";
    const img = document.createElement("img");
    img.src = category.imageUrl;
    img.alt = category.title;
    img.className = "w-full h-full object-cover object-top rounded-lg shadow-md";
    const overlayCaption = document.createElement("div");
    overlayCaption.className ="absolute top-20 left-12"
    const caption = document.createElement("p");
    caption.className = "text-white text-2xl font-bold";
    caption.textContent = category.title;
    const viewAllAction = document.createElement("p");
    viewAllAction.className ="text-white";
    viewAllAction.textContent = "View All";
    const icon = document.createElement("i");
    icon.className = "fa fa-arrow-right ml-2 text-md text-gray-300";
    viewAllAction.appendChild(icon);
    overlayCaption.appendChild(caption);
    overlayCaption.appendChild(viewAllAction);
    categoryDiv.appendChild(img);
    categoryDiv.appendChild(overlayCaption);
    return categoryDiv;
  });

  categoryElements.forEach(categoryElement => container.appendChild(categoryElement));
  return container;
}