// src/components/VidAUHeroSection/VidAUHeroSection.jsx
import React from 'react';
import '../styles/VidauHeroSection.css'; 
import heroImage from '../assets/heroSectionImage.svg'; 
import CreateIcon from '../assets/create-black-icon.svg'; 

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
            
            <img src={CreateIcon} alt="VidAU AI Video Examples" className="vidau-arrow-icon" />
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