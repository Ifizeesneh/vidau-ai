
import React from 'react';
import '../styles/VideoToVideo.css';

const VideoToVideo = () => {
  return (
    <div className="video-to-video-container">
      <h1 className="video-to-video-title">Video to Video</h1>
      <p className="video-to-video-description">
        Runway AI's video-to-video feature, as part of the Gen-3 Alpha and Turbo model, allows you to transform existing videos using AI-generated effects and styles. This powerful tool enables creators to reimagine and customize their footage without traditional editing techniques
      </p>
      
      {/* First Row */}
      <div className="V-video-row">
        <div className="V-input-container">
          <div className="V-input-label">Input Video</div>
        </div>
        <div className="V-prompt-container">
          <div className="V-prompt-badge">Prompt</div>
          <p className="V-prompt-text">
            Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition.
          </p>
        </div>
        <div className="V-output-container">
          <div className="V-output-label">Output Video</div>
        </div>
      </div>

      {/* Second Row */}
      <div className="V-video-row">
        <div className="V-input-container">
          <div className="V-input-label">Input Video</div>
        </div>
        <div className="V-prompt-container">
          <div className="V-prompt-badge">Prompt</div>
          <p className="V-prompt-text">
            Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition.
          </p>
        </div>
        <div className="V-output-container">
          <div className="V-output-label">Output Video</div>
        </div>
      </div>
    </div>
  );
};

export default VideoToVideo;