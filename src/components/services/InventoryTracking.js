import React from 'react';
import ServicePage from './ServicePage';

const InventoryTracking = () => {
  const features = [
    'Automated inventory counts',
    'Real-time stock level monitoring',
    'Reorder point alerts',
    'Supply chain visibility',
    'Inventory optimization analytics'
  ];

  const benefits = [
    'Reduce stockouts and overstock',
    'Minimize inventory carrying costs',
    'Improve inventory accuracy',
    'Streamline warehouse operations',
    'Enhanced supply chain efficiency'
  ];

  return (
    <ServicePage
      title="Inventory Tracking Solutions"
      description="Revolutionize your inventory management with our RFID-based tracking system. Get real-time visibility into your stock levels and automate your inventory processes."
      features={features}
      benefits={benefits}
      image="/images/inventory-tracking.jpg"
    />
  );
};

export default InventoryTracking; 