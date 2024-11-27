import React from "react";
import logo from "../assets/arun-logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-center ">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt=""
          width="200"
          className="my-20"
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        {SOCIAL_MEDIA_LINKS.map((media, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={media.href}
          >
            {media.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
