'use client';

import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setFileError('File exceeds the 5MB maximum size limit.');
      setSelectedFile(null);
      return;
    }

    setFileError('');
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { ...formData, file: selectedFile });
    alert('Thank you! Your project details have been submitted.');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side: Heading & Description */}
        <div className="contact-info">
          <h2 className="contact-heading">
            Have a Project in Mind? Let&apos;s Build It{' '}
            <span className="highlight-gold">Together.</span>
          </h2>
          <p className="contact-description">
            Tell us about your structural steel requirements, and our team will
            work with you to provide the right fabrication and engineering
            solutions. Share your project details and drawings to receive a
            tailored quotation based on your specifications.
          </p>
        </div>

        {/* Right Side: White Form Card */}
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Row 1: Full Name & Email Address */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone Number & Project Type */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={formData.projectType === '' ? 'placeholder-selected' : ''}
                  required
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="structural-fabrication">
                    Structural Steel Fabrication
                  </option>
                  <option value="steel-detailing">Steel Detailing</option>
                  <option value="steel-erection">Steel Erection</option>
                  <option value="custom-steel">Custom Steel Solutions</option>
                  <option value="project-support">Project Support Services</option>
                </select>
              </div>
            </div>

            {/* Row 3: Project Details */}
            <div className="form-group">
              <label htmlFor="projectDetails">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows="4"
                placeholder="Describe your project requirements"
                value={formData.projectDetails}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Row 4: Drawing & File Upload */}
            <div className="form-group">
              <label>Drawing &amp; File Upload</label>
              <div
                className="upload-box"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    fileInputRef.current?.click();
                  }
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.webp,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  hidden
                />

                {/* Cloud Upload SVG Icon */}
                <svg
                  className="upload-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  <path d="M12 13v6" />
                  <path d="m9.5 15.5 2.5-2.5 2.5 2.5" />
                </svg>

                <p className="upload-title">
                  {selectedFile ? selectedFile.name : 'Upload Project Drawings'}
                </p>
                <p className="upload-subtitle">
                  Supports: PDF, WEBP, JPG, PNG (Max size 5MB)
                </p>
              </div>
              {fileError && <p className="upload-error">{fileError}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;