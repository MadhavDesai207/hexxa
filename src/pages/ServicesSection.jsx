import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const services = 
    [
      {
        title: "Web Development",
        icon: "code-brackets",
        description: "Crafting responsive, dynamic, and scalable websites to enhance your digital presence."
      },
      {
        title: "Mobile Application Development",
        icon: "mobile-dev",
        description: "Designing seamless and user-friendly mobile and desktop applications for an optimized experience."
      },
      {
        title: "DevOps Consulting",
        icon: "devops-consulting",
        description: "Streamlining software development and deployment processes through automation, CI/CD pipelines, and cloud infrastructure optimization."
      },
      {
        title: "Blogging",
        icon: "blogging",
        description: "Creating engaging, informative, and SEO-optimized content to grow your online audience and establish thought leadership."
      }
    ]
    

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Discover our Offerings</h2>
        <p>
          Explore our services crafted to meet your needs with quality
          and efficiency. Let us help you achieve your goals!
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};