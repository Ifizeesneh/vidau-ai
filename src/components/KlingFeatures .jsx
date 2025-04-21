
import React from 'react';
import '../styles/KlingFeatures.css'; 

const KlingFeatures = () => {
  const features = [
    "Image to Video",
    "Text to Video",
    "Motion Brush",
    "Extend Video",
    "Face Model",
    "Lip Sync",
    "Camera Movement",
    "Virtual Try On",
    "Elements",
    "Start/End Frame",
    "API"
  ];

  return (
    <div className="kling-container">
      <h1 className="kling-title">Kling AI's Feature Offerings</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KlingFeatures;