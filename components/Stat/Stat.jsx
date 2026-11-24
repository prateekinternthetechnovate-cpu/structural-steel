import React from "react";
import "./Stat.css";

const stats = [
  {
    number: "5+",
    label: "Years of Experience",
  },
  {
    number: "24h",
    label: "Fast Quotation",
  },
  {
    number: "100%",
    label: "Quality Focused",
  },
  {
    number: "16+",
    label: "Projects Completed",
  },
];

const Stat = () => {
  return (
    <section className="stat-section">
      <div className="stat-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stat;