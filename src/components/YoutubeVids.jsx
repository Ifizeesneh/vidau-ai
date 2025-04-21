import { useState, useEffect } from 'react';
import UploadIcon from '../assets/upload-icon.svg';
import '../styles/VlogSection.css';

// Icon component for the cards
const VlogIcon = () => (
  <img src={UploadIcon} alt="Upload Icon" className="" />
);

// Main component
const YoutubeVids = () => {
  const totalCards = 6; // Total number of cards
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  useEffect(() => {
    // Cycle through cards one by one
    const animationInterval = setInterval(() => {
      setActiveCardIndex(prev => (prev + 1) % totalCards);
    }, 3000);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section className="vlog-section">
      <h1 className="vlog-heading">Youtube Videos About Runway on Reddit</h1>
     
      
    
      
      <div className="slider-container">
        <div className="slider">
          {[...Array(totalCards)].map((_, index) => (
            <div 
              className={`slider-card ${activeCardIndex === index ? 'active' : ''}`}
              key={index}
              style={{
                transform: `translateX(${(index - activeCardIndex) * 110}%)`,
                zIndex: totalCards - Math.abs(activeCardIndex - index)
              }}
            >
              <VlogIcon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeVids;