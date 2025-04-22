
import Dp1 from "../assets/dp1.svg";
import Thumbnail1 from "../assets/thumbnail1.svg";
import Thumbnail2 from "../assets/thumbnail2.svg";
import Thumbnail3 from "../assets/thumbnail3.svg";
import Thumbnail4 from "../assets/thumbnail4.svg";
import Thumbnail5 from "../assets/thumbnail5.svg";
import Thumbnail9 from "../assets/thumbnail9.svg";
import Chris from "../assets/chris.svg";
import Kampakis from "../assets/kampokis.svg";
import Dp2 from "../assets/dp2.svg";
import Dp3 from "../assets/dp3.svg";

const twitterUsers = [
    {
      name: "Cristóbal Valenzuela",
      handle: "c_valenzuela",
      verified: true,
      profileImage: Dp1,
      tweetText: "Runway is not an AI company. Runway is a media and entertainment company. And I actually think the era of AI companies is over!",
      timestamp: "6:58 PM · Oct 28, 2024",
      likes: "1.2K",
      hasMedia: false,
      videoUrl: "", // No video for this tweet
      videoThumbnail: "", // No thumbnail needed
      replies: 5
    },
    {
      name: "annie",
      handle: "anniexlsn",
      verified: true,
      profileImage: Dp2, 
      tweetText: "from my archive … so many to process and post … text to video, gets busy ai 0:26",
      timestamp: "9:46 AM · Oct 15, 2024",
      likes: "3",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail1,
      replies: 2
    },
    {
      name: "Dr. Gary",
      handle: "garychou",
      verified: true,
      profileImage: Dp3, 
      tweetText: "After using Runway AI I can tell you: -Facial animation is problematic -Body animation is good -Keying / tracking needs work -Motion tracking needs work -Runway fill is better than Adobe aware fill -Image generator is poor compared to Midjourney If you're making creature creation",
      timestamp: "7:42 PM · Dec 30, 2024",
      likes: "21",
      hasMedia: false,
      videoUrl: "", // No video for this tweet
      videoThumbnail: "", // No thumbnail needed
      replies: 6
    },
    {
      name: "Art & Design (Nerds)",
      handle: "artgarageai",
      verified: false,
      profileImage: Dp1, 
      tweetText: "The upscaling from Runway is VERY impressive (see result attached if you're on any) with Topaz and that's a high bar!",
      timestamp: "10:19 PM · Jan 15, 2025",
      likes: "44",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail2, 
      replies: 8
    },
    {
      name: "Martin Nebelong",
      handle: "MartinNebelong",
      verified: true,
      profileImage: Dp2, 
      tweetText: "A new artform emerges. Burn it or embrace it? Experiments with Ebsynth or a Photoshop overlay for the p's. Each new step adds more control in the animation.",
      timestamp: "11:14 PM · Aug 7, 2024",
      likes: "138",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail3, 
      replies: 19
    },
    {
      name: "Siavash Soleymani",
      handle: "siavashsoleymani",
      verified: true,
      profileImage: "", 
      tweetText: "Runway AI on the go is a life saver! gen-3 alpha: Making it easier than ever to generate production-ready outputs, all in one place. #runwayai",
      timestamp: "5:02 PM · Nov 23, 2024",
      likes: "488",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail4, 
      replies: 32
    },
    {
      name: "Edward Safra",
      handle: "edwardsafra",
      verified: true,
      profileImage: Dp3, 
      tweetText: "The progress behind Runway AI is amazing for reanimating classic video game cut scenes. Here's a Half-Life Eye remastered! Wish we could pass in an object id / character segmentation pass to get the eye details right (we'd love Gun Hat from t.co/mi/ActionMovieVid",
      timestamp: "2:35 PM · Sep 20, 2024",
      likes: "437",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail5, 
      replies: 22
    },
    {
      name: "Dr. Stylianos Kampakis",
      handle: "dr_skampakis",
      verified: true,
      profileImage: "", 
      tweetText: "Runway AI Advancing Creativity with Advanced #AI Tools Runway AI leads the way in professional #digital content creation. This powerful AI system helps creators #artificialintelligence #machinelearning #digitalcreation #advancedai #machinelearningalgorithms",
      timestamp: "9:01 AM · Nov 29, 2024",
      likes: "9",
      hasMedia: true,
      videoUrl: "", // No video for this tweet
      videoThumbnail: Kampakis, // No thumbnail needed
      replies: 4
    },
    {
      name: "Chris Barnas",
      handle: "chrisbarnas",
      verified: true,
      profileImage: "", 
      tweetText: "I used Runway AI to help me make an Ad for my Patreon. Their new animation tool is kind of insane.",
      timestamp: "5:23 PM · Oct 24, 2024",
      likes: "112",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Chris, 
      replies: 9
    },
    {
      name: "Uncanny Harry AI",
      handle: "uncannyharry",
      verified: true,
      profileImage: Dp1, 
      tweetText: "A video generated in Runway Gen-3 ImageVideo converted into 3 other videos by running videoclodes: #runwayai",
      timestamp: "11:47 PM · May 13, 2024",
      likes: "105",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail9, 
      replies: 8
    },
    {
      name: "FYI",
      handle: "usefyi",
      verified: true,
      profileImage: Dp2, 
      tweetText: "Runway Video Learnings: Example I #RunwayML is remarkable. I wanted to share some tips I learned from my series of short, to help you get the most out of this powerful video tool. In the final film, I have three separate clips of #artificialintelligence",
      timestamp: "5:28 AM · Aug 31, 2024",
      likes: "67",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail1, 
      replies: 5
    },
    {
      name: "Sherman Leonard",
      handle: "shermanleonard",
      verified: true,
      profileImage: Dp3, 
      tweetText: "Runway's AI can take a horizontal video and turn it into vertical (or the other way around) It actually generates new video to fill the frame correctly so stretch, I create a quick tutorial showing how it saves time for curious",
      timestamp: "11:19 PM · Jan 22, 2025",
      likes: "98",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail5, 
      replies: 12
    },
    {
      name: "Alpaca Network",
      handle: "AlpacaNetwork",
      verified: true,
      profileImage: Dp1, 
      tweetText: "Runway is now listed on Papa Search - world's #1 AI search engine ⚡️ What is Runway? An AI-powered creative platform for video editing, image generation & manipulation, text-to-image, text-to-video, lipreading & real-time editing for trailer, shorter content creation.",
      timestamp: "3:00 PM · Feb 13, 2025",
      likes: "18",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Chris, 
      replies: 4
    },
    {
      name: "Travis Nichols",
      handle: "travisnichols",
      verified: true,
      profileImage: Dp2, 
      tweetText: "I've been secretly testing Mystic which think is even better than FLUX with AI image generation. I decided to run the prompt everyone is going crazy for. This has just gone on a wild ride/tutorial Uploaded to BO FPS using Topaz. #AI #mystic #runwayai #topaz #theepic stuff is magic!",
      timestamp: "5:30 PM · Aug 15, 2024",
      likes: "224",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail2, 
      replies: 0
    },
    {
      name: "Techpowar",
      handle: "techpowar",
      verified: true,
      profileImage: "", 
      tweetText: "This New AI Expand is truly next-level Runway's new AI Expand feature will it allows you to reframe and expand existing videos into entirely new formats—essentially creating visuals outside the original frame. BUT what's particularly exciting that I found",
      timestamp: "5:55 AM · Jan 6, 2025",
      likes: "33",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail9, 
      replies: 6
    },
    {
      name: "Kieran Warwick",
      handle: "kieranwarwick",
      verified: true,
      profileImage: Dp3, 
      tweetText: "Runway was one of the very first AI tools I used and instantly fell in love with, so I'm more than happy to be part of the creative partners program! Thank you @runwaystudio and the amazing Runway team!",
      timestamp: "12:43 PM · Dec 4, 2024",
      likes: "51",
      hasMedia: true,
      videoUrl: "", 
      videoThumbnail: Thumbnail2, 
      replies: 15
    }
  ];
  
  export default twitterUsers;