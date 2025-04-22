import React from 'react';
import '../styles/AdvancedCameraControl.css'; 

function AdvancedCameraControl() {
  return (
    <div className="acc-container">  
      <div className="acc-content-wrapper">
        <h1 className="acc-title">Advanced Camera Control</h1>
        
        <p className="acc-description">
          Veo 2 provides users with greater control over virtual camera movements and angles, enabling the simulation of various cinematic techniques. Users can specify shot types (e.g., wide-angle shots) and effects (e.g., background blurring), allowing for tailored visual storytelling.
        </p>
        
        <div className="acc-content-container">
          <div className="acc-prompt-container">
            <div className="acc-label">Prompt</div>
            <p className="acc-prompt-text">
              Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition. The camera tracks low, capturing the sleek, olive green muscle car as it approaches a corner. As the car executes a dramatic drift, the shot becomes more stylized. The spinning wheels and billowing tire smoke, illuminated by the surrounding city lights.
            </p>
          </div>
          
          <div className="acc-output-container">
            <div className="acc-output-label">Output Video</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedCameraControl;