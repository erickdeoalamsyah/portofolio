import React from "react";
import profile from "../assets/profile-eric.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const Hero = () => {
  return (
    <div className="px-2 mb-20 lg:py-[4rem] lg:mb-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center  ">
            <motion.img
              src={profile}
              alt="Eric Deo"
              className="
      border border-blue-200 rounded-3xl 
      hover:shadow-lg hover:shadow-blue-600
      hover:border-blue-700
      w-full h-auto 
      sm:w-[20rem] sm:h-[25rem] 
      md:w-[20rem] md:h-[25rem] 
      lg:w-[25rem] lg:h-[30rem]
      "
              
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-7"
          >
            <motion.h2
              variants={childVariants}
              className="text-white pb-2 text-3xl lg:text-4xl"
            >
              ERIC DEO ALAMSYAH
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="text-lg lg:text-xl text-white"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="text-justify text-gray-500 py-4 text-md lg:text-lg lg:text-left lg:text-justify leading-relaxed "
            >
              {HERO_CONTENT}
            </motion.p>
            {/* <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-md border-2 border-gray-500 p-3 lg:text-sm text-white hover:shadow-md hover:shadow-blue-600 hover:border-blue-600 "
            >
              Download CV
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
