
import React from 'react';
import '../styles/KlingWorkflow.css'

const KlingWorkflow = () => {
  const steps = [
    {
      number: "01",
      title: "Input Your Prompt",
      description: "Describe the text or upload an image to transform into a video."
    },
    {
      number: "02",
      title: "Wait For Output",
      description: "Adjust video settings before Kling AI starts to process your inputs."
    },
    {
      number: "03",
      title: "Download Video",
      description: "The tool will generate a full video that you can save if fully satisfied."
    }
  ];

  return (
    <div className="workflow-container">
      <h1 className="workflow-title">How Does Kling AI Work?</h1>
      
      <div className="workflow-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KlingWorkflow;