
import React from 'react';
import '../styles/VideoGenerators.css';

const VideoGenerators = () => {
  const generators = [
    { name: 'Kling AI', id: 'kling' },
    { name: 'Sora AI', id: 'sora' },
    { name: 'Vidu AI (Vidu Studio)', id: 'vidu' },
    { name: 'PixVerse AI', id: 'pixverse' },
    { name: 'Luma AI (Luma Dream Machine)', id: 'luma-1' },
    { name: 'Pika AI (Pika Labs)', id: 'pika' },
    { name: 'Luma AI (Luma Dream Machine)', id: 'luma-2' },
    { name: 'Wanx AI (Wan 2.1)', id: 'wanx' },
    { name: 'Hunyuan Video (Tencent)', id: 'hunyuan' },
    { name: 'Veo AI', id: 'veo' },
    { name: 'Seaweed AI', id: 'seaweed' }
  ];

  return (
    <div className="video-generators-container">
      <h2 className="title">Discover Other AI Video Generators</h2>
      <div className="generators-list">
        {generators.map((generator) => (
          <div 
            key={generator.id} 
            className="generator-pill"
          >
            {generator.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGenerators;