import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="mt-6 flex items-center space-x-6">
      <a href="https://github.com/bhupesh2002" target="_blank"
        className="text-purple-400 text-white text-2xl hover:text-purple-500 transition">
        <FaGithub size={30}/>
      </a>
      <a href="https://linkedin.com/in/bhupesh-d-216b5424a"target="_blank"
        className="text-purple-400 text-white text-2xl hover:text-purple-500 transition">
        <FaLinkedin size={30}/>
      </a>
      <a href="mailto:rajanbhupesh@gmail.com"
        className="text-purple-400 text-white text-2xl hover:text-purple-500 transition">
        <FaEnvelope size={30}/>
      </a>
    </div>
  );
};
export default SocialIcons;
