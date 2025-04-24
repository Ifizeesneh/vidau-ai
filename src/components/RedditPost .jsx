import React from 'react';
import '../styles/RedditCourasel&post.css';
import ReditLogo from '../assets/faceplate-tracker.svg';

const RedditPost = ({ post }) => {
  const {
    username,
    postedBy,
    postedOn,
    title,
    content,
    upvotes,
    comments,
    replies,
    hasVideo
  } = post;

  // Create user initial for the avatar
  const userInitial = username ? username.charAt(0).toUpperCase() : 'U';

  return (
    <div className="runway-reddit-post">
      <div className="runway-post-header">
        <div className="runway-user-icon">
          {userInitial}
        </div>
        <div className="runway-post-info">
          <div className="runway-username">{username}</div>
          {postedOn ? (
            <div className="runway-posted-details">commented on <span className="runway-highlight">{postedOn}</span></div>
          ) : (
            <div className="runway-posted-details">Posted by {postedBy}</div>
          )}
        </div>
        <div className="runway-reddit-logo">
          <img src={ReditLogo} alt="Reddit" />
        </div>
      </div>
      
      <div className="runway-post-content">
        {title && <h2 className="runway-post-title">{title}</h2>}
        {content && <p className="runway-post-text">{content}</p>}
        
        {hasVideo && (
          <div className="runway-post-video">
            <div className="runway-video-placeholder">
              <span className="runway-fullscreen-icon">⤢</span>
              <span className="runway-mute-icon">🔇</span>
            </div>
            <div className="runway-video-overlay">
              <button className="runway-view-btn">View on Reddit</button>
            </div>
          </div>
        )}
        
        {content && content.length > 100 && (
          <div className="runway-read-more">
            <button>Read more ⌄</button>
          </div>
        )}
      </div>
      
      <div className="runway-post-footer">
        <div className="runway-post-stats">
          <div className="runway-upvote">
            <span className="runway-upvote-icon">▲</span>
            <span>{upvotes} upvotes</span>
          </div>
          
          <div className="runway-comment">
            <span>💬</span>
            <span>Comment</span>
          </div>
          
          {replies && (
            <div className="runway-replies">
              <span>↩️</span>
              <span>{replies} replies</span>
            </div>
          )}
          
          <div className="runway-copy-link">
            <span>🔗</span>
            <span>Copy link</span>
          </div>
        </div>
        
        <div className="runway-post-actions">
          {comments > 0 && (
            <button className="runway-view-comments">
              View {comments} comments
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedditPost;