import React from "react";
import "./Certificate.css";

const certificates = [
  {
    id: 1,
    image: "/images/certificate.png",
    alt: "ISO 14001 Environmental Management System Certificate",
  },
  {
    id: 2,
    image: "/images/certificate.png",
    alt: "ISO 14001 Quality Certification",
  },
  {
    id: 3,
    image: "/images/certificate.png",
    alt: "Steel Fabrication Company Certificate",
  },
];

const Certificate = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        {/* Section Heading */}
        <div className="certificate-heading">
          <h2>
            Our Commitment to{" "}
            <span>Certified Excellence</span>
          </h2>

          <p>
            We continuously strive to meet industry standards through rigorous
            quality checks, safe working practices, and a commitment
            <br className="certificate-desktop-break" />
            to continuous improvement.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className="certificate-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;