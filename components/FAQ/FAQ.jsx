'use client';

import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What structural steel fabrication services do you provide?',
    answer:
      'We provide structural steel fabrication, steel detailing, welding, cutting, drilling, custom steel solutions, and on-site installation services.',
  },
  {
    question: 'Do you handle both small and large-scale projects?',
    answer:
      'Yes, we work on residential, commercial, and industrial projects of varying scales, tailoring our fabrication and engineering support to your project requirements.',
  },
  {
    question: 'Can you work with our existing engineering drawings?',
    answer:
      'Yes, we can review and work from your existing structural and engineering drawings, and coordinate with your team on detailing and fabrication specifications.',
  },
  {
    question: 'How can I request a project quotation?',
    answer:
      'You can request a tailored quotation by sharing your project details, specifications, and drawings through our contact form or by reaching out to our team directly.',
  },
  {
    question: 'What is your typical project turnaround time?',
    answer:
      'Turnaround times depend on project scope, complexity, material availability, and fabrication or detailing requirements. We provide estimated timelines during quoting.',
  },
  {
    question: 'Do you provide steel installation and erection services?',
    answer:
      'Yes, we provide steel erection and on-site installation services alongside our fabrication and project support capabilities.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-heading">
            <span className="faq-highlight">Everything</span> You Need to Know
          </h2>
          <p className="faq-subtitle">
            Find answers to common questions about our structural steel fabrication, engineering capabilities,
            <br />
            project processes, and services.
          </p>
        </div>

        <div className="faq-card">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <svg
                    className={`faq-chevron ${isOpen ? 'is-open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="faq-answer-wrap">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;