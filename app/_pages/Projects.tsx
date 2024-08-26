'use client'
import { motion } from 'framer-motion'
import { projects } from '@/data/Information'

export default function Projects() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="mx-auto p-8 mb-12"
      >
          <h3 className="text-4xl font-semibold mb-6 text-sky-900 dark:text-sky-200">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md dark:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">{project.name}</h5>
                    <div className="flex space-x-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-semibold rounded-full"
                          >
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        {project.description}
                    </p>
                </motion.div>
              ))}
          </div>
      </motion.section>
    )
}
