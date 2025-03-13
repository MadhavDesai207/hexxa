import React from 'react';
import { ServiceIcon } from './ServiceIcon';
import '/Users/md/Desktop/hexxa-website/src/pages/styles/ServiceCard.css';

export const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <ServiceIcon type={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};