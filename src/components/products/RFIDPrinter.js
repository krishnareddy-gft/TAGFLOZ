import React from 'react';
import './ProductPage.css';

const RFIDPrinter = () => {
  return (
    <div className="product-page">
      <h1>RFID Printer Solutions</h1>
      <div className="product-content">
        <div className="product-image">
          <div className="placeholder-image">
            <span>RFID Printer</span>
          </div>
        </div>
        <div className="product-details">
          <h2>Industrial RFID Printers</h2>
          <p>Our RFID printers combine high-speed printing with reliable RFID encoding:</p>
          <ul>
            <li>Simultaneous Printing and Encoding</li>
            <li>High-Resolution Thermal Printing</li>
            <li>Smart Calibration System</li>
            <li>Multiple Media Support</li>
            <li>Industrial-Grade Construction</li>
          </ul>
          <div className="technical-specs">
            <h3>Technical Specifications</h3>
            <ul>
              <li>Print Resolution: Up to 300 DPI</li>
              <li>Print Speed: Up to 12 ips</li>
              <li>Media Width: 4" - 6.8"</li>
              <li>Memory: 512MB RAM, 256MB Flash</li>
              <li>Connectivity: USB, Ethernet, Serial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFIDPrinter; 