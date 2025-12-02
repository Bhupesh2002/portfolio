import { useNavigate } from "react-router-dom";
import { Card, Badge, Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import LottieLib from "@/components/animations/LottieLib";
import LottieTask from "@/components/animations/LottieTask";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "bookwise",
      title: "Library Management System",
      tech: "MERN + JWT + Tailwind CSS",
      description: "A complete library system with secure login and book CRUD.",
      github: "https://github.com/bhupesh2002/BookWise",
      animation: <LottieLib className="w-40 h-40" />,
    },
    {
      id: "taskflow",
      title: "TaskFlow Management System",
      tech: "MERN Stack",
      description: "A clean and efficient task tracking application.",
      github: "https://github.com/bhupesh2002/TaskFlow",
      animation: <LottieTask className="w-40 h-40" />,
    },
  ];

  return (
    <section className="bg-purple-200 py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-10 text-center">
          My<span className="text-purple-600"> Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="flex justify-center mb-4 shadow-md ">{project.animation}</div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3 text-md">{project.description}</p>
              <span className=" px-3 py-2 bg-purple-100 
              text-purple-700 text-sm font-medium rounded-full shadow-sm">
                {project.tech}
              </span>
              <div className="flex gap-4 mt-4">
                <Button color="purple" outline href={project.github} target="_blank"
                className="flex items-center gap-2">
                  <FaGithub />GitHub</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-15 py-3 inline-flex font-bold bg-white rounded-full hover:bg-gray-100 transition">
            Back
          </button>
        </div>
    </section>
  );
};

export default ProjectsSection;
