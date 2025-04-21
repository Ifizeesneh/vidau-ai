import React from 'react';
import '../styles/AdvancedCameraControl.css'; 

function AdvancedCameraControl() {
  return (
    <div className="advanced-camera-control">  
    <div className="container">
      <h1 className="title">Advanced Camera Control</h1>
      
      <p className="description">
        Veo 2 provides users with greater control over virtual camera movements and angles, enabling the simulation of various cinematic techniques. Users can specify shot types (e.g., wide-angle shots) and effects (e.g., background blurring), allowing for tailored visual storytelling.
      </p>
      
      <div className="content-container">
        <div className="prompt-container">
          <div className="label">Prompt</div>
          <p className="prompt-text">
            Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition. The camera tracks low, capturing the sleek, olive green muscle car as it approaches a corner. As the car executes a dramatic drift, the shot becomes more stylized. The spinning wheels and billowing tire smoke, illuminated by the surrounding city lights.
          </p>
        </div>
        
        <div className="output-container">
          <div className="output-label">Output Video</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdvancedCameraControl;