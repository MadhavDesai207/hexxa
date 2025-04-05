import React from 'react';
import { ProjectImage } from './ProjectImage.jsx';
import './styles/PortfolioCard.css';

export const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a 
          href={project.link} 
          className="view-details-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Details
        </a>
      </div>
      <div className="portfolio-image">
        <ProjectImage type={project.image} />
      </div>
    </div>
  );
};