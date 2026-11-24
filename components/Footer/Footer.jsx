import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Logo, Description & Social Icons */}
          <div className="footer-brand-col">
            <img
              src="/images/logo.png"
              alt="Steel Drafters - Shaping Your Vision in Steel"
              className="footer-logo"
            />

            <p className="footer-description">
              Your trusted partner in structural steel fabrication and
              engineering, delivering precision, quality, and reliable
              solutions for residential, commercial, and industrial
              projects.
            </p>

            {/* Social Media Icons */}
            <div className="footer-socials">
              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook" className="social-link">
                <svg viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn" className="social-link">
                <svg viewBox="0 0 24 24">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#x" aria-label="X" className="social-link">
                <svg className="x-icon" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram" className="social-link">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-heading-line"></div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#certifications">Our Certifications</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-heading-line"></div>
            <ul className="footer-links">
              <li><a href="#fabrication">Structural Steel Fabrication</a></li>
              <li><a href="#detailing">Steel Detailing</a></li>
              <li><a href="#erection">Steel Erection</a></li>
              <li><a href="#custom">Custom Steel Solutions</a></li>
              <li><a href="#support">Project Support Services</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-heading-line"></div>
            <ul className="footer-contact-list">
              {/* Address */}
              <li className="contact-item">
                <div className="contact-icon-box address-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
                <span className="contact-text">
                  8 Harvey Rd, Kings Park NSW 2148, Australia
                </span>
              </li>

              {/* Phone */}
              <li className="contact-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <a href="tel:+61296154777" className="contact-link">
                  (+61) 296154777
                </a>
              </li>

              {/* Email */}
              <li className="contact-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a
                  href="mailto:enquiry@sydneystructuralsteel.com.au"
                  className="contact-link email-link"
                >
                  enquiry@sydneystructuralsteel.com.au
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <p>Copyright © 2026 Steel Drafters. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;