import React from 'react';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};