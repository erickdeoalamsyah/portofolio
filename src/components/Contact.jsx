import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="border-t border-gray-500 ">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <div className="m-8 flex items-center justify-center gap-4 text-3xl ">
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
          <a
            href="https://www.linkedin.com/in/eric-deo-alamsyah-b8817b293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:scale-150 transition-all duration-200 ease-in-out "
          >
            <MdOutlineMail />
          </a>
        </div>
        <div className="text-center text-lg text-gray-300 hover:text-blue-600 mb-10">
        <p>
            erickdeo29@gmail.com
          </p>
          </div>
      </div>
    </div>
  );
};

export default Contact;
