'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition"
    >
      <h3 className="text-2xl font-semibold mb-4 text-sky-900 dark:text-sky-200">Contact</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through my LinkedIn profile or via email.
      </p>
      <motion.a
        href="mailto:ptkyaw@gmail.com"
        className="bg-gradient-to-r from-sky-600 to-blue-500 dark:from-blue-700 dark:to-sky-500 text-white px-6 py-2 rounded-full hover:from-sky-700 hover:to-blue-600 dark:hover:from-sky-600 dark:hover:to-blue-500 transition duration-300 inline-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: false }}
      >
        Contact Me
      </motion.a>
    </motion.section>
  )
}
