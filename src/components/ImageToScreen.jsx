// src/components/ImageToScreen/ImageToScreen.jsx
import React from 'react';
import '../styles/ImageToScreen.css';
import CreateIcon from '../assets/create-arrow-icon.svg'; 


const ImageToScreen = () => {
    return (
      <div className="container">
        <div className="image-to-screen-container">
          <div className="left-panel">
            <h2 className="panel-title">Relevant UI</h2>
          </div>
          
          <div className="right-panel">
            <h1 className="main-title">Prompt/Image To Screen</h1>
            
            <div className="content-text">
              <p>
                <span className="highlight-text">Kling AI's text-to-video</span> generates cinema-grade video from text 
                prompts, which results in quality visuals that meet your desired 
                inputs. <span className="highlight-text">Kling AI also turns images into realistic videos</span> with smooth 
                frame rates in just a few minutes.
              </p>
            </div>
            
            <div className="button-container">
              <button className="try-button">
                Try Kling AI Now
                <span className="arrow-icon"><img src={CreateIcon} alt="Icon" className="button-icon" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageToScreen;