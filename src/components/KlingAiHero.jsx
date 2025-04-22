import { useState } from 'react';
import LeftCurve from '../assets/left-curve.svg';
import RightCurve from '../assets/right-curve.svg';
import DropdownIconAi from '../assets/dropdown-icon-ai.svg';
import AiUploadIcon from '../assets/ai-upload-icon.svg';
import CreateIcon from '../assets/create-arrow-icon.svg';


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
              <div className='KlingAI-content-header'>
              <h3 className="KlingAI-content-title">Image to Video</h3>
              
              {/* AI Model Dropdown */}
              <div className="model-dropdown">
                <div className="model-selector">
                <img src={DropdownIconAi} alt="Icon" className="model-icon" />
                  <span>Kling 1.0</span>
                  <svg className="dropdown-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              </div>
              
              {/* Image Upload Area */}
              <div className="upload-section">
                <p className="upload-label">Image</p>
                <div className="upload-area">
                  <div className="upload-icon-container">
                  <img src={AiUploadIcon} alt="Icon" className="upload-icon" />
                  </div>
                  <p className="upload-text">Click to upload an image</p>
                </div>
                <p className="upload-instruction">Upload JPG/PNG/WEBP images up to 10MB, with a minimum width/height of 320px.</p>
              </div>
              
              {/* Create Button */}
              <div className="button-container">
                <button className="create-button">
                  <span>Create</span>
                  <img src={CreateIcon} alt="Icon" className="button-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}