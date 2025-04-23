// src/components/ImageToVideo/ImageToVideo.jsx
import React from 'react';
import '../styles/ImageToVideo.css';

const ImageToVideo = () => {
  // Sample data for the examples
  const examples = [
    {
      id: 1,
      prompt: "Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition."
    },
    {
      id: 2,
      prompt: "Low-angle tracking shot, 18mm lens. The car drifts, leaving trails of light and tire smoke, creating a visually striking and abstract composition."
    }
  ];

  return (
    <div className="image-video-container">
      <h1 className="image-video-title">Image to Video</h1>
      
      <p className="image-video-description">
        Also, accessible in all its models, Runway AI's image-to-video feature helps you transform static images into dynamic video content. It can produce video outputs with natural character motion and advanced frame interpolation, and comes with helpful tools such as multiple key frames and variable aspect ratios.
      </p>
      
      <div className="examples-container">
        {examples.map((example) => (
          <div key={example.id} className="example-row">
            <div className="prompt-container">
              <div className="prompt-badge">Prompt</div>
              <div className="prompt-text">
                {example.prompt}
              </div>
            </div>
            
            <div className="input-containers">
              <button className="input-image-btn">
                Input Image
              </button>
              <div className="image-placeholder"></div>
            </div>
            
            <div className="output-container">
              <button className="output-video-btn">
                Output Video
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageToVideo;