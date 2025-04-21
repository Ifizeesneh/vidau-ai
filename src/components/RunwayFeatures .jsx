
import React from 'react';
import '../styles/RunwayFeatures.css';

const RunwayFeatures = () => {
    const features = [
      {
        title: "Text to Video",
        description: "Generate videos from simple or complex text prompts",
        color: "#6C63FF" // Purple color for the title
      },
      {
        title: "Image to Video",
        description: "Transform static images into dynamic video content",
        color: "#6C63FF"
      },
      {
        title: "Motion Brush",
        description: "Add controlled motion to specific areas of an image when generating videos.",
        color: "#6C63FF"
      },
      {
        title: "Video to Video",
        description: "Transform existing videos using AI-generated effects and styles",
        color: "#6C63FF"
      },
      {
        title: "Act One",
        description: "Create expressive character performances using driving videos and reference images",
        color: "#6C63FF"
      },
      {
        title: "Lip Sync",
        description: "Synchronize speeches from text scripts or audio files with facial movements in videos",
        color: "#6C63FF"
      },
      {
        title: "Frame Interpolation",
        description: "Create smooth, fluid videos from a series of still images",
        color: "#6C63FF"
      }
    ];
  
    return (
      <div className="runway-container">
        <h1 className="runway-title">Key Features of Runway AI</h1>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-items">
              <span className="feature-title" style={{ color: feature.color }}>
                {feature.title}:
              </span>{" "}
              <span className="feature-description">{feature.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RunwayFeatures;