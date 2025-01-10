import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDropdown.css';

const ServicesDropdown = ({ isOpen, onMouseLeave }) => {
  const services = [
    {
      title: 'Asset Tracking',
      path: '/services/asset-tracking',
      description: 'Real-time monitoring of valuable assets'
    },
    {
      title: 'Inventory Tracking',
      path: '/services/inventory-tracking',
      description: 'Automated inventory management solutions'
    },
    {
      title: 'Vehicle Identification',
      path: '/services/vehicle-identification',
      description: 'Smart vehicle access and monitoring'
    }
  ];

  return (
    <div 
      className={`services-dropdown ${isOpen ? 'active' : ''}`}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdown-arrow"></div>
      <div className="dropdown-content">
        {services.map((service, index) => (
          <Link 
            key={index} 
            to={service.path} 
            className="dropdown-item"
            onClick={onMouseLeave}
          >
            <div className="dropdown-item-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown; 