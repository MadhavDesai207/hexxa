import React, { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import "../pages/styles/PortfolioPage.css";

export const PortfolioPage = () => {
  // Categories for filtering
  const categories = ['All', 'Mobile App', 'Blogging', 'Post', 'Contribution', 'Web App', 'Security'];
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems = [
    {
      title: "Deploy Simple Stablecoin on Rootstock Side chain",
      image: "Stablecoin_deployed",
      description: "This blog explains how to deploy a basic stablecoin on Rootstock, a Bitcoin sidechain with smart contract capabilities. It guides users through writing and compiling an ERC-20 based stablecoin contract in Remix IDE. The tutorial then details the steps for deploying this contract to the Rootstock testnet using MetaMask, including adding the custom Rootstock network.",
      link: "https://rootstock.hashnode.dev/deploy-simple-stablecoin-on-rootstock-side-chain",
      categories: ['Contribution'] // Add categories to each portfolio item
    },
    
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeFilter));

  return (
    <div className="portfolio-page page-container">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our showcase of successful projects and solutions we've delivered for our clients.</p>
      </div>
      
      <div className="portfolio-filter">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="portfolio-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <PortfolioCard key={index} project={item} />
          ))
        ) : (
          <div className="no-items-message">
            No portfolio items found in this category.
          </div>
        )}
      </div>
    </div>
  );
};