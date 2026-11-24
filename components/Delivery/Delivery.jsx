
import React from "react";
import "./Delivery.css";

const deliveryData = [
  {
    title: "Residential Structural",
    description:
      "Structural steel solutions for residential buildings, apartments, housing developments, and modern architectural structures.",
    image: "/images/residential-structural.jpg",
  },
  {
    title: "Commercial Structural",
    description:
      "Reliable steel fabrication for office buildings, shopping centres, retail spaces, commercial complexes, and business facilities.",
    image: "/images/commercial-structural.jpg",
  },
  {
    title: "Industrial Structural",
    description:
      "Heavy-duty structural steel solutions for factories, warehouses, manufacturing plants, industrial facilities, and production units.",
    image: "/images/industrial-structural.jpg",
  },
];

const Delivery = () => {
  return (
    <section className="delivery-section">
      <div className="container delivery-container">

        {/* Section Heading */}
        <div className="delivery-header">
          <h2>
            Building Strength Across Every{" "}
            <span>Industry</span>
          </h2>

          <p>
            We deliver reliable steel fabrication and engineering solutions
            across diverse industries, combining technical expertise, quality,
            <br className="desktop-break" />
            and precision to build strong, safe, and durable structures.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="row delivery-row">
          {deliveryData.map((item, index) => (
            <div className="col-lg-4 col-md-6 delivery-column" key={index}>
              <div
                className="delivery-card"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.05) 100%), url(${item.image})`,
                }}
              >
                <div className="delivery-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Delivery;
