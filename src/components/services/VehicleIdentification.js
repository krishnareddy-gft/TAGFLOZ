import React from 'react';
import ServicePage from './ServicePage';

const VehicleIdentification = () => {
  const features = [
    'Automated vehicle recognition',
    'Access control management',
    'Vehicle movement tracking',
    'Fleet management integration',
    'Parking optimization'
  ];

  const benefits = [
    'Enhanced security control',
    'Reduced traffic congestion',
    'Improved parking efficiency',
    'Automated billing systems',
    'Streamlined fleet operations'
  ];

  return (
    <ServicePage
      title="Automated Vehicle Identification"
      description="Streamline vehicle access and monitoring with our advanced RFID solutions. Perfect for parking facilities, toll collection, and fleet management."
      features={features}
      benefits={benefits}
      image="/images/vehicle-identification.jpg"
    />
  );
};

export default VehicleIdentification; 