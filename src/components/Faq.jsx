
import React, { useState } from 'react';
import '../styles/Faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Can I use VidAU AI to create social media video ads?",
      answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."
    },
    {
      question: "How does VidAU AI improve ad performance?",
      answer: "VidAU AI analyzes successful ad campaigns and implements proven engagement strategies to improve view rates, click-through rates, and conversions for your video ads."
    },
    {
      question: "Can I request user-generated content (UGC)-style ads with VidAU AI?",
      answer: "Yes, VidAU AI can create authentic-looking UGC-style video ads that resonate with audiences and drive higher engagement rates."
    },
    {
      question: "What's the ideal length for an AI-generated ad?",
      answer: "The ideal length depends on the platform, but VidAU AI optimizes video length based on platform requirements and audience engagement data."
    },
    {
      question: "Can I customize AI video ads for different platforms?",
      answer: "Yes, VidAU AI allows you to create platform-specific versions of your ads with appropriate aspect ratios, durations, and content styles."
    },
    {
      question: "Does VidAU AI create product demo videos?",
      answer: "Yes, VidAU AI can create compelling product demonstrations that highlight features and benefits in an engaging way."
    },
    {
      question: "Can I add my brand's logo, fonts, and colors to the AI video ads?",
      answer: "Absolutely! VidAU AI supports full brand customization, allowing you to maintain consistent brand identity across all your video ads."
    },
    {
      question: "How does VidAU AI ensure ad quality?",
      answer: "VidAU AI uses advanced algorithms to ensure high-quality visuals, smooth transitions, and professional audio in all generated content."
    },
    {
      question: "Can I edit my AI-generated video ads?",
      answer: "Yes, VidAU AI provides editing capabilities to refine and customize your video ads after they've been generated."
    },
    {
      question: "How do I get started with VidAU AI?",
      answer: "Getting started is easy! Simply create an account, select your ad type, provide basic information about your product or service, and let VidAU AI create your first video ad."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">
        Frequently Asked <span className="questions-highlight">Questions</span>
      </h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <div className="faq-icon">
                {openIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;