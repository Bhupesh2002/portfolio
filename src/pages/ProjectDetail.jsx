import { useParams, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import LottieLib from "@/components/animations/LottieLib";
import LottieTask from "@/components/animations/LottieTask";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    bookwise: {
      title: "Library Management System",
      animation: <LottieLib className="w-96 h-96 mx-auto" />,
      description: `BookWise is a fully functional Library Management System created using the MERN stack. 
It enables smooth management of books, users, and authentication workflows. 
The system includes secure JWT-based login for both admin and regular users, ensuring role-specific permissions. 
Admins can add, update, and remove books, while users can browse and check availability in real time. 
The UI is designed with a clean and responsive layout using React and Tailwind, providing a seamless user experience. 
The backend is powered by Express and MongoDB, allowing scalable data handling and quick API responses. 
BookWise also supports proper form validation, error handling, and protected routes. 
This project demonstrates full-stack development, API structuring, and state management in a real-world workflow.`,
      features: [
        "JWT Authentication & Role-based Access",
        "Add, Update, Delete Books",
        "Responsive Modern UI with React & Tailwind",
        "Backend with Node.js, Express & MongoDB",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
      github: "https://github.com/bhupesh2002/BookWise",
    },

    taskflow: {
      title: "TaskFlow Management System",
      animation: <LottieTask className="w-96 h-96 mx-auto" />,
      description: `TaskFlow is a productivity-focused task management application built with the MERN stack. 
It allows users to create, update, organize, and delete tasks with a clean and intuitive workflow. 
The interface is designed for simplicity, enabling users to manage daily work without distractions. 
TaskFlow includes features like status updates, task filtering, and a responsive UI built with React and Tailwind. 
The backend is built with Express and MongoDB, offering fast CRUD operations and smooth state synchronization. 
With a modular folder structure, the project showcases REST API design, form handling, and component reusability. 
TaskFlow demonstrates my understanding of full-stack app development and delivering real-world usability.`,
      features: [
        "CRUD operations for tasks",
        "Intuitive User Interface",
        "Smooth task workflow",
        "Responsive Design",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/bhupesh2002/TaskFlow",
    },
  };

  const project = projects[projectId];

  if (!project)
    return (
      <p className="text-center mt-20 text-red-500">Project not found!</p>
    );

  return (
    <section className="bg-purple-200 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        {/* Animation centered */}
        <div className="bg-white rounded-full p-4 mx-auto text-center">
          {project.animation}
        </div>

        {/* Left aligned content */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl font-bold text-purple-700">
            {project.title}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            {project.description}
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-medium 
                hover:bg-purple-700 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            className="inline-flex px-6 py-3 rounded-full items-center gap-2 
            text-white bg-purple-600 font-medium hover:bg-purple-700 transition"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>

        {/* Back button centered */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-10 py-3 bg-white rounded-full font-medium 
            hover:bg-gray-100 transition"
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
