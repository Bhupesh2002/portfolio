import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import TypingDesignation from './TypingEffect';
import SocialIcons from './SocialIcons';
import LottieDeveloper from './animations/Lottiedev'
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarsBackground className="absolute inset-0 w-full h-full -z-10"/>
      <div className="relative z-10 h-full flex items-center justify-between mx-20 px-20">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className='text-purple-600'>Bhupesh</span>
          </h1>
          <TypingDesignation />
          <p className="mt-4 text-gray-200 text-lg">
            I’m a passionate developer who loves building clean, interactive, and user-friendly 
            web applications. My focus is on creating creative frontends and powerful backends.
          </p>
          <div className="mt-8 flex items-center space-x-6">
            <a href="/contact"
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white 
              font-semibold rounded-full transition hover:bg-purple-700">
              <FaPaperPlane />
              <span>Hire Me</span>
            </a>
            <a href="https://drive.google.com/file/d/1Ea7BPKRHJAxVjrmTy-96Q5XXC3PdsxEx/view?usp=sharing" 
            target='_blank' download
            className="flex items-center space-x-2 px-6 py-3 border border-purple-500 
            text-purple-400 font-semibold rounded-full transition hover:bg-purple-600 hover:text-white">
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
          <SocialIcons />
        </div>
        <div className="w-[600px] flex justify-center translate-x-[80px]">
          <LottieDeveloper />
        </div>
      </div>
    </div>
  );
};

export default Hero;
