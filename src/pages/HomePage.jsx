
import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import "../pages/styles/HomePage.css";
import { ServicesSection } from './ServicesSection';



export const HomePage = () => {
  // Function to handle scrolling to top when navigating to About page
  const handleAboutNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-page">
      <HeroSection />
     
      
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-heading">About Hexxa</h2>
            <h3 className="about-subheading">Innovating for a smarter tomorrow</h3>
            
            <p className="about-text">
              Founded in 2023, Hexxa emerged from a simple vision: to harness the power of advanced technology to solve 
              real-world business challenges. We believe that AI and digital transformation shouldn't just be buzzwords—they 
              should deliver measurable value and drive sustainable growth.
            </p>
            
            <p className="about-text">
              As technology consultants and solution providers, we bridge the gap between complex technical capabilities 
              and practical business applications. Our team combines deep technical expertise with business acumen to 
              deliver solutions that are not just technologically sound but strategically aligned with your objectives.
            </p>
            
            <p className="about-text">
              What sets us apart is our commitment to...
               {/* making advanced technology accessible. We don't just implement 
              solutions; we ensure you understand how they work and how they benefit your business. This transparent 
              approach has earned us the trust of clients across industries, from startups to enterprise organizations. */}
            </p>
            
            <Link to="/about" className="about-link" onClick={handleAboutNavigation}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      <ServicesSection />
    </div>
  );
};