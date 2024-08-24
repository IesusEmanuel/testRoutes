import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "/src/components/Home/home.jsx";
import Sellers from "/src/components/Sellers/sellers.jsx";
import Ofertas from "/src/components/Ofertas/ofertas.jsx";

export default function App() {
  return (
    <Router>
      <header className="header">
        <div className="container-logo flex-row">
          <img src=""></img>
        </div>

        <nav className="nav-container flex-row align-container-center">
          <Link className="link poppins" to="/">Início</Link>
          <Link className="link poppins" to="/sellers">Mais Vendidos</Link>
          <Link className="link poppins" to="/ofertas">Ofertas</Link>
          <Link className="link poppins" to="/aval">Avaliações</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </Router>
  )
}
