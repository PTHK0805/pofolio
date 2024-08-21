'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col md:flex-row items-center md:items-start mb-12 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-10"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="mb-8 md:mb-0 md:mr-10"
      >
        <Image
          src="/profile-pic.jpg"
          alt="Profile Picture"
          priority={true}
          width={180}
          height={180}
          className="rounded-full border-2 border-gray-300 dark:border-gray-600"
        />
      </motion.div>
      <div className="flex-1">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl font-semibold mb-4 text-gray-900 dark:text-sky-300"
        >
          Phyo Thiha Kyaw
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl text-gray-700 dark:text-blue-400 mb-6"
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
        >
          I am a passionate full-stack developer with expertise in building scalable web applications using Spring MVC, Hibernate, and Cloudinary. I focus on delivering efficient solutions that meet modern standards.
        </motion.p>
        <motion.a
          href="https://www.linkedin.com/in/phyo-thiha-kyaw-849453177/"
          className="inline-block bg-gradient-to-r from-sky-600 to-blue-500 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-sky-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 dark:from-sky-700 dark:to-blue-600 dark:hover:from-sky-800 dark:hover:to-blue-700"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          LinkedIn Profile
        </motion.a>
      </div>
    </motion.section>
  )
}
