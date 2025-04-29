import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0 text-5xl font-bold text-gray-100">
          Movix
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-white transition duration-300">About</a>
          <a href="/services" className="hover:text-white transition duration-300">Services</a>
          <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/_simbiii__/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kelia-simbi-6ab11132b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/keliaa1" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-500">
        © {new Date().getFullYear()} Movix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
