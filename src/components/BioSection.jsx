import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <section id="bio" className="mt-20 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl lg:text-4xl text-center font-bold mb-10"
      >
        Bio
      </motion.p>
      <div>
        {BIO.map((bio, index) => (
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
            key={index}
            className=" text-lg lg:text-xl mb-10"
          >
            {bio}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
