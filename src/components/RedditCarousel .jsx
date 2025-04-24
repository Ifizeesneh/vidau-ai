import { useState, useEffect } from 'react';
import '../styles/RedditCourasel&post.css';
import RedditLogo from '../assets/faceplate-tracker.svg';
import JoinIcon from '../assets/join.svg';
import UpvoteIcon from '../assets/upvote.svg';
import CommentIcon from '../assets/comment.svg';
import CopyICon from '../assets/copy.svg';

export default function RedditRunwaySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Original 8 posts
  const posts = [
    {
      id: 1,
      username: 'runwayml',
      postedBy: 'Mental-Spray-5253',
      title: 'Creepy story using AI and Runway ML',
      upvotes: 30,
      comments: 27,
      hasVideo: true
    },
    {
      id: 2,
      username: 'Practical-Drag4950',
      commentedOn: true,
      content: "I've used Runway extensively and Kling (only the free version). Kling seems to give better results but takes ages to render which is a bit of a deal breaker for me. (free version can take ten minutes or so.) I can't get to the bottom of how long it would take to render if I paid subscription - they should make it clear because its stopping me purchasing. Still sounds slow from comments I'm reading elsewhere?",
      upvotes: 1,
      replies: 2,
      comments: 2
    },
    {
      id: 3,
      username: 'runwayml',
      postedBy: 'BudgetConference7312',
      title: 'New to Runway. Expensive',
      content: "Hi Everyone! I am a short film video maker with a real camera, but I figured its time to take the leap and see what I can do with...",
      upvotes: 3,
      comments: 13,
      hasReadMore: true
    },
    {
      id: 4,
      username: 'runwayml',
      postedBy: 'Outland',
      title: 'Is Runway',
      content: "I use multiple AI platforms for my video work. I tested the...",
      upvotes: 20,
      hasReadMore: true
    },
    {
      id: 5,
      username: 'runwayml',
      postedBy: 'Mental-Spray-5253',
      title: 'Creepy story using AI and Runway ML',
      upvotes: 30,
      comments: 27,
      hasVideo: true
    },
    {
      id: 6,
      username: 'Practical-Drag4950',
      commentedOn: true,
      content: "I've used Runway extensively and Kling (only the free version). Kling seems to give better results but takes ages to render which is a bit of a deal breaker for me. (free version can take ten minutes or so.) I can't get to the bottom of how long it would take to render if I paid subscription - they should make it clear because its stopping me purchasing. Still sounds slow from comments I'm reading elsewhere?",
      upvotes: 1,
      replies: 2,
      comments: 2
    },
    {
      id: 7,
      username: 'runwayml',
      postedBy: 'BudgetConference7312',
      title: 'New to Runway. Expensive',
      content: "Hi Everyone! I am a short film video maker with a real camera, but I figured its time to take the leap and see what I can do with...",
      upvotes: 3,
      comments: 13,
      hasReadMore: true
    },
    {
      id: 8,
      username: 'runwayml',
      postedBy: 'Outland',
      title: 'Is Runway',
      content: "I use multiple AI platforms for my video work. I tested the...",
      upvotes: 20,
      hasReadMore: true
    }
  ];

  // Create a duplicated list to ensure continuous sliding
  // We duplicate the first 4 posts at the end to create a seamless loop
  const extendedPosts = [...posts, ...posts.slice(0, 4)];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // If we've shown the first 4 posts, quickly reset to start but don't animate the reset
        if (prevIndex >= posts.length) {
          return 0;
        }
        // Increment by 1 to slide one card at a time
        return prevIndex + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [posts.length]);

  // This effect handles the "snap back" to beginning without animation
  useEffect(() => {
    if (activeIndex === posts.length) {
      // Use a timeout to immediately reset to start position without animation
      const resetTimeout = setTimeout(() => {
        const slider = document.querySelector('.runway-reddit-slider');
        if (slider) {
          // Temporarily remove the transition
          slider.style.transition = 'none';
          setActiveIndex(0);
          
          // Force a reflow to ensure the change takes effect immediately
          // eslint-disable-next-line no-unused-expressions
          slider.offsetHeight;
          
          // Re-enable the transition
          setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }
      }, 50);
      
      return () => clearTimeout(resetTimeout);
    }
  }, [activeIndex, posts.length]);

  return (
    <div className="runway-reddit-container">
      <h1 className="runway-reddit-title">
        What People Are Talking About Runway on Reddit
      </h1>
      
      <div className="runway-reddit-slider-container">
        <div 
          className="runway-reddit-slider" 
          style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
        >
          {extendedPosts.map((post, index) => (
            <div 
              key={`${post.id}-${index}`}
              className="runway-reddit-slide"
            >
              <div className="runway-reddit-card">
                <div className="runway-reddit-card-header">
                  <div className="runway-reddit-avatar">
                    <span>R</span>
                  </div>
                  <div className="runway-reddit-user-info">
                    <div className="runway-reddit-username-wrapper">
                      <span className="runway-reddit-username">{post.username}</span>
                      <span className="runway-reddit-action">
                        {post.commentedOn ? 'commented on' : <img src={JoinIcon} alt="Reddit logo" className='joinIcon'/>}
                      </span>
                      {post.commentedOn && <span className="runway-reddit-post-link">post</span>}
                    </div>
                    {!post.commentedOn && post.postedBy && (
                      <div className="runway-reddit-posted-by">Posted by {post.postedBy}</div>
                    )}
                  </div>
                  <div className="runway-reddit-logo">
                    <img src={RedditLogo} alt="Reddit logo" className='redditIcon' />
                  </div>
                </div>
                
                {post.title && (
                  <h2 className="runway-reddit-post-title">{post.title}</h2>
                )}
                
                {post.content && (
                  <p className="runway-reddit-post-content">{post.content}</p>
                )}
                
                {post.hasVideo && (
                  <div className="runway-reddit-video">
                    <div className="runway-reddit-video-controls">
                      <button className="runway-reddit-video-btn runway-reddit-fullscreen-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" />
                        </svg>
                      </button>
                      <button className="runway-reddit-video-btn runway-reddit-mute-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      </button>
                    </div>
                    <div className="runway-reddit-video-link">
                      <div className="runway-reddit-view-on-reddit">
                        View on Reddit
                      </div>
                    </div>
                  </div>
                )}
                
                {post.hasReadMore && (
                  <div className="runway-reddit-read-more-wrapper">
                    <button className="runway-reddit-read-more">
                      Read more 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
                
                <div className="runway-reddit-post-actions">
                  <div className="runway-reddit-upvotes">
                  <img src={UpvoteIcon} alt="Reddit logo" className='upvoteIcon' />
                    <span>{post.upvotes} upvotes</span>
                  </div>
                  
                  <div className="runway-reddit-comments">
                  <img src={CommentIcon} alt="Reddit logo" className='upvoteIcon' />
                    <span>
                      {post.comments ? 'Comment' : ''}
                      <span className='replies'>{post.replies ? `${post.replies} replies` : ''}</span>
                    </span>
                  </div>
                  
                  {!post.commentedOn && (
                    <div className="runway-reddit-share">
                     <img src={CopyICon} alt="Reddit logo" className='upvoteIcon' />
                      <span>Copy link</span>
                    </div>
                  )}
                </div>
                
                {post.comments && (
                  <div className="runway-reddit-view-comments-wrapper">
                    <button className="runway-reddit-view-comments">
                      View {post.comments} comments
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}