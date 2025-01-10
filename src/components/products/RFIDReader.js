import React from 'react';
import './ProductPage.css';

const RFIDReader = () => {
  return (
    <div className="product-page">
      <h1>RFID Reader Solutions</h1>
      <div className="product-content">
        <div className="product-image">
          <img src="/images/rfid-reader.jpg" alt="RFID Reader" />
        </div>
        <div className="product-details">
          <h2>High-Performance RFID Readers</h2>
          <p>Our RFID readers offer industry-leading read rates and accuracy, with features including:</p>
          <ul>
            <li>Extended read range up to 12 meters</li>
            <li>Multi-protocol support (ISO 18000-6C/EPC C1G2)</li>
            <li>Advanced anti-collision algorithm</li>
            <li>Real-time processing capabilities</li>
            <li>Industrial-grade design for harsh environments</li>
          </ul>
          <div className="technical-specs">
            <h3>Technical Specifications</h3>
            <ul>
              <li>Frequency: 860-960 MHz</li>
              <li>RF Power: 0-30 dBm</li>
              <li>Interface: USB/RS232/TCP/IP</li>
              <li>Operating Temperature: -20°C to 55°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFIDReader; 