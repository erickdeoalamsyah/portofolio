import React from 'react'
import { EXPERIENCES } from '../constants';
import {motion} from 'framer-motion'

export const Experience = () => {
  return (
    <div id='experience' className="py-20 pb-4 container mx-auto max-w-screen-xl px-6 md:px-10 lg:px-16">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-2xl lg:text-3xl text-center mb-12 border-b border-gray-500 py-2">
        EXPERIENCES
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className='w-full lg:w-1/4'>
                    <p className="mb-2 text-sm text-gray-400">
                        {experience.year}
                    </p>
                    </motion.div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h3 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='mb-2 font-semibold text-white'>
                        {experience.role} -{" "}
                        <span className="text-sm text-gray-500">
                            {experience.company}
                        </span>
                    </motion.h3>
                    <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className='text-justify mb-4 text-gray-300'>
                        {experience.description}
                    </motion.p>
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 2 }}>
                    {experience.technologies.map((tech, index)=>(
                        <span 
                        className="mr-2 mt-4 rounded bg-black px-2 py-1 text-sm
                        font-medium text-gray-300 border-2 border-gray-500
                        hover:shadow-lg hover:shadow-blue-600 hover:border-blue-700"key={index}>
                            {tech}
                        </span>
                        
                    ))}
                    </motion.div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience;
