import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>GameZone</h1>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="https://www.google.com">Community</a></li>
        <li><a href="/contact">Contact</a></li>
      </div>
      <div className="signup-button">
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace('/');
          }}>
            Logout
          </button>
        ) : (
          <Link to='/signup'>
            <button>Login</button>
          </Link>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

