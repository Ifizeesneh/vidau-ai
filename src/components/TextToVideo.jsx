// src/components/TextToVideo/TextToVideo.jsx
import React from 'react';
import '../styles/TextToVideo.css'; 

const TextToVideo = () => {
  // Sample data for the examples
  const examples = [
    {
      id: 1,
      prompt: "Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition. The camera tracks low, capturing the sleek, olive green muscle car as it approaches a corner. As the car executes a dramatic drift, the shot becomes more stylized. The spinning wheels and billowing tire smoke, illuminated by the surrounding city lights."
    },
    {
      id: 2,
      prompt: "Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition. The camera tracks low, capturing the sleek, olive green muscle car as it approaches a corner. As the car executes a dramatic drift, the shot becomes more stylized. The spinning wheels and billowing tire smoke, illuminated by the surrounding city lights."
    },
    {
      id: 3,
      prompt: "Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition. The camera tracks low, capturing the sleek, olive green muscle car as it approaches a corner. As the car executes a dramatic drift, the shot becomes more stylized. The spinning wheels and billowing tire smoke, illuminated by the surrounding city lights."
    }
  ];

  return (
    <div className="text-video-container">
      <h1 className="text-video-title">Text to Video</h1>
      
      <p className="text-video-description">
        Runway AI's text-to-video feature is available in its Gen-2, Gen-3 Alpha and Gen-3 Alpha Turbo models and allows users to generate videos from simple or complex text prompts. It understands detailed prompts to create videos tailored to your needs, and offers a wide range of camera control and style customization options.
      </p>
      
     
      
      <div className="examples-container">
        {examples.map((example) => (
          <div key={example.id} className="example-row">
            <div className="prompt-containers">
              <div className="prompt-badge">Prompt</div>
              <div className="prompt-text">
                {example.prompt}
              </div>
            </div>
            
            <div className="output-container">
              <button className="output-video-btn">
                Output Video
              </button>
              {/* Placeholder for video output */}
              <div className="video-placeholder"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextToVideo;