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
        </section>
    );
};