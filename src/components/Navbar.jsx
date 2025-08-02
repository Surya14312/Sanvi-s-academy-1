import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Academy.png"; // If it's in public, use: src="/Academy.png"

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="globe-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li
          className={`dropdown ${activeDropdown === "skills" ? "open" : ""}`}
          ref={dropdownRef}
        >
          <span
            className="dropdown-toggle"
            onClick={() => toggleDropdown("skills")}
          >
            Skills ▾
          </span>

          {activeDropdown === "skills" && (
            <div className="dropdown-menu">
              {/* Language Section */}
              <div className="dropdown-section">
                <div className="dropdown-heading">Language Skills</div>
                <div className="dropdown-items">
                  <Link to="/ielts">IELTS</Link>
                  <Link to="/toefl">TOEFL</Link>
                  <Link to="/pte">PTE</Link>
                  <Link to="/duolingo">Duolingo</Link>
                  <Link to="/french">French</Link>
                  <Link to="/german">German</Link>
                  <Link to="/sat">SAT</Link>
                  <Link to="/gre">GRE/GMAT</Link>
                </div>
              </div>

              {/* Technical Section */}
              <div className="dropdown-section">
                <div className="dropdown-heading">Technical Skills</div>
                <div className="dropdown-items">
                  <Link to="/cybersecurity">Cybersecurity</Link>
                </div>
              </div>
            </div>
          )}
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
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
