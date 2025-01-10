import React, { useState } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ServicesDropdown from './components/nav/ServicesDropdown';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <RouterLink to="/" className="logo">NextRFID</RouterLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#51c8ef">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            {isHome ? (
              <ScrollLink to="hero" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                Home
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {isHome ? (
              <ScrollLink to="products" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                Products
              </ScrollLink>
            ) : (
              <RouterLink to="/#products" onClick={() => setIsMenuOpen(false)}>
                Products
              </RouterLink>
            )}
          </li>
          <li 
            className="services-item"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <span className="nav-link">Services</span>
            <ServicesDropdown isOpen={isServicesOpen} onMouseLeave={handleServicesMouseLeave} />
          </li>
          <li>
            {isHome ? (
              <ScrollLink to="technologies" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                Technologies
              </ScrollLink>
            ) : (
              <RouterLink to="/#technologies" onClick={() => setIsMenuOpen(false)}>
                Technologies
              </RouterLink>
            )}
          </li>
          <li>
            {isHome ? (
              <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                Contact
              </ScrollLink>
            ) : (
              <RouterLink to="/#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </RouterLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
