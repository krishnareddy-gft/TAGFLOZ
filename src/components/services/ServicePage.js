import React from 'react';
import './ServicePage.css';

const ServicePage = ({ title, description, features, benefits, image }) => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>{title}</h1>
          <p className="service-description">{description}</p>
        </div>
      </div>
      
      <div className="service-content">
        <div className="service-image">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="placeholder-image">
              <span>{title}</span>
            </div>
          )}
        </div>
        
        <div className="service-details">
          <div className="features-section">
            <h2>Key Features</h2>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="benefits-section">
            <h2>Benefits</h2>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="service-info-grid">
        <div className="info-card">
          <h3>Industry Applications</h3>
          <p>Our RFID solutions are deployed across various industries including manufacturing, logistics, healthcare, and retail. Each implementation is customized to meet specific industry requirements and challenges, ensuring optimal performance and ROI.</p>
          <div className="info-stats">
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50%</div>
              <div className="stat-label">Time Saved</div>
            </div>
          </div>
        </div>
        
        <div className="info-card">
          <h3>Technical Specifications</h3>
          <p>Our RFID systems operate on industry-standard frequencies with advanced anti-collision protocols, ensuring reliable performance even in challenging environments. The solution includes comprehensive data security measures and seamless integration capabilities.</p>
          <div className="info-stats">
            <div className="stat-item">
              <div className="stat-value">10m+</div>
              <div className="stat-label">Read Range</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1000+</div>
              <div className="stat-label">Tags/Second</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage; 