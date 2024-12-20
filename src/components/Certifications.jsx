import React from 'react'
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
    return (
      <div className="pb-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="my-16 text-center text-2xl lg:text-3xl border-b border-gray-500 pb-4"
        >
          CERTIFICATIONS
        </motion.h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className=" border border-gray-500 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-600 transition-shadow duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-60 object-cover hover:border-2 hover:border-blue-600"
              />
              <div className="p-4 text-white">
                <h3 className="text-xl mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-1">
                  Issued by: {cert.issuer}
                </p>
                <p className="text-sm text-gray-400">Year: {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

export default Certifications;
