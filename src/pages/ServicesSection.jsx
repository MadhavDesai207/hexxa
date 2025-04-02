import React from 'react';
import '../pages/styles/ServiceSection.css';
import { ServiceCard } from './ServiceCard';
import { title } from 'motion/react-client';

export const ServicesSection = () => {
  const services = 
    [
      {
        title: "Web Designing & Development",
        icon: "code-brackets",
        description: "Crafting responsive, dynamic, and scalable websites to enhance your digital presence."
      },
      {
        title: "Mobile Application Development",
        icon: "mobile-dev",
        description: "Designing seamless and user-friendly mobile and desktop applications for an optimized experience."
      },
      {
        title: "Frontend Development",
        icon: "frontend-dev",
        description: "Building interactive, high-performance, and visually appealing user interfaces using modern frameworks and best practices."
      },
      {
        title: "Backend Development",
        icon: "backend-dev",
        description: "Developing scalable, secure, and efficient server-side applications, APIs, and databases to power your digital solutions."
      },
      {
        title: "DevOps Consulting",
        icon: "devops-consulting",
        description: "Streamlining software development and deployment processes through intelligent automation, robust CI/CD pipelines, and efficient cloud infrastructure optimization."
      },
      {
        title: "Security",
        icon: "security",
        description: "Implementing robust security measures to protect your applications, networks, and data from cyber threats and vulnerabilities."
      },
      {
        title: "Blogging",
        icon: "blogging",
        description: "Creating engaging, informative, and SEO-optimized content to grow your online audience and establish thought leadership."
      },
      

      // {
      //   title: "All Of the abov",
      //   icon: "above",
      //   description: ""
      // }
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