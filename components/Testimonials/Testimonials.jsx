'use client';
import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Harsimran Singh",
    avatar: "HS",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Very happy with Harry’s customer service and great steel quality and highly recommended.",
  },
  {
    name: "Milan Jindia",
    avatar: "M",
    review: "Great service and competitive pricing",
  },
  {
    name: "singh singh",
    avatar: "S",
    review:
      "Very professional and helpful staff. I am getting the steel for my builds from them and they have always provided exceptional quality and support. Never had any issues the installation of the steel and their price is unbeatable.",
  },
  {
    name: "Rahul Sharma",
    avatar: "R",
    review:
      "Excellent service and quality products. Very professional team and timely delivery.",
  },
  {
    name: "Amit Kumar",
    avatar: "A",
    review:
      "Highly recommended! Great customer support, competitive pricing and excellent quality.",
  },
];

const GoogleIcon = () => (
  <span className="google-icon">G</span>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, i) => testimonials[
      (currentIndex + i) % testimonials.length
    ]
  );

  return (
    <section className="testimonial-section">

      {/* Heading */}
      <div className="testimonial-heading">
        <h2>
          What Our Clients Say{" "}
          <span>About Us</span>
        </h2>

        <p>
          Our clients' feedback reflects our commitment to quality,
          precision, and reliable project delivery. We value every
          partnership and strive to build lasting relationships
          through exceptional service and engineering excellence.
        </p>
      </div>

      {/* Google Rating */}
      <div className="google-rating">

        <span className="google-logo">
          <span className="g-blue">G</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">g</span>
          <span className="g-green">l</span>
          <span className="g-red">e</span>
        </span>

        <div className="rating-stars">
          ★ ★ ★ ★ <span>★</span>
        </div>

        <strong>4.5</strong>

        <span className="google-reviews">
          13 Google reviews
        </span>
      </div>

      {/* Testimonials */}
      <div className="testimonial-slider">

        <button
          className="slider-arrow prev-arrow"
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          &#10094;
        </button>

        <div className="testimonial-cards">

          {visibleTestimonials.map((item, index) => (
            <div className="testimonial-card" key={item.name + index}>

              {/* Customer Details */}
              <div className="customer-details">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="customer-avatar"
                  />
                ) : (
                  <div className={`customer-avatar avatar-${index}`}>
                    {item.avatar}
                  </div>
                )}

                <div className="customer-info">
                  <h3>{item.name}</h3>
                  <span>Customer</span>
                </div>

                <GoogleIcon />

              </div>

              {/* Stars */}
              <div className="customer-stars">
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}
              <p className="customer-review">
                {item.review}
              </p>

            </div>
          ))}

        </div>

        <button
          className="slider-arrow next-arrow"
          onClick={nextSlide}
          aria-label="Next testimonials"
        >
          &#10095;
        </button>

      </div>

    </section>
  );
};

export default Testimonial;
