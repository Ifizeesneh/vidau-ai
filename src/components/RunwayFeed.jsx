
import React, { useState } from 'react';
import '../styles/RunwayFeed.css';
import twitterUsers from './constant';
import Verified from "../assets/verified.svg";


const RunwayFeed = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (index) => {
    setActiveVideo(index === activeVideo ? null : index);
  };

  return (
    <div className="runway-feed-container">
      <h1 className="runway-feed-title">What People Are Talking About Runway on X</h1>
      
      <div className="tweets-grid">
        {twitterUsers.map((user, index) => (
          <div className="tweet-card" key={index}>
            <div className="tweet-header">
              <div className="user-info">
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={`${user.name} profile`} 
                    className="profile-image"
                  />
                ) : (
                  <div className="profile-image-placeholder">
                    {user.name.charAt(0)}
                  </div>
                )}
                <div className="user-details">
                  <div className="name-container">
                    <span className="user-name">{user.name}</span>
                    {user.verified && <span className="verified-badge"><img 
                    src={Verified} 
                    alt="Verified" 
                  /></span>}
                  </div>
                  <span className="user-handle">@{user.handle}</span>
                </div>
              </div>
              <div className="twitter-icon">𝕏</div>
            </div>

            <div className="tweet-content">
              <p className="tweet-text">{user.tweetText}</p>
              
              {user.hasMedia && (
                <div className="tweet-media">
                  {activeVideo === index && user.videoUrl ? (
                    <div className="video-container">
                      <video 
                        src={user.videoUrl} 
                        controls 
                        autoPlay 
                        className="tweet-video"
                      />
                    </div>
                  ) : (
                    <div 
                      className="media-container" 
                      onClick={() => handlePlayVideo(index)}
                      style={user.videoThumbnail ? { backgroundImage: `url(${user.videoThumbnail})`, backgroundSize: 'cover' } : {}}
                    >
                      <div className="play-button-container">
                        {/* <div className="play-button">
                          <svg viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="tweet-footer">
              <div className="timestamp">{user.timestamp}</div>
              <div className="tweet-actions">
                <div className="stats">
                  <span className="likes">{user.likes}</span>
                  <button className="action-btn">Reply</button>
                  <button className="action-btn">Copy link</button>
                </div>
                {user.replies > 0 && (
                  <div className="replies">
                    <span className="read-more">Read more on {user.replies} {user.replies === 1 ? 'reply' : 'replies'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunwayFeed;