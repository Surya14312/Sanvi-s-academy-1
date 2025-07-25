import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">
          <img
            src="/images/Sanvi's-logo.jpg"
            alt="Sanvi Logo"
            className="globe-img"
          />
        </div>
        <img
          src="/images/Academy.jpg"
          alt="The Sanvi’s Academy"
          className="logo-text-img"
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
