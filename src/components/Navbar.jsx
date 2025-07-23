import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png"; // Replace with your actual logo path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Sanvi Logo" className="logo-img" />
        <span className="logo-text">The Sanvi’s Academy</span>
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
          <Link to="/blog">Blog</Link>{" "}
          {/* ✅ FIXED: changed `<link>` to `<Link>` */}
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
