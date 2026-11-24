
import React from "react";
import "./Facility.css";

const leftImages = [
  {
    src: "/images/facility-1.jpg",
    alt: "Steel fabrication factory",
  },
  {
    src: "/images/facility-2.jpg",
    alt: "Industrial steel cutting",
  },
];

const rightImages = [
  {
    src: "/images/facility-3.jpg",
    alt: "Steel structural fabrication",
  },
  {
    src: "/images/facility-4.jpg",
    alt: "Steel storage warehouse",
  },
];

// Reusable Image Component
const FacilityImage = ({ src, alt, center = false }) => {
  return (
    <div className={`facility-item ${center ? "facility-center" : ""}`}>
      <img src={src} alt={alt} />

      {/* Hover Overlay */}
      <div className="facility-overlay">
        <span className="facility-plus">
          <span className="plus-horizontal"></span>
          <span className="plus-vertical"></span>
        </span>
      </div>
    </div>
  );
};

const Facilty = () => {
  return (
    <section className="facility-section">
      <div className="facility-container">

        {/* Heading */}
        <div className="facility-heading">
          <h2>
            The Power Behind{" "}
            <span>Our Fabrication</span>
          </h2>

          <p>
            Our fabrication facility combines modern machinery, skilled
            professionals, and efficient processes to deliver precision-
            <br className="desktop-break" />
            engineered steel components with consistent quality,
            reliability, and timely execution.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="facility-gallery">

          {/* Left Column */}
          <div className="facility-column">
            {leftImages.map((image, index) => (
              <FacilityImage
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

          {/* Center Image */}
          <FacilityImage
            src="/images/facility-center.jpg"
            alt="Professional steel fabrication worker"
            center={true}
          />

          {/* Right Column */}
          <div className="facility-column">
            {rightImages.map((image, index) => (
              <FacilityImage
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Facilty;
