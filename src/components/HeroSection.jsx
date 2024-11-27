import { MdCloudDownload } from "react-icons/md";
import { BsCloudDownload } from "react-icons/bs";
import React from "react";
import { HERO } from "../constants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      {/* Hero info     */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className=" my-8 py-2  p-2 text-4xl font-bold md:text-5xl lg:text-7xl">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl lg:text-3xl">{HERO.greet}</p>
        <p className="p-2 mb-8 text-lg tracking-wide">{HERO.description}</p>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          target="_blank"
          href={HERO.resumeLink}
          className=" rounded-2xl inline-block bg-gradient-to-tr from-blue-800 to-pink-600 p-3 lg:p-4 "
        >
          <div className="flex gap-3 items-center justify-center ">
            <p className="font-bold">Download Resume</p>
            {/* <MdCloudDownload /> */}
            <BsCloudDownload size={25} />
          </div>
        </motion.a>
      </motion.div>

      {/* Hero Image    */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full md:w-1/2 "
      >
        <div className="flex lg:justify-center ">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={HERO.image}
            alt=""
            height={30}
            width={500}
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
