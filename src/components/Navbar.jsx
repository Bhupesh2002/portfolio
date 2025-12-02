import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       <div className="flex items-center space-x-2">
          <PiSparkleFill className="text-purple-600 text-3xl"/>
          <Link to="/"
            className="text-2xl font-bold tracking-wide text-white hover:text-purple-600 transition">
            Bhupesh
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-white font-bold hover:text-purple-600 transition">
            Home
          </Link>
          <Link to="/about" className="text-white font-bold hover:text-purple-600 transition">
            About
          </Link>
          <Link to="/projects" className="text-white font-bold hover:text-purple-600 transition">
            Projects
          </Link>
          <Link to="/contact" className="text-white font-bold hover:text-purple-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
