
import React from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  const expertise = [
    "Structural Steel Fabrication",
    "Precision Steel Detailing",
    "Steel Erection & Installation",
    "Custom Engineering Solutions",
  ];

  return (
    <section className="about-us-section">
      <Container className="about-us-container">
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col lg={6} md={6} className="about-us-content">

            <h1 className="about-us-heading">
              Engineering{" "}
              <span>Strength.</span> Delivering{" "}
              <span>Excellence.</span>
            </h1>

            <p className="about-us-description">
              We are committed to delivering high-quality structural
              steel fabrication and engineering solutions that bring
              ideas to life. With a focus on precision, innovation
              & craftsmanship, we help transform architectural and
              engineering designs into strong, reliable structures.
            </p>

            <p className="about-us-description">
              Our experienced team combines technical expertise,
              advanced fabrication capabilities, and a quality-driven
              approach to ensure every project meets the highest
              standards of performance, safety, and durability.
            </p>

            {/* EXPERTISE */}
            <div className="about-us-expertise">
              <h3>Our Expertise:</h3>

              <ul>
                {expertise.map((item, index) => (
                  <li key={index}>
                    <FaRegCheckCircle className="expertise-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} md={6} className="about-us-image-column">
            <div className="about-us-image-wrapper">
              <img
                src="/images/about-steel.jpg"
                alt="Structural steel framework construction"
                className="about-us-image"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
