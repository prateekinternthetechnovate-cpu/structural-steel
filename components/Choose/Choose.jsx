
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Choose.css";

const reasons = [
  {
    title: "Quality Assurance:",
    description:
      "We maintain strict quality control throughout the fabrication process to ensure consistent standards, durability, and reliable results.",
  },
  {
    title: "Precision Engineering:",
    description:
      "Our engineering-driven approach ensures accurate detailing, precise fabrication, and solutions aligned with project specifications.",
  },
  {
    title: "Reliable Project Delivery:",
    description:
      "We prioritize efficient planning, clear communication, and timely execution to keep projects moving smoothly.",
  },
  {
    title: "Local Expertise:",
    description:
      "With an understanding of local project requirement and industry practices, we deliver practical and customized steel solutions.",
  },
];

const Choose = () => {
  return (
    <section className="choose-section">
      <div className="container choose-container">
        <div className="row align-items-center choose-row">

          {/* Left Side Image */}
          <div className="col-lg-7 col-md-12 choose-image-column">
            <div className="choose-image-wrapper">
              <img
                src="/images/choose-us.jpg"
                alt="Steel fabrication workers in an industrial facility"
                className="choose-image"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-5 col-md-12 choose-content-column">
            <div className="choose-content">

              <h2 className="choose-heading">
                The Strength Behind Every
                <span> Successful Project.</span>
              </h2>

              <p className="choose-description">
                We combine engineering expertise, advanced fabrication
                capabilities, and a commitment to quality to deliver dependable
                steel solutions. Our focus on precision, safety, and timely
                execution makes us a trusted partner throughout every stage of
                your project.
              </p>

              <h3 className="choose-subheading">
                Key Reasons to Choose Us:
              </h3>

              <div className="choose-reasons">
                {reasons.map((reason, index) => (
                  <div className="choose-reason" key={index}>
                    <FaRegCheckCircle className="choose-check-icon" />

                    <p>
                      <span>{reason.title}</span>{" "}
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Choose;
