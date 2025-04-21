
import React from 'react';
import '../styles/MotionBrush.css';

const MotionBrush = () => {
  return (
    <div className="motion-brush-container">
      <h1 className="motion-brush-title">Motion Brush</h1>
      <p className="motion-brush-description">
        Runway's Motion Brush feature lets you add controlled motion to specific areas of an image when generating videos. You can apply up to five different motion brushes to a single image. For each brush, you can specify movement in horizontal, vertical directions, and proximity.
      </p>
      
      <div className="motion-image-video-container">
        <div className="motion-image-container">
          <div className="motion-input-label">Input Image</div>
        </div>
        <div className="motion-video-container">
          <div className="motion-output-label">Output Video</div>
        </div>
      </div>
    </div>
  );
};

export default MotionBrush;