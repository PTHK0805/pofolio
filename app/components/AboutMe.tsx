'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="text-center mb-12 bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Image
          src="/profile-pic.jpg"
          alt="Profile Picture"
          priority={true}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4 border-4 border-x-cyan-100 dark:border-gray-700"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-2 text-sky-900 dark:text-sky-300"
      >
        Phyo Thiha Kyaw
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: false }}
        className="text-2xl text-blue-600 mb-4 dark:text-blue-400"
      >
        Full-Stack Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: false }}
        className="text-lg mb-6 text-gray-700 dark:text-gray-300"
      >
        Welcome to my portfolio! I am a passionate full-stack developer with expertise in Spring MVC, Hibernate, and Cloudinary integrations. With a strong background in developing web applications, I specialize in creating efficient and scalable solutions using a wide range of technologies.
      </motion.p>
      <motion.a
        href="https://www.linkedin.com/in/phyo-thiha-kyaw-849453177/"
        className="bg-gradient-to-r from-sky-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-sky-700 hover:to-blue-600 transition duration-300 dark:from-sky-700 dark:to-blue-600 dark:hover:from-sky-800 dark:hover:to-blue-700"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: false }}
      >
        LinkedIn Profile
      </motion.a>
    </motion.section>
  )
}
