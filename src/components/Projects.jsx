import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  const MAX_WORDS = 50; 

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return { truncated: words.slice(0, maxWords).join(" "), isTruncated: true };
    }
    return { truncated: text, isTruncated: false };
  };

  return (
    <div className="px-4 lg:px-0 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-2xl lg:text-3xl border-b border-gray-500 py-2"
      >
        PROJECTS
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          const [showMore, setShowMore] = useState(false);
          const { truncated, isTruncated } = truncateText(project.description, MAX_WORDS);

          return (
            <div
              key={index}
              className="mb-20 flex flex-wrap gap-10 lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md border-2 border-gray-500 shadow-2xl shadow-black w-full h-full object-cover transition-all duration-300 ease-in-out  opacity-100 group-hover:opacity-0"
                />

                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-blue-500 shadow-lg shadow-blue-500 object-cover opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out"
                />

                <div className="absolute bottom-2 left-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-950 text-sm text-white p-2 border-2 border-white hover:text-blue-600"
                  >
                    CODE
                  </a>
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-950 text-white p-2 border border-white text-sm hover:text-blue-600"
                  >
                    WEB
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: +100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 "
              >
                <motion.h3
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: +100 }}
                  transition={{ duration: 1.5 }}
                  className="mb-2 text-2xl"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: +100 }}
                  transition={{ duration: 2 }}
                  className="text-justify mb-2 text-gray-500"
                >
                  {showMore || !isTruncated
                    ? project.description
                    : `${truncated}...`}
                </motion.p>
                {isTruncated && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className=" text-sm text-white hover:underline mb-2"
                  >
                    {showMore ? "Show Less <" : "Show More >"}
                  </button>
                )}
                <div className="flex flex-wrap justify-start items-start">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: +100 }}
                      transition={{ duration: 2.5 }}
                      className="mr-2 mb-2 items-left border border-gray-500  p-2 text-sm text-gray-300
                    hover:shadow-md hover:shadow-blue-600 hover:border-blue-700"
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
      </div>
    </div>
  );
};

export default Projects;
