import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LottiePerson from "./animations/LottiePerson";
import AboutBadges from "./AboutBadges";
import TechStack from "./techStack";
import ToolsSection from "./Tools";
import { useNavigate } from "react-router-dom";

function AboutPage() {

  const navigate = useNavigate();
 
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-purple-200">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="md:w-2/3 w-full flex-col justify-center md:justify-end">
          <LottiePerson/>
          <TechStack/>  
        </div>
        <div className="md:w-2/3 w-full">
          <h2 className="text-3xl font-bold mb-6 text-white text-left border-b-4 border-purple-700 inline-block pb-1">
            About <span className="text-purple-700">Me</span>
          </h2>
         <p className="text-lg leading-relaxed text-black text-left">
            Hi, I’m <span className="font-semibold text-purple-700">Bhupesh</span>, a passionate 
            Full Stack Developer with hands-on experience in the MERN stack, Python, and Django. 
            I love building clean, fast, and user-friendly applications. My journey began with 
            curiosity about how websites work, which soon grew into a deep interest in creating 
            real-world applications that solve meaningful problems.
            <br /><br />
            I focus on writing clean, readable code and understanding the complete flow of a 
            system—from backend logic to frontend interactions. I constantly improve my skills 
            by working on projects, learning new technologies, and exploring better ways to build 
            efficient applications.
            <br /><br />
            Right now, I’m actively sharpening my skills in React, Node.js, and backend architecture 
            while preparing for developer roles. I believe that consistency and dedicated practice 
            can turn any beginner into a strong developer—and I'm committed to growing every day.
          </p>
          <div className="flex gap-5 mt-6">
          <a href="https://github.com/bhupesh2002" target="_blank" rel="noopener noreferrer"
            className="text-3xl text-purple-700 hover:text-white transition rounded-full hover:bg-purple-700 p-2">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-3xl text-purple-700 hover:text-white transition rounded-full hover:bg-purple-700 p-2">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-3xl text-purple-700 hover:text-white transition rounded-full hover:bg-purple-700 p-2">
            <FaInstagram />
          </a>
        </div>
        </div>  
      </div>
      <AboutBadges/>
      <ToolsSection/>
      <div className="mt-10 text-center gap-4 flex justify-center">
        <a href="https://drive.google.com/file/d/1Ea7BPKRHJAxVjrmTy-96Q5XXC3PdsxEx/view?usp=sharing" target="_blank" download
        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full 
        hover:bg-purple-700 transition-all duration-300 shadow-lg">Download CV</a>
        <button onClick={() => navigate("/")} 
            className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full 
                hover:bg-gray-200 transition-all duration-300 shadow-lg">
            Back to Home
        </button>
        </div>
    </section>
  );
}

export default AboutPage;
