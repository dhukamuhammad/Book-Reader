import React, { useState } from 'react';
import '../asset/css/Navbar.css';
import logo from '../asset/images/logo.png';  // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div href="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" /> <p><span>B</span>ook <span>R</span>eader</p>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About</a>
          <a href="/services" className="navbar-item">Services</a>
          <a href="/contact" className="navbar-item">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
