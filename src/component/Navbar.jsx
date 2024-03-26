import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mainContainer">

      <nav>
        <NavLink to="/" className="title">
          Website
        </NavLink>
        <div className="menu" onClick={toggleMenu}>

          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar