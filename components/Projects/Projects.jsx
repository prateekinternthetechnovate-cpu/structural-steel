'use client';

import React, { useState, useEffect } from 'react';
import './Projects.css';

const categories = ['All Projects', 'Residential', 'Commercial', 'Industrial'];

const projectsData = [
  {
    id: 'residential-steel',
    category: 'Residential',
    title: 'Residential Steel Structure',
    description:
      'Precision-engineered steel components for modern residential construction.',
    location: 'Melbourne, VIC, Australia',
    image: '/images/image 7.jpg',
  },
  {
    id: 'commercial-building',
    category: 'Commercial',
    title: 'Commercial Building Project',
    description:
      'Reliable structural steel solutions for commercial infrastructure.',
    location: 'Newcastle, NSW, Australia',
    image: '/images/image 8.jpg',
  },
  {
    id: 'industrial-warehouse',
    category: 'Industrial',
    title: 'Industrial Warehouse Structure',
    description:
      'Heavy-duty steel fabrication for industrial facilities and warehouses.',
    location: 'Gold Coast, QLD, Australia',
    image: '/images/image 9.jpg',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [startIndex, setStartIndex] = useState(0);
  const [brokenIds, setBrokenIds] = useState({});

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    setStartIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    if (filteredProjects.length <= 1) return;
    setStartIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (filteredProjects.length <= 1) return;
    setStartIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const visibleCount = Math.min(3, filteredProjects.length);
  const visibleProjects = Array.from({ length: visibleCount }, (_, offset) => {
    const idx = (startIndex + offset) % filteredProjects.length;
    return filteredProjects[idx];
  });

  const handleImageError = (id) => {
    setBrokenIds((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-heading">
            Turning Engineering{' '}
            <span className="projects-highlight">Visions into Reality</span>
          </h2>
          <p className="projects-subtitle">
            Explore our portfolio of completed structural steel fabrication and
            engineering projects. Each project reflects our commitment
            <br />
            to precision, quality craftsmanship, and reliable execution across
            residential, commercial, and industrial sectors.
          </p>

          {/* Filter Pills */}
          <div className="projects-filters" role="tablist" aria-label="Project categories">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel & Project Cards */}
        <div className="projects-carousel">
          <button
            type="button"
            className="projects-arrow"
            onClick={handlePrev}
            aria-label="Previous project"
            disabled={filteredProjects.length <= 1}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="projects-grid">
            {visibleProjects.map((project) => {
              const isBroken = brokenIds[project.id];

              return (
                <article
                  key={`${project.id}-${activeCategory}-${startIndex}`}
                  className="project-card"
                >
                  <div className="project-image-wrap">
                    {isBroken ? (
                      <div className="project-image-fallback">
                        <span>{project.title}</span>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        onError={() => handleImageError(project.id)}
                      />
                    )}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-location">
                    <svg
                      className="location-pin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="projects-arrow"
            onClick={handleNext}
            aria-label="Next project"
            disabled={filteredProjects.length <= 1}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;