import ActOne from "./components/ActOne"
import AdvancedCameraControl from "./components/AdvancedCameraControl"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import FrameInterpolation from "./components/FrameInterpolation"
import ImageToScreen from "./components/ImageToScreen"
import ImageToVideo from "./components/ImageToVideo"
import KlingAIHero from "./components/KlingAiHero"
import KlingFeatures from "./components/KlingFeatures "
import KlingWorkflow from "./components/KlingWorkflow "
import LipSync from "./components/LipSync"
import MotionBrush from "./components/MotionBrush"
import Navbar from "./components/Navbar"
import RedditCarousel from "./components/RedditCarousel "
import RunwayFeatures from "./components/RunwayFeatures "
import RunwayFeed from "./components/RunwayFeed"
import TextToVideo from "./components/TextToVideo"
import VidAUHeroSection from "./components/VidAUHeroSection "
import VideoGenerators from "./components/VideoGenerators"
import VideoToVideo from "./components/VideoToVideo"
import VlogSection from "./components/VlogSection"
import YoutubeVids from "./components/YoutubeVids"


function App() {


  return (
   <div className="App">
    <Navbar />
    <KlingAIHero />
    <AdvancedCameraControl />
    <ImageToScreen />
    <KlingFeatures />
    <RunwayFeatures />
    <KlingWorkflow />
    <TextToVideo />
    <ImageToVideo />
    <MotionBrush />
    <VideoToVideo />
    <ActOne />
    <LipSync />
    <FrameInterpolation />
    <VlogSection />
    <YoutubeVids />
    <RedditCarousel />
    <RunwayFeed />
    <VideoGenerators />
    <Faq />
    <VidAUHeroSection />
    <Footer />
    </div>
  )
}

export default App
