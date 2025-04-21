// src/components/VidAUHeroSection/VidAUHeroSection.jsx
import React from 'react';
import '../styles/VidauHeroSection.css'; 
import heroImage from '../assets/heroSectionImage.svg'; 

const VidAUHeroSection = () => {
  return (
    <div className="vidau-hero-container">
      <div className="vidau-hero-content">
        <h1 className="vidau-hero-title">
          Create Winning Video Ads<br />in Minutes with VidAU AI
        </h1>
        <div className="vidau-hero-cta">
          <button className="vidau-cta-button">
            Get Started For Free
            <svg className="vidau-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="vidau-hero-image-container">
        <img src={heroImage} alt="VidAU AI Video Examples" className="vidau-hero-image" />
      </div>
    </div>
  );
};

export default VidAUHeroSection;