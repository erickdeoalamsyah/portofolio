import React, { useState } from "react";
import logo from "../assets/eric-logo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent  top-0 left-0 z-50">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-10 lg:px-16 flex items-center justify-between py-4">
        {/* Sidebar Trigger (Mobile Only) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(true)} className="text-gray-200 text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>

        {/* Logo (Hidden on Mobile) */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex flex-shrink-0 items-center"
        >
          <a href="/" aria-label="Home">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex items-center px-6 py-3 rounded-full shadow-md border border-gray-500 gap-x-6"
        >
          <a href="#about" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">ABOUT</a>
          <a href="#tech" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">TECH</a>
          <a href="#project" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">PROJECT</a>
          <a href="#certification" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">CERTIFICATION</a>
          <a href="#experience" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">EXPERIENCE</a>
          <a href="#contact" className="text-xs text-white hover:text-blue-600 hover:scale-110 transition-all duration-300">CONTACT</a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 text-xl"
        >
          <a href="https://www.linkedin.com/in/eric-deo-alamsyah-b8817b293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-125 transition-all duration-200 ease-in-out hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/erickdeoalamsyah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:scale-125 transition-all duration-200 ease-in-out hover:text-orange-600">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/erickdeoalamsyah/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-125 transition-all duration-200 ease-in-out hover:text-orange-900">
            <FaInstagram />
          </a>
        </motion.div>
      </div>

      {/* Sidebar Menu for Mobile */}
      {isOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 shadow-lg z-50 lg:hidden flex flex-col items-start px-8 py-20"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-2xl">
            <FaTimes />
          </button>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start space-y-3 text-gray-300"
          >
            <a href="#about" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>ABOUT</a>
            <a href="#tech" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>TECH</a>
            <a href="#project" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>PROJECT</a>
            <a href="#certification" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>CERTIFICATION</a>
            <a href="#experience" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>EXPERIENCE</a>
            <a href="#contact" className="text-md hover:text-blue-600" onClick={() => setIsOpen(false)}>CONTACT</a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
