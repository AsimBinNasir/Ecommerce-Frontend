import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Cart from './pages/Cart.js';
import Checkout from "./pages/Checkout.js";
import OrderConfirmation from "./pages/OrderConfirmation.js";
// import LogIn from "./components/LogIn.js";
import Footer from "./components/Footer.js";
import { refreshCartData, updateCartBadge } from "./utils/addProducts.js";

const app = document.getElementById("app");



// Load page utility
function loadPage(pageName, data=null) {
  // Remove old page content if any
  const oldContent = document.getElementById("page-content");
  if (oldContent) oldContent.remove();

  // Remove old footer if any
  const oldFooter = document.getElementById("page-footer");
  if (oldFooter) oldFooter.remove();

  // Load the new page
  let newPage;
  switch (pageName) {
    case "Home":
      newPage = Home(loadPage);
      break;
    case "Shop":
      newPage = Shop();
      break;
    case "Cart":
      newPage = Cart(loadPage);
      break;
    case "Checkout":
      newPage = Checkout(loadPage);
      break;
    case "OrderConfirmation":
      newPage = OrderConfirmation(data);
      break;
    // case "LogIn":
    //   newPage = LogIn();
    //   break;
    default:
      newPage = document.createElement("section");
      newPage.className = "p-8 text-center";
      newPage.innerHTML = `<h2 class="text-xl font-bold text-red-500">${pageName} page is under construction 🚧</h2>`;
  }

  newPage.id = "page-content";
  app.appendChild(newPage);

  // Re-append footer
  const footer = Footer(loadPage);
  footer.id = "page-footer";
  app.appendChild(footer);
}

// Add navbar and load initial page
app.appendChild(Navbar(loadPage));
loadPage("Home");


updateCartBadge();
refreshCartData();
