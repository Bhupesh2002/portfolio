import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold tracking-wide">Bhupesh</h1>
        </div>
        <div className="flex space-x-10 mt-4 md:mt-0">
          <a
            href="https://github.com/bhupesh2002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/bhupesh-d-216b5424a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm mt-4 md:mt-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Bhupesh Dhesingurajan. All rights reserved.
        </p>
      </div>
      <div className="border-t border-purple-500 mt-6"></div>
    </footer>
  );
};

export default Footer;
