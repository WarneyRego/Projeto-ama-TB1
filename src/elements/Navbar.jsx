import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo2 from './Logo2.png'
const Navbar = () => {
  return (
    <nav><div className="imagem">
      <Link to="/">
      
        <img src={logo2} alt="Logo" className="imagem" />
        
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
