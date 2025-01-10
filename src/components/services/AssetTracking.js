import React from 'react';
import ServicePage from './ServicePage';

const AssetTracking = () => {
  const features = [
    'Real-time location tracking',
    'Asset utilization monitoring',
    'Maintenance scheduling',
    'Custom alert configurations',
    'Historical movement data'
  ];

  const benefits = [
    'Reduce asset loss and theft',
    'Optimize asset utilization',
    'Decrease maintenance costs',
    'Improve operational efficiency',
    'Enhanced asset lifecycle management'
  ];

  return (
    <ServicePage
      title="Asset Tracking Solutions"
      description="Transform your asset management with real-time RFID tracking technology. Monitor, manage, and optimize your valuable assets with precision and ease."
      features={features}
      benefits={benefits}
      image="/images/asset-tracking.jpg"
    />
  );
};

export default AssetTracking; 