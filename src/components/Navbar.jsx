import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <div className="logo">
            <span className="logo-h">H</span>
            <span className="logo-e">E</span>
            <span className="logo-x">X</span>
            <span className="logo-x">X</span>
            <span className="logo-a">A</span>
          </div>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/why-hexa">Why Hexa ?</Link></li>
      </ul>
    </nav>
  );
};n