import React, { useState, useEffect } from 'react';
import '../styles/RedditCourasel&post.css';
import RedditPost from './RedditPost ';


const RedditCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const redditPosts = [
    {
      id: 1,
      username: 'runwayml',
      postedBy: 'Mental-Spray-5283',
      title: 'Creepy story using AI and Runway ML',
      upvotes: 30,
      comments: 27,
      hasVideo: true
    },
    {
      id: 2,
      username: 'Practical-Drag4950',
      postedOn: 'post',
      content: "I've used Runway extensively and Kling (only the free version). Kling seems to give better results but takes ages to render which is a bit of a deal breaker for me. (free version can take ten minutes or so.) I cant get to the bottom of how long it would take to render if I paid subscription - they should make it clear because its stopping me purchasing. Still sounds slow from comments Im reading elsewhere?",
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
      comments: 13
    },
    {
      id: 4,
      username: 'runwayml',
      postedBy: 'Outlandc',
      title: 'Is Runway',
      content: "I use multiple AI platforms for my video work. I tested the...",
      upvotes: 20,
      comments: 15
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % redditPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [redditPosts.length]);

  return (
    <div className="runway-carousel-container">
      <h1 className="runway-carousel-title">What People Are Talking About Runway on Reddit</h1>
      <div className="runway-carousel-track">
        {redditPosts.map((post, index) => {
          // Fix for proper position calculation
          let position = (index - activeIndex) % redditPosts.length;
          // Handle negative case properly
          if (position < 0) position += redditPosts.length;
          
          let positionClass = 'hidden';
          if (position === 0) positionClass = 'active';
          else if (position === 1) positionClass = 'next';
          else if (position === redditPosts.length - 1) positionClass = 'prev';
          
          return (
            <div
              key={post.id}
              className={`runway-carousel-item runway-${positionClass}`}
            >
              <RedditPost post={post} />
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default RedditCarousel;