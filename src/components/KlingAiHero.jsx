import { useState } from 'react';
import LeftCurve from '../assets/left-curve.svg';
import RightCurve from '../assets/right-curve.svg';


export default function KlingAIHero() {
  const [activeTab, setActiveTab] = useState('Image to Video');
  
  return (
    <div className="hero-container">

      {/* Decorative Background Images */}
      <img src={LeftCurve} alt="Top Left Decoration" className="top-left-decor" />
      <img src={RightCurve} alt="Top Right Decoration" className="top-right-decor" />
      {/* Background curve shape */}
      <div className="background-shape"></div>
      
      <div className="hero-content">
        {/* Hero Content */}
        <div className="hero-text">
          <h1 className="hero-title">Kling AI</h1>
          
          <p className="hero-description">
            Kling AI is an advanced AI text-to-video generation tool developed by Kuaishou, a Chinese short-video platform. Since its launch, it has generated motion, ensuring professional-grade output. Here, you can try Kling AI for free! <span className="blue-text">over 10 million videos</span>. It allows you to generate lifelike visuals with smooth
          </p>
          
          {/* Tool Interface */}
          <div className="tool-interface">
            {/* Tabs */}
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'Image to Video' ? 'active' : ''}`}
                onClick={() => setActiveTab('Image to Video')}
              >
                Image to Video
              </button>
              <button 
                className={`tab ${activeTab === 'Text to Video' ? 'active' : ''}`}
                onClick={() => setActiveTab('Text to Video')}
              >
                Text to Video
              </button>
            </div>
            
            {/* Content */}
            <div className="tab-content">
              <h3 className="content-title">Image to Video</h3>
              
              {/* AI Model Dropdown */}
              <div className="model-dropdown">
                <div className="model-selector">
                  <svg className="model-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                  <span>Kling 1.0</span>
                  <svg className="dropdown-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Image Upload Area */}
              <div className="upload-section">
                <p className="upload-label">Image</p>
                <div className="upload-area">
                  <div className="upload-icon-container">
                    <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="upload-text">Click to upload an image</p>
                </div>
                <p className="upload-instruction">Upload JPG/PNG/WEBP images up to 10MB, with a minimum width/height of 320px.</p>
              </div>
              
              {/* Create Button */}
              <div className="button-container">
                <button className="create-button">
                  <span>Create</span>
                  <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}