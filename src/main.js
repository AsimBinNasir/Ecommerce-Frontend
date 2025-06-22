import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';

const app = document.getElementById('app');

app.innerHTML = '';

app.appendChild(Navbar());

app.appendChild(Home());

// app.innerHTML += Home();

// app.innerHTML += Footer();

