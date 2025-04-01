import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";
import { Toast } from 'primereact/toast';
import React, { useState, useRef } from 'react';
import { subscribeToNewsletter } from '../services/newsletterService';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscribe = async () => {
    // Validate email
    if (!email) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter your email address', life: 3000 });
      return;
    }

    if (!validateEmail(email)) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter a valid email address', life: 3000 });
      return;
    }

    setLoading(true);

    try {
      // Use the Firebase service to subscribe the user
      const result = await subscribeToNewsletter(email);

      if (result.success) {
        toast.current.show({ 
          severity: 'success', 
          summary: 'Success', 
          detail: result.message, 
          life: 3000 
        });
        setEmail('');
      } else {
        toast.current.show({ 
          severity: 'error', 
          summary: 'Error', 
          detail: result.message, 
          life: 3000 
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast.current.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: 'Failed to subscribe. Please try again later.', 
        life: 3000 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-container">
      <Toast ref={toast} />
      
      {/* New card section that matches the image */}
      <div className="footer-main-card headline-card">
        <div>
          <h2 className="headline-text">
            Harnessing AI to revolutionize businesses, enhance efficiency, and
            drive sustainable innovation for a smarter future.
          </h2>
        </div>
        <div className="headline-cta">
          <Link to="/contact">
            <Button label="Contact Us" className="contact-us-button" />
          </Link>
        </div>
      </div>

      {/* Original footer content */}
      <div className="footer-main-card">
        <div className="footer-content">
          <div className="footer-section company-info">
            <h3 className="footer-title"><a href="/">Hexxa</a></h3>
            <p className="footer-tagline">Innovating for a smarter tomorrow</p>
            <p className="footer-description">
              Harnessing AI to revolutionize businesses, enhance efficiency,<br></br> and
              drive sustainable innovation for a smarter future.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="pi pi-linkedin"></i>
              </a>
              <a href="mailto:hexxaprotocol@gmail.com" className="social-icon" aria-label="Email">
                <i className="pi pi-envelope"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="pi pi-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="pi pi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section services-links">
            <h3 className="footer-subtitle">Services</h3>
            <ul className="footer-links">
              <li><a href="/services/ai-solutions">AI & ML Solutions</a></li>
              <li><a href="/services/ml-development">MApp Development</a></li>
              <li><a href="/services/blockchain">Blockchain</a></li>
              <li><a href="/services/digital-transformation">DevOps</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter newsletter-container">
            <h3 className="footer-subtitle">Stay Updated</h3>
            <p className="newsletter-text">Subscribe to our newsletter for the latest tech insights</p>

            <div className="p-inputgroup newsletter-form">
              <InputText 
                placeholder="Your email" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <Button 
                label="Subscribe" 
                icon="pi pi-send" 
                className="newsletter-button" 
                onClick={handleSubscribe}
                loading={loading}
                disabled={loading}
              />
            </div>

            <p className="newsletter-disclaimer">
              <i className="pi pi-shield disclaimer-icon"></i>
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} Hexxa Technologies. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};