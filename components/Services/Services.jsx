
"use client";

import { useState } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Structural Steel Fabrication",
    image: "/images/steel-fabrication.jpg",
    description:
      "We provide comprehensive structural steel fabrication solutions, delivering precision-engineered components tailored to the technical and operational requirements of residential, commercial, and industrial projects. Our capabilities encompass advanced steel cutting, drilling, welding, assembly, and surface finishing, ensuring accuracy and consistency at every stage of production. Supported by skilled professionals, modern fabrication equipment, and stringent quality control procedures, we are committed to producing durable, high-performance steel structures that meet project specifications, industry standards, and long-term performance expectations.",
  },
  {
    title: "Steel Detailing",
    image: "/images/steel-detailing.jpg",
    description:
      "We deliver professional steel detailing services, transforming structural engineering designs into accurate and comprehensive fabrication and erection drawings. Our detailing process includes precise measurements, connection details, material specifications, and technical drawings. By using advanced detailing software and industry standards, we ensure accuracy, reduce fabrication errors, and support seamless project execution.",
  },
  {
    title: "Steel Erection",
    image: "/images/steel-erection.jpg",
    description:
      "We provide reliable structural steel erection services, ensuring the safe and efficient installation of steel components at construction sites. Our experienced team handles positioning, alignment, bolting, welding, and structural assembly with precision. Following strict safety procedures and quality standards, we ensure durable structures and timely project completion.",
  },
  {
    title: "Custom Steel Solutions",
    image: "/images/custom-steel.jpg",
    description:
      "We deliver customized steel solutions designed to meet the unique requirements of residential, commercial, and industrial projects. From specialized steel structures to architectural components and complex fabrication requirements, our team combines innovative engineering, skilled workmanship, and quality materials to create reliable solutions tailored to your project.",
  },
  {
    title: "Project Support Services",
    image: "/images/project-support.jpg",
    description:
      "We provide comprehensive project support services throughout every stage of steel construction. Our services include technical coordination, project planning, fabrication supervision, material management, and installation support. Working closely with clients, engineers, and contractors, we ensure smooth communication, consistent quality, and efficient project delivery.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = servicesData[activeIndex];

  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT COLUMN */}
        <div className="services-left">

          {/* INTRO CONTENT */}
          <div className="services-intro">
            <h1>
              Your Partner in{" "}
              <span>Structural Steel Solutions.</span>
            </h1>

            <p>
              We deliver reliable steel fabrication and engineering
              solutions for residential, commercial, and industrial
              projects, combining precision, quality, and safety
              from design to installation.
            </p>
          </div>

          {/* SERVICE NAVIGATION */}
          <div className="services-list">
            {servicesData.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={`service-tab ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {service.title}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="services-right" key={activeIndex}>

          {/* IMAGE */}
          <div className="service-image">
            <img
              src={activeService.image}
              alt={activeService.title}
            />
          </div>

          {/* CARD CONTENT */}
          <div className="service-content">

            <h2>{activeService.title}</h2>

            <p>{activeService.description}</p>

            <a href="/contact" className="service-quote-btn">
              <span>Request A Quote</span>

              <span className="quote-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
export default Services;