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
export const Technology = () => {
  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="pt-20 text-center text-2xl lg:text-3xl  border-b border-gray-500 py-2"
      >
        TECHNOLOGIES
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className="pt-[10rem] flex flex-wrap items-center justify-center gap-5 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaReact className="text-6xl lg:text-8xl text-blue-500 hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <IoLogoJavascript className="text-6xl lg:text-8xl text-yellow-500 hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <FaCss3Alt className="text-6xl lg:text-8xl text-blue-500 hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <RiTailwindCssFill className="text-6xl lg:text-8xl text-blue-400 hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaPython className="text-6xl lg:text-8xl text-yellow-500 hover:scale-150 transition-all duration-300 ease-in-out " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaGitAlt className="text-6xl lg:text-8xl text-orange-600 hover:scale-150 transition-all duration-300 ease-in-out " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaFlutter className="text-6xl lg:text-8xl text-blue-600 hover:scale-150 transition-all duration-300 ease-in-out " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaHtml5 className="text-6xl lg:text-8xl text-orange-500 hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <FaLaravel className="text-6xl lg:text-8xl text-orange-900 hover:scale-150 transition-all duration-300 ease-in-out " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaNodeJs className="text-6xl lg:text-8xl text-green-500 hover:scale-150 transition-all duration-300 ease-in-out " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
