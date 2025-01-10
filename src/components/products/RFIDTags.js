import React from 'react';
import './ProductPage.css';

const RFIDTags = () => {
  return (
    <div className="product-page">
      <h1>RFID Tags Solutions</h1>
      <div className="product-content">
        <div className="product-image">
          <div className="placeholder-image">
            <span>RFID Tags</span>
          </div>
        </div>
        <div className="product-details">
          <h2>Advanced RFID Tags</h2>
          <p>Our comprehensive range of RFID tags provides versatile solutions for various applications:</p>
          <ul>
            <li>Ultra-High Frequency (UHF) Tags</li>
            <li>High-Memory Tags for Data Storage</li>
            <li>Durable Industrial Tags</li>
            <li>Temperature-Resistant Tags</li>
            <li>Custom Form Factor Tags</li>
          </ul>
          <div className="technical-specs">
            <h3>Technical Specifications</h3>
            <ul>
              <li>Frequency Range: 860-960 MHz</li>
              <li>Read Range: Up to 10m</li>
              <li>Memory: 96-512 bits EPC</li>
              <li>Operating Temperature: -40°C to 85°C</li>
              <li>IP Rating: IP67/IP68 available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFIDTags; 