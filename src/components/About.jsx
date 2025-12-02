import { FaUserAlt, FaMapMarkerAlt, FaTools, FaRegClock } from "react-icons/fa";
import LottieLap from "./animations/LottieLap";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          <span className="border-b-4 border-purple-600 pb-1">
            About Me
          </span>
        </h2>
        <p className="text-purple-600 italic font-medium text-lg mb-10">
          "Transforming ideas into clean, scalable, and user-focused web experiences."
        </p>
        <div className="flex flex-col md:flex-row gap-12 mt-10 items-center md:items-start">
          <div className="w-64 h-64 bg-gray-100 rounded-xl shadow-md border border-gray-200 flex items-center justify-center">
            <LottieLap />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
             Hey! I'm Bhupesh — a passionate developer who enjoys building clean, 
             interactive, and efficient web applications. I focus on creating 
             smooth user experiences and bringing ideas to life through code. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-5 rounded-lg bg-gray-100 border border-gray-300">
                <div className="flex items-center gap-3">
                  <FaRegClock className="text-purple-600 text-4xl"/>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-sm opacity-70 group-hover:opacity-100">
                      Gaining hands-on experience by developing practical, real-world projects for 1+ years.</p>
                  </div>
                </div>
              </div>
              <div className="group p-5 rounded-lg bg-gray-100 border border-gray-300">
                <div className="flex items-center gap-3">
                  <FaTools className="text-purple-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Tech Stack</h3>
                    <p className="text-sm opacity-70 group-hover:opacity-100">
                      React, Python, Django, MySQL, Tailwind
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-5 rounded-lg bg-gray-100 border border-gray-300">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-purple-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Current Focus</h3>
                    <p className="text-sm opacity-70 group-hover:opacity-100">Leveling up my React and backend development skills.</p>
                  </div>
                </div>
              </div>
              <div className="group p-5 rounded-lg bg-gray-100 border border-gray-300">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm opacity-70 group-hover:opacity-100">Tiruppur, Tamil Nadu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
