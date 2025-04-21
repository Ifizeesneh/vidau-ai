
import React from 'react';
import '../styles/ActOne.css';

const ActOne = () => {
  return (
    <div className="act-one-container">
      <h1 className="act-one-title">Act One</h1>
      <p className="act-one-description">
        Runway's Act-One is a groundbreaking AI tool for character animation. It allows users to create expressive character performances using only a driving video and a character reference image.
      </p>
      
      <div className="act-one-demo">
        {/* This is the blue-purple gradient rectangle shown in the image */}
      </div>
    </div>
  );
};

export default ActOne;