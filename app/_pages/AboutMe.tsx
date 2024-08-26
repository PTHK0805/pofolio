"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="w-full p-8 my-12 overflow-hidden">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl font-extrabold text-sky-900 dark:text-sky-300 mb-6 text-center"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-justify"
      >
        I am a passionate full-stack developer with expertise in building scalable web applications using JavaScript and
        TypeScript frameworks such as React, Next.js, Angular, and Node.js. Additionally, I have experience with Spring
        MVC, Hibernate, and Cloudinary, focusing on delivering efficient solutions that meet modern standards.
      </motion.p>
    </section>
  );
}

export default AboutMe;
