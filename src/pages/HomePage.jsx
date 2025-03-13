import React from 'react';
import { ServicesSection } from './ServicesSection';
import { HeroSection } from '../components/HeroSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};