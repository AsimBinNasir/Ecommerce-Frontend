import LogIn from "./LogIn";
export default function Navbar(loadPage) {
  const nav = document.createElement("nav");
  nav.className = "bg-white shadow-md";

  const container = document.createElement("div");
  container.className = "container mx-auto px-4 md:px-16 lg:px-24 py-2 flex justify-between items-center";

  // === Logo ===
  const logoDiv = document.createElement("div");
  logoDiv.className = "text-lg font-bold";
  const logoLink = document.createElement("a");
  logoLink.href = "/";
  logoLink.textContent = "e-Shop";
  logoLink.className = "text-gray-800 hover:text-blue-600";
  logoDiv.appendChild(logoLink);

  // === Search Form ===
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "relative flex-1 mx-4";

  const form = document.createElement("form");
  form.action = "/search";
  form.method = "GET";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search Products";
  input.className = "w-full border py-2 px-4";

  const searchIcon = document.createElement("i");
  searchIcon.className = "fa fa-search absolute top-3 right-3 text-neutral-500 cursor-pointer";
  searchIcon.setAttribute("aria-hidden", "true");

  form.appendChild(input);
  form.appendChild(searchIcon);
  searchWrapper.appendChild(form);

  // === Right Icons ===
  const rightIcons = document.createElement("div");
  rightIcons.className = "flex items-center space-x-4";

  const cartLink = document.createElement("a");
  cartLink.href = "#";
  cartLink.className = "relative";

  const cartIcon = document.createElement("i");
  cartIcon.className = "fa fa-shopping-cart text-lg cursor-pointer";
  cartIcon.setAttribute("aria-hidden", "true");
  cartLink.appendChild(cartIcon);

  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("Cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const cartBadge = document.createElement("span");
  cartBadge.id = "cart-badge";
  cartBadge.textContent = ""; // Empty initially
  cartBadge.className =
    "hidden absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full";
  cartLink.appendChild(cartBadge);


  const loginButton = document.createElement("button");
  loginButton.className = "hidden md:block";
  loginButton.textContent = "Login | Register";
  loginButton.addEventListener("click", () => {
    const modal = LogIn();
    document.body.appendChild(modal);
  });

  const userButton = document.createElement("button");
  userButton.className = "block md:hidden";
  const userIcon = document.createElement("i");
  userIcon.className = "fa fa-user";
  userIcon.setAttribute("aria-hidden", "true");
  userButton.appendChild(userIcon);
  userButton.addEventListener("click", () => {
    loadPage("Register"); // dynamically load the component
  });

  rightIcons.appendChild(cartLink);
  rightIcons.appendChild(loginButton);
  rightIcons.appendChild(userButton);

  // === Top Row ===
  container.appendChild(logoDiv);
  container.appendChild(searchWrapper);
  container.appendChild(rightIcons);

  // === Navigation Links ===
  const pages = ["Home", "Shop", "Contact", "About"];
  const navLinks = document.createElement("div");
  navLinks.className = "flex items-center justify-center space-x-10 py-4 text-sm font-bold";

  pages.forEach((text) => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "hover:underline";
    link.textContent = text;

    link.addEventListener("click", () => {
      loadPage(text); // dynamically load the component
    });

    navLinks.appendChild(link);
  });

  nav.appendChild(container);
  nav.appendChild(navLinks);

  return nav;
}

