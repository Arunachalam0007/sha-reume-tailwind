import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

var containerVarient = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-10 ">
      {/* heading */}
      <h1 className="text-3xl lg:text-4xl text-center font-bold mb-12">
        Skills
      </h1>

      {/* skils list */}
      <div
      //   className="max-w-screen-lg mx-auto "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVarient}
          viewport={{ once: true }}
          className="flex flex-col rounded-xl border border-stone-50/30 px-10 md:px-20 py-10 placeholder-neutral-100"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              variants={itemVarients}
              key={index}
              className={`flex items-center justify-between ${
                index !== SKILLS.length - 1 && "border-b border-b-stone-50/30"
              } py-4`}
            >
              <div className="flex items-center">
                <div>{skill.icon}</div>
                <p className="px-6 text-lg lg:text-2xl">{skill.name}</p>
              </div>
              <p className="text-md lg:text-xl font-semibold">
                {skill.experience}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
