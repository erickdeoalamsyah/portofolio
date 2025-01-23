import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaRocket, FaHourglassHalf } from "react-icons/fa";

export const Projects = () => {
  const MAX_WORDS = 30;

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return {
        truncated: words.slice(0, maxWords).join(" "),
        isTruncated: true,
      };
    }
    return { truncated: text, isTruncated: false };
  };

  const isOdd = PROJECTS.length % 2 !== 0;

  return (
    <div className="px-4 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-2xl lg:text-3xl border-b border-gray-500 py-2"
      >
        PROJECTS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {PROJECTS.map((project, index) => {
          const [showMore, setShowMore] = useState(false);
          const { truncated, isTruncated } = truncateText(
            project.description,
            MAX_WORDS
          );

          return (
            <div
              key={index}
              className="flex flex-col h-full bg-blue rounded-2xl shadow-lg border border-gray-500 overflow-hidden hover:shadow-lg hover:shadow-blue-600 hover:border-t-2 hover:border-blue-600 transition-shadow duration-300"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="relative group w-full h-72"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-70 object-cover opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out h-72"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: +100 }}
                transition={{ duration: 1 }}
                className="p-4 border-t border-gray-500 flex flex-col flex-grow"
              >
                <h3 className="text-[clamp(1rem, 2vw, 2.5rem)] font-semibold text-white border-b border-gray-500 pb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 flex-grow mt-2 text-justify">
                  {showMore || !isTruncated
                    ? project.description
                    : `${truncated}...`}
                </p>
                <div className="flex flex justify-between items-center mt-2">
                  {isTruncated && (
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-sm text-left text-blue-400 hover:underline"
                    >
                      {showMore ? "Show less <" : "Show more >"}
                    </button>
                  )}
                  <div className="flex gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white py-2 hover:text-blue-500 underline"
                    >
                      CODE
                    </a>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-sm text-white py-2 hover:text-blue-500 underline"
                    >
                      WEB 
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 border-t border-gray-500 pt-3 mt-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: +100 }}
                      transition={{ duration: 2.5 }}
                      className="border border-gray-500  p-2 text-xs text-gray-300 rounded-lg"
                      key={index}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
        {isOdd && (
          <motion.div
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg border border-gray-500 p-6 text-white text-lg text-center animate-pulse"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <FaRocket className="text-4xl text-white animate-bounce" />
              <p className="text-2xl font-bold">Coming Soon...</p>
              <FaHourglassHalf className="mt-2 text-4xl text-white animate-spin" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;