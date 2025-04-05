import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/ServiceCard.css';
import { ServiceIcon } from './ServiceIcon';

export const ServiceCard = ({ service }) => {
  // Create a URL-friendly slug from the service title
  const serviceSlug = service.title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-');

    const handleAboutNavigation = () => {
      window.scrollTo(0, 0);
    };

  return (
    <Link to={`/services/${serviceSlug}`} className="service-card-link" onClick={handleAboutNavigation}>
      <div className="service-card">
        <div className="service-icon">
          <ServiceIcon type={service.icon} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </Link>
  );
};