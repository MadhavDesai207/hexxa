import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      icon: "code-brackets",
      description: "Crafting responsive, dynamic, and scalable websites to enhance your digital presence."
    },
    {
      title: "App Development",
      icon: "mobile-dev",
      description: "Designing seamless and user-friendly mobile and desktop applications for an optimized experience."
    },
    {
      title: "AI Development",
      icon: "ai-brain",
      description: "Integrating intelligent AI solutions to drive innovation and efficiency."
    },
    {
      title: "Software Design",
      icon: "software-design",
      description: "Creating intuitive, high-performance software tailored to your business needs."
    }
  ];

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