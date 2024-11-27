import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function WorkExperienceSection() {
  return (
    <section id="work" className="mt-20">
      {/* heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl lg:text-4xl text-center font-bold"
      >
        Work Experience
      </motion.h1>

      {/* Experience List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=""
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            key={index}
            className="rounded-lg border bg-white/10 border-stone-50/30 m-10 px-5 py-5 bg-gradient-to-tr from"
          >
            <h1 className="text-xl lg:text-2xl font-bold">
              {experience.title}
            </h1>
            <h2 className="text-lg lg:text-xl ">{experience.company}</h2>
            <h6 className="text-sm font-light ">{experience.duration}</h6>
            <p className="text-base pt-4 ">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
