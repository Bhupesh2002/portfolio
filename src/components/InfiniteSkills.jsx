import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiDjango, SiTailwindcss,SiExpress,SiJavascript } from "react-icons/si";

const skills = [
    { icon: <FaReact size={40} color="#61DAFB" />, label: "React" },
    { icon: <FaNodeJs size={40} color="#339933" />, label: "Node.js" },
    { icon: <SiMongodb size={40} color="#47A248" />, label: "MongoDB" },
    { icon: <SiExpress size={40} color="#555555" />, label: "Express.js" },
    { icon: <FaPython size={40} color="#190c0aff" />, label: "Python" },
    { icon: <SiJavascript size={40} color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiMysql size={40} color="#414b93ff" />, label: "MySql" },
    { icon: <SiDjango size={40} color="#1572B6" />, label: "Django" },
    { icon: <SiTailwindcss size={40} color="#38BDF8" />, label: "Tailwind CSS" },
    { icon: <FaGithub size={40} color="#000000" />, label: "GitHub" },
  ];
const InfiniteSkills = () => {
  return (
    <div className="w-full bg-purple-50 py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="border-b-4 border-purple-600 pb-1">Tech Skills</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-10 py-4 text-purple-700 text-3xl
                         hover:scale-110 transition cursor-pointer"
            >
              {skill.icon}
              <span className="text-lg font-semibold text-black">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSkills;
