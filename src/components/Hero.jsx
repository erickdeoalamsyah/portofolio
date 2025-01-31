import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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

export default function PortfolioHero() {
  return (
    <div className="md:pt-[10rem] flex items-center">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-10 lg:px-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-5">
        
        {/* Left Section */}
        <motion.div 
          className="space-y-12"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center lg:text-left space-y-6"> 
            <h1 className="text-3xl lg:text-5xl text-white space-y-4"> 
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Hello <span className="text-4xl">👋</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="font-semibold">I'm Eric Deo Alamsyah</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                As{" "}
                <span className="bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
                  <Typewriter
                    words={["FrontEnd Developer", "Mobile Developer"]}
                    loop={true} 
                    cursor
                    cursorStyle="_"
                    typeSpeed={100} 
                    deleteSpeed={50} 
                  />
                </span>
              </motion.div>
            </h1>
          </div>

          {/* Buttons */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
          >
            <a href="#project" className="inline-flex items-center text-sm px-6 py-2 bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent font-medium rounded-lg shadow-md border border-indigo-400 hover:text-white hover:border-blue-600 transition-all duration-300 ">
              MY PROJECTS
            </a>
            <a href="#contact" className="inline-flex items-center text-sm px-6 py-2 bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent font-medium rounded-lg shadow-md border border-indigo-400 hover:text-white hover:border-blue-600 transition-all duration-300">
              GET IN TOUCH
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section - Code Block */}
        <motion.div 
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: +100 }}
        transition={{ duration: 2.5 }}
        >
          <motion.div className="bg-black bg-opacity-70 rounded-lg overflow-hidden border border-gray-800"
          initial="initial"
          animate="animate"
          variants={iconVariants}>
            {/* Window Controls */}
            <div className="flex gap-1 items-center px-4 py-2 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Code Content */}
            <div className="p-4 font-mono text-sm text-white">
              <pre>
                <code>
                  <span className="text-pink-500">const</span> 
                  <span className="text-blue-400"> coder</span> 
                  <span className="text-white"> = </span> 
                  <span className="text-gray-400">{"{"}</span>
                  <br />
                  <span className="pl-4 text-purple-400">name:</span> 
                  <span className="text-yellow-300"> 'Eric Deo Alamsyah'</span>,
                  <br />
                  <span className="pl-4 text-purple-400">skills:</span> 
                  <span className="text-gray-400">[</span>
                  <span className="text-yellow-300">'React'</span>, 
                  <span className="text-yellow-300">'NextJS'</span>, 
                  <span className="text-yellow-300">'Laravel11'</span>, 
                  <br />
                  <span className="pl-8 text-yellow-300">'TailwindCSS'</span>, 
                  <span className="text-yellow-300">'API'</span>, 
                  <span className="text-yellow-300">'JavaScript'</span>, 
                  <span className="text-yellow-300">'Git'</span>
                  <span className="text-gray-400">]</span>,
                  <br />
                  <span className="pl-4 text-purple-400">hardWorker:</span> 
                  <span className="text-orange-500"> true</span>,
                  <br />
                  <span className="pl-4 text-purple-400">quickLearner:</span> 
                  <span className="text-orange-500"> true</span>,
                  <br />
                  <span className="pl-4 text-purple-400">problemSolver:</span> 
                  <span className="text-orange-500"> true</span>,
                  <br />
                  <span className="text-gray-400">{"};"}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
