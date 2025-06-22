import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";

const app = document.getElementById("app");

// Load page utility
function loadPage(pageName) {
  const old = document.getElementById("page-content");
  if (old) old.remove();

  let newPage;

  switch (pageName) {
    case "Home":
      newPage = Home();
      break;
    case "Shop":
      newPage = Shop();
      break;
    default:
      newPage = document.createElement("section");
      newPage.className = "p-8 text-center";
      newPage.innerHTML = `<h2 class="text-xl font-bold text-red-500">${pageName} page is under construction 🚧</h2>`;
  }

  newPage.id = "page-content";
  app.appendChild(newPage);
}

// Add navbar and load initial page
app.appendChild(Navbar(loadPage));
loadPage("Home");
