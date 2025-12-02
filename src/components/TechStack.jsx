import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiDjango, SiTailwindcss, SiMysql } from "react-icons/si";

const TechStack = () => {
  const techs = [
    { name: "React", icon: <SiReact className="text-blue-500" size={25} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={25} /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" size={25} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={25} /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" size={25} /> },
    { name: "Django", icon: <SiDjango className="text-green-700" size={25} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={25} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" size={25} /> },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-purple-700 mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-4">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
