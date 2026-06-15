import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Revenue from "./pages/Revenue";
import Customers from "./pages/Customers";
import Sellers from "./pages/Sellers";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <span className="logo-icon">📊</span>

          <div>
            <h2>E-Commerce Analytics</h2>
            <p>Business Intelligence Dashboard</p>
          </div>
        </div>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/sellers">Sellers</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;