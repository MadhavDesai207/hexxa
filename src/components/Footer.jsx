import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <Card className="footer-card">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-message">
              Harnessing AI to revolutionize businesses, enhance efficiency, and
              drive sustainable innovation for a smarter future.
            </p>
          </div>
          <div className="footer-button">
            <Button
              label="Contact Us"
              className="p-button-outlined contact-button"
              onClick={() => window.location.href = '/contact'}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

