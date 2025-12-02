import React from "react";
import { FaGitAlt, FaGithub, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const ToolsSection = () => {
  const tools = [
    { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-gray-800" /> },
    { name: "Postman", icon: <SiPostman size={40} className="text-orange-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
    { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-700" /> },
  ];

  return (
    <section className="bg-gray-100 py-12 mt-10 border rounded-lg" id="tools">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-600">
          Tools & Software
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {tool.icon}
              <span className="text-gray-700 font-medium text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
