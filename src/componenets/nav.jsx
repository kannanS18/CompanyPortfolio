import React, { useState } from "react";
import "./nav.css";

const Nav = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>
        <div className="navbar-logo">
          <img src="./logo.png" alt="Portfolio Logo" />
        </div>
      </a>
      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={activeSection === "services" ? "active" : ""}
            onClick={() => handleNavClick("services")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;