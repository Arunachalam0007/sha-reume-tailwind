import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export default function EductionSection() {
  return (
    <section id="education" className="mt-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl lg:text-4xl text-center font-bold mb-10"
      >
        Eductation
      </motion.h1>

      {/* Education Qualification */}
      <div>
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
            className="p-10 mb-20"
          >
            <h1 className="text-xl lg:text-2xl font-bold">{edu.degree}</h1>
            <h2 className="text-lg lg:text-xl ">{edu.institution}</h2>
            <p className="text-sm lg:text-lg text-stone-300 font-light">
              {edu.duration}
            </p>
            <p className="text-md mt-2 ">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
