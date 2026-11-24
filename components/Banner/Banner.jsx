
import React from "react";
import "./Banner.css";


const Banner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Structural Steel{" "}
          <span>Fabrication &</span>
          <br />
          <span>Installation</span> Across Sydney
        </h1>

        <p>
          From approved drawings to fabrication, delivery and installation
          reliable structural steel solutions for builders,
          developers and construction projects across Sydney.
        </p>

        <a href="#contact" className="quote-button">
          <span>Request A Quote</span>
          <span className="arrow-icon">→</span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
