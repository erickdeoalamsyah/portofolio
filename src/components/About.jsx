import React from "react";
import { FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile-eric.png";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const iconVariants = {
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="pt-[14rem] container mx-auto max-w-6xl flex items-center justify-center px-4 md:px-6 lg:px-8"
    >
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 ">
        <div className="relative w-56 sm:w-64 md:w-72 max-w-xl">
          <motion.img
            src={profile}
            alt="Profile"
            className="rounded-lg shadow-lg w-auto object-cover"
            initial="initial"
            animate="animate"
            variants={iconVariants}
          />
        </div>
        {/* Left Section */}
        <div className="max-w-xl space-y-6 text-white">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-10 text-center text-2xl lg:text-3xl border-b border-gray-500 py-2"
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-gray-300 leading-relaxed text-center ">
              {HERO_CONTENT}
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/eric-deo-alamsyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-2 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent font-medium shadow-md border border-indigo-400"
              >
                <FaLinkedin className="mr-2 text-xl text-blue-800" /> My
                LinkedIn →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
