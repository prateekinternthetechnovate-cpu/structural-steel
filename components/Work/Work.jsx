
import React from "react";
import "./Work.css";

const workSteps = [
  {
    id: 1,
    image: "/images/architecture.jpg",
    title: "Drawings & Requirements",
    description:
      "We review project drawing & specifications to understand your requirements and scope of work.",
  },
  {
    id: 2,
    image: "/images/exam.jpg",
    title: "Quotation & Planning",
    description:
      "We assess materials, costs, and timelines to prepare a detailed quotation and project plan.",
  },
  {
    id: 3,
    image: "/images/material.jpg",
    title: "Fabrication & Quality",
    description:
      "We ensure precision fabrication, welding, and assembly through careful quality inspections.",
  },
  {
    id: 4,
    image: "/images/worker.jpg",
    title: "Installation & Delivery",
    description:
      "We manage transportation and on-site installation to ensure smooth and timely project completion.",
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <div className="work-container">

        {/* Heading */}
        <div className="work-heading">
          <h2>
            A Simple, Proven 4-Step{" "}
            <span>Work Process</span>
          </h2>

          <p>
            We follow a streamlined process from initial drawings to final
            installation, ensuring precision, quality, and reliable project
            <br className="desktop-break" />
            execution at every stage.
          </p>
        </div>

        {/* Work Process Steps */}
        <div className="work-process">

          {workSteps.map((step, index) => (
            <React.Fragment key={step.id}>

              {/* Individual Step */}
              <div className="work-step">

                <div className="work-icon-circle">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="work-step-icon"
                  />
                </div>

                <div className="work-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>

              {/* Curved Arrow */}
              {index !== workSteps.length - 1 && (
                <div className={`work-arrow arrow-${index + 1}`}>
                  <img
                    src={
                      index % 2 === 0
                        ? "/images/arrow-down.jpg"
                        : "/images/arrow-up.jpg"
                    }
                    alt="Process direction"
                  />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Work;
