// src/components/LipSync/LipSync.jsx
import React from 'react';
import '../styles/LipSync.css';

const LipSync = () => {
  return (
    <div className="lip-sync-container">
      <h1 className="lip-sync-title">Lip Sync</h1>
      <p className="lip-sync-description">
        Runway's Lip Sync feature is an advanced AI feature, letting you synchronize speeches from text scripts or audio files with facial movements in videos. It accepts text-to-speech scripts, uploaded audio files, or on-the-fly audio recordings.
      </p>
      
      {/* First Row */}
      <div className="lip-sync-row">
        <div className="image-container">
          <div className="image-label">Image</div>
        </div>
        <div className="script-container">
          <div className="script-label">Text script</div>
          <p className="script-text">
            Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition.
          </p>
        </div>
        <div className="L-output-container">
          <div className="L-output-label">Output Video</div>
        </div>
      </div>

      {/* Second Row */}
      <div className="lip-sync-row">
        <div className="image-container">
          <div className="image-label">Image</div>
        </div>
        <div className="script-container">
          <div className="script-label">Text script</div>
          <p className="script-text">
            Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition.
          </p>
        </div>
        <div className="L-output-container">
          <div className="L-output-label">Output Video</div>
        </div>
      </div>
    </div>
  );
};

export default LipSync;