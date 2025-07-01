import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nav_logo.png';  // adjust path if needed
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img src={logo} alt="Ali Khan Logo" className="nav-logo" />
        </Link>
        <button
  className={`nav-toggle ${menuOpen ? 'open' : ''}`}
  onClick={toggleMenu}
  aria-label="Toggle navigation menu"
>
  <span className="hamburger"></span>
</button>


          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
         <Link to="/education" onClick={closeMenu}>Education</Link>
         <Link to="/experiences" onClick={closeMenu}>Experiences</Link>
         <Link to="/projects" onClick={closeMenu}>Projects</Link>
      </div>

      </div>
    </nav>
  );
}
