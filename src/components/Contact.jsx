import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div id="contact" className="container mx-auto max-w-screen-xl px-6 md:px-10 lg:px-16">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
       className=" text-center text-4xl px-4 lg:px-10 border-t border-gray-500 py-6">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <div className="p-6 flex items-center justify-center gap-4 text-3xl ">
          <a
            href="https://www.linkedin.com/in/eric-deo-alamsyah-b8817b293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-150 transition-all duration-200 ease-in-out hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/erickdeoalamsyah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            className="hover:scale-150 transition-all duration-200 ease-in-out hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/erickdeoalamsyah/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-150 transition-all duration-200 ease-in-out"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="text-center text-lg text-gray-300 hover:text-blue-600 pt-6 mb-10">
        <p>
            erickdeo29@gmail.com
          </p>
          </div>
      </div>
    </div>
  );
};

export default Contact;
