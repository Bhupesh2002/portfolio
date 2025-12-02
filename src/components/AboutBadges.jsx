import { FaReact, FaNodeJs, FaDatabase, FaLightbulb, FaRocket, FaLaptopCode } from "react-icons/fa";

const AboutBadges = () => {
    return(
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaRocket className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">Full Stack Developer (MERN)</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaLightbulb className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">Builds Clean & Scalable Code</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaLaptopCode className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">Problem Solver & Efficient Coder</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaReact className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">React, Tailwind, Frontend</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaNodeJs className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">Node.js & Backend Development</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <FaDatabase className="text-gray-500 text-2xl" />
          <p className="text-purple-700 font-semibold text-lg">MongoDB & MySQL Databases</p>
        </div>
      </div>
    )
}

export default AboutBadges;