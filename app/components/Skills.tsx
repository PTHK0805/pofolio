'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "MongoDB", level: 80 },
  { name: "Front-End Development", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "SQL", level: 70 },
  { name: "Git", level: 80 },
  { name: "Angular", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "HTML5", level: 90 },
  { name: "HTML", level: 90 },
  { name: "Cascading Style Sheets (CSS)", level: 80 },
  { name: "React.js", level: 75 },
  { name: "JavaScript", level: 85 },
  { name: "Python (Programming Language)", level: 70 },
  { name: "Salesforce", level: 65 },
  { name: "Strapi", level: 70 },
]

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-white rounded-lg shadow-lg p-8 mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6 text-purple-800">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: false }}
            className="mb-2"
          >
            <div className="flex justify-between mb-1">
              <span className="text-sky-900 font-medium">{skill.name}</span>
              <span className="text-sky-900 font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
