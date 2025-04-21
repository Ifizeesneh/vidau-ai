
import React from 'react';
import '../styles/FrameInterpolation.css';
import UploadIcon from '../assets/upload-icon.svg'; 

const FrameInterpolation = () => {
  return (
    <div className="frame-interpolation-container">
      <h1 className="frame-interpolation-title">Frame Interpolation</h1>
      <p className="frame-interpolation-description">
        Runway's Frame Interpolation feature allows users to create smooth, fluid videos from a series of still images. It allows adjustment of transition time percentage between frames.
      </p>
      
      <div className="frame-interpolation-content">
        <div className="F-input-column">
          <div className="F-input-label">Images</div>
          <div className="F-image-placeholders">
            <div className="F-image-placeholder">
              <img src={UploadIcon} alt="Upload Icon" className="" />
            </div>
            <div className="F-image-placeholder">
              <img src={UploadIcon} alt="Upload Icon" className="" />
            </div>
            <div className="F-image-placeholder">
              <div className="F-upload-icon">
                <img src={UploadIcon} alt="Upload Icon" className="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="F-output-column">
          <div className="F-output-label">Output Video</div>
          <div className="F-output-video"></div>
        </div>
      </div>
    </div>
  );
};

export default FrameInterpolation;