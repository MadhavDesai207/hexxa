import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceIcon } from './ServiceIcon';
import './styles/ServiceDetailPage.css';

export const ServiceDetailPage = ({ services }) => {
  const { serviceSlug } = useParams();
  
  // Find the service that matches the slug
  const service = services.find(item => 
    item.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') === serviceSlug
  );
  
  // Handle case where service is not found
  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <p>Sorry, the service you're looking for doesn't exist.</p>
        <Link to="/services" className="back-btn">Back to Services</Link>
      </div>
    );
  }

  // Content specific to each service type
  const getServiceSpecificContent = (title) => {
    const baseTitle = title.toLowerCase();
    
    if (baseTitle.includes('web')) {
      return {
        features: [
          "Responsive Web Design",
          "Custom Website Development",
          "E-commerce Solutions",
          "Content Management Systems",
          "Website Maintenance & Support"
        ],
        process: [
          "Discovery & Planning",
          "Design & Prototyping",
          "Development",
          "Testing & Quality Assurance",
          "Deployment & Launch"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "WordPress", "MongoDB", "PostgreSQL"]
      };
    } 
    else if (baseTitle.includes('mobile')) {
      return {
        features: [
          "Native iOS & Android App Development",
          "Cross-Platform App Development",
          "UI/UX Design for Mobile",
          "App Testing & Quality Assurance",
          "App Store Optimization"
        ],
        process: [
          "Requirements Analysis",
          "UI/UX Design",
          "Development & Integration",
          "Testing",
          "Deployment & Maintenance"
        ],
        technologies: ["Flutter", "Dart",  "Kotlin", "Firebase", "FlutteFlow"]
      };
    }
    else if (baseTitle.includes('frontend')) {
      return {
        features: [
          "Responsive UI Development",
          "Single Page Applications",
          "Progressive Web Apps",
          "UI/UX Implementation",
          "Performance Optimization"
        ],
        process: [
          "Wireframing & Prototyping",
          "Component Development",
          "State Management",
          "Testing & Debugging",
          "Deployment"
        ],
        technologies: ["React", "Vue.js", "Angular", "TypeScript", "Bootstrap", "Tailwind CSS", "PrimeReact", "Material-UI"]
      };
    }
    else if (baseTitle.includes('backend')) {
      return {
        features: [
          "API Development",
          "Database Design & Implementation",
          "Authentication & Authorization",
          "Server-side Rendering",
          "Microservices Architecture"
        ],
        process: [
          "Architecture Planning",
          "API Design",
          "Database Modeling",
          "Implementation",
          "Testing & Deployment"
        ],
        technologies: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL", "GraphQL", "Redis", "Docker"]
      };
    }
    else if (baseTitle.includes('devops')) {
      return {
        features: [
          "CI/CD Pipeline Implementation",
          "Infrastructure as Code",
          "Cloud Infrastructure Management",
          "Containerization & Orchestration",
          "Performance Monitoring"
        ],
        process: [
          "Assessment & Planning",
          "Infrastructure Setup",
          "CI/CD Implementation",
          "Monitoring Setup",
          "Continuous Improvement"
        ],
        technologies: ["Docker", "Kubernetes", "Jenkins", "GCP", "AWS", "Azure", "Terraform", "Prometheus", "Grafana","Ansible"]
      };
    }
    else if (baseTitle.includes('security')) {
      return {
        features: [
          "Security Assessment & Auditing",
          "Vulnerability Testing",
          "Security Implementation",
          "Compliance Management",
          "Security Training"
        ],
        process: [
          "Security Assessment",
          "Threat Modeling",
          "Security Implementation",
          "Testing & Validation",
          "Monitoring & Maintenance"
        ],
        technologies: ["OWASP", "SSL/TLS", "OAuth", "JWT", "SAST/DAST Tools", "Firewall Configuration", "WAF"]
      };
    }
    else if (baseTitle.includes('blogging')) {
      return {
        features: [
          "Content Strategy",
          "SEO-Optimized Writing",
          "Technical Documentation",
          "Content Management",
          "Analytics & Reporting"
        ],
        process: [
          "Topic Research",
          "Content Planning",
          "Writing & Editing",
          "SEO Optimization",
          "Publishing & Promotion"
        ],
        technologies: ["WordPress", "Hashnode", "SEO Tools", "Google Analytics", "Markdown", "Content Management Systems"]
      };
    }
    else {
      // Default content
      return {
        features: [
          "Custom Solutions",
          "Quality Assurance",
          "Support & Maintenance",
          "Scalable Architecture",
          "Performance Optimization"
        ],
        process: [
          "Requirements Gathering",
          "Planning & Design",
          "Implementation",
          "Testing",
          "Deployment & Support"
        ],
        technologies: ["Industry Standard Tools", "Modern Frameworks", "Cloud Services", "Automation Tools"]
      };
    }
  };

  const specificContent = getServiceSpecificContent(service.title);

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <Link to="/services" className="back-btn">← Back to Services</Link>
        <h1>{service.title}</h1>
      </div>
      
      <div className="service-detail-content">
        <div className="service-hero">
          <div className="service-hero-icon">
            <ServiceIcon type={service.icon} />
          </div>
          <div className="service-hero-text">
            <p className="service-tagline">Elevate your business with our expert {service.title} services</p>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
        
        <div className="service-sections">
          <div className="service-section">
            <h2>What We Offer</h2>
            <ul className="service-features">
              {specificContent.features.map((feature, index) => (
                <li key={index}>
                  <div className="feature-bullet"></div>
                  <div className="feature-text">{feature}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="service-section">
            <h2>Our Process</h2>
            <div className="process-timeline">
              {specificContent.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-section">
            <h2>Technologies We Use</h2>
            <div className="tech-tags">
              {specificContent.technologies.map((tech, index) => (
                <div key={index} className="tech-tag">{tech}</div>
              ))}
            </div>
          </div>
          
          <div className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our {service.title} services can help your business grow.</p>
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};