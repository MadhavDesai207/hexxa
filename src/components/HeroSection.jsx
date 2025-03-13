import React from 'react';
import { Link } from 'react-router-dom';
import { HexaLogo } from './HexaLogo';
import './HeroSection.css';

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Your Trusted</h1>
                    <h1>Partner in</h1>
                    <h1 className="smart-solutions">Smart</h1>
                    <h1 className="smart-solutions">Solutions</h1>
                </div>
                <div className="hero-logo-container">
                    <HexaLogo />
                </div>
            </div>
            <div className="hero-footer">
                <p className="hero-tagline">
                    Harnessing AI to revolutionize businesses, enhance efficiency, and
                    drive sustainable innovation for a smarter future.
                </p>
                <Link to="/contact" className="contact-button">Contact Us</Link>
            </div>
        </section>
    );
};