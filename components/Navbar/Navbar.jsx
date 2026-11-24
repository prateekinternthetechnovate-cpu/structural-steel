"use client";
import React, { useState } from "react";
import "./Navbar.css";

import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Facility", href: "#facility" },
    { name: "Our Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-navbar">
      <div className="navbar-container container">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Steel Drafters - Shaping Your Vision in Steel"
          />
        </a>

        {/* Navigation Links */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Quote Button */}
          <a
            href="#contact"
            className="navbar-quote mobile-quote"
            onClick={closeMenu}
          >
            <span>Request A Quote</span>
            <span className="quote-arrow">
              <FaArrowRight />
            </span>
          </a>
        </nav>

        {/* Desktop Quote Button */}
        <a href="#contact" className="navbar-quote desktop-quote">
          <span>Request A Quote</span>
          <span className="quote-arrow">
            <FaArrowRight />
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
