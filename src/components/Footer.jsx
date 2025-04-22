
import React from 'react';
import '../styles/Footer.css';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/YouTube.svg';
import Twitter from '../assets/Twitter.svg';
import Tiktok from '../assets/Tiktok.svg';
import Linkedin from '../assets/Linkedin.svg';
import FooterLogo from '../assets/Footer-Logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <div className="logo">
            <img src={FooterLogo} alt="Logo" className="logo-image" />
          </div>
          <p className="tagline">
            VidAU AI Video & Audio Creator:<br />
            Generate Winning Marketing Videos Using VidAU AI in Minutes
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><img src={Facebook} alt='' /></a>
            <a href="#" className="social-icon"><img src={Instagram} alt='' /></a>
            <a href="#" className="social-icon"><img src={Youtube} alt='' /></a>
            <a href="#" className="social-icon"><img src={Twitter} alt='' /></a>
            <a href="#" className="social-icon"><img src={Tiktok} alt='' /></a>
            <a href="#" className="social-icon"><img src={Linkedin} alt='' /></a>
          </div>
          <div className="language-selector">
            <button className="language-btn">English ▾</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>ToolBox</h3>
          <ul className="footer-links">
            <li><a href="#">Product URL to Video</a></li>
            <li><a href="#">AI Avatars</a></li>
            <li><a href="#">Image to Video AI</a></li>
            <li><a href="#">AI Text to Audio/TTS</a></li>
            <li><a href="#">Video Subtitle Remover</a></li>
            <li><a href="#">AI Video Translate</a></li>
            <li><a href="#">AI Video Subtitle Translator</a></li>
            <li><a href="#">View All AI Tools</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Video Templates Center</a></li>
            <li><a href="#">VidAU User Guide</a></li>
            <li><a href="#">How to Make an AI UGC Video</a></li>
            <li><a href="#">Video Tips & Tricks</a></li>
            <li><a href="#">Learning Center</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2025 VidAU.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;