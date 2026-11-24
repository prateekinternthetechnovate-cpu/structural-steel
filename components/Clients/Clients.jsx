'use client';

import React, { useState } from 'react';
import './Clients.css';

const clientsData = [
  {
    id: 'artech-homes',
    name: 'Artech Homes',
    logo: '/images/image 10.jpg',
  },
  {
    id: 'vermont-homes',
    name: 'Vermont Homes',
    logo: '/images/image 11.jpg',
  },
  {
    id: 'prime-steel',
    name: 'Prime Steel Frames & Trusses',
    logo: '/images/image 12.jpg',
  },
  {
    id: 'norwest',
    name: 'Norwest Construction & Renovation',
    logo: '/images/image 13.jpg',
  },
  {
    id: 'vantage',
    name: 'Vantage Guaranteed Equity',
    logo: '/images/image 14.jpg',
  },
  {
    id: 'nanak-luxury-homes',
    name: 'Nanak Luxury Homes',
    logo: '/images/image 15.jpg',
  },
];

// Each slide shifts the 6-card strip so clicking the dots cycles smoothly through the clients
const slideOffsets = [0, 1, 2];

const Clients = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const offset = slideOffsets[activeSlide] || 0;
  const orderedClients = clientsData.map(
    (_, idx) => clientsData[(idx + offset) % clientsData.length]
  );

  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">
        <h2 className="clients-heading">
          Trusted by <span className="clients-highlight">Industry</span> Leaders
        </h2>

        <div className="clients-grid">
          {orderedClients.map((client) => (
            <div key={client.id} className="client-card">
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>

        <div className="clients-dots" role="tablist" aria-label="Client slides">
          {slideOffsets.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={`Show client set ${index + 1}`}
              className={`client-dot ${activeSlide === index ? 'is-active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;