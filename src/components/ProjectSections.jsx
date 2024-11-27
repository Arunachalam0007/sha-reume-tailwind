import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function ProjectSections() {
  return (
    <section className="pt-20" id="projects">
      <div>
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-3xl lg:text-4xl text-center mb-10 font-bold"
        >
          Projects
        </motion.h1>

        {/* Projects grid      */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* project infos */}
              {/* Absolute inset-0 for inside the box postion */}
              {/* opacity-0 transition-opacit for show text while hovering  */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                <h1 className="text-xl font-bold mb-5">{project.name}</h1>
                <p className="text-center px-6 mb-12">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300"
                >
                  <div className="flex">
                    <span>View on GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
