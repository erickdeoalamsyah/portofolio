import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaGitAlt, FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython, FaHtml5, FaLaravel, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { icon: <FaReact className="text-blue-500" />, name: "React.js", duration: 2.5 },
  { icon: <IoLogoJavascript className="text-yellow-500" />, name: "JavaScript", duration: 3 },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", duration: 5 },
  { icon: <RiTailwindCssFill className="text-blue-400" />, name: "Tailwind CSS", duration: 3 },
  { icon: <FaPython className="text-yellow-500" />, name: "Python", duration: 2.5 },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git", duration: 2.5 },
  { icon: <FaFlutter className="text-blue-600" />, name: "Flutter", duration: 2.5 },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", duration: 3 },
  { icon: <FaLaravel className="text-orange-900" />, name: "Laravel", duration: 5 },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", duration: 3 },
];

export const Technology = () => {
  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="pt-20 text-center text-2xl lg:text-3xl border-b border-gray-500 py-2"
      >
        TECHNOLOGIES
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className="pt-[10rem] flex flex-wrap items-center justify-center gap-8"
      >
        {technologies.map((tech, index) => (
          <motion.div
          key={index}
          initial="initial"
          animate="animate"
          variants={iconVariants(tech.duration)}
          className="relative flex flex-col items-center group"
        >
          <motion.div className="text-6xl lg:text-8xl hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
            {tech.icon}
          </motion.div>
        
          <span
            className="absolute top-[100%] mt-2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          >
            {tech.name}
          </span>
        </motion.div>
        
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
