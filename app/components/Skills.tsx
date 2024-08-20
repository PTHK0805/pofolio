'use client'

import { FC, useMemo } from 'react'
import { Tooltip } from "@mui/material"
import { motion } from 'framer-motion'

const skills = [
    { name: "Angular", icon: "./skills/angular.png" },
    { name: "Bootstrap", icon: "./skills/bootstrap.png" },
    { name: "Cascading Style Sheets (CSS)", icon: "./skills/css.png" },
    { name: "Git", icon: "./skills/git.png" },
    { name: "GitHub", icon: "./skills/github.png" },
    { name: "GitLab", icon: "./skills/gitlab.png" },
    { name: "HTML", icon: "./skills/html.png" },
    { name: "Tailwind", icon: "./skills/tailwind.png" },
    { name: "Java", icon: "./skills/java.png" },
    { name: "Spring Boot", icon: "./skills/springboot.png" },
    { name: "MongoDB", icon: "./skills/mongo-db.png" },
    { name: "Strapi", icon: "./skills/strapi.png" },
    { name: "Node.js", icon: "./skills/nodejs.png" },
    { name: "Javascript", icon: "./skills/javascript.png" },
    { name: "Typescript", icon: "./skills/typescript.png" },
    { name: "MySql", icon: "./skills/mysql.png" },
    { name: "PostgreSQL", icon: "./skills/postgres.png" },
    { name: "React.js", icon: "./skills/react.png" },
    { name: "Next.js", icon: "./skills/nextjs.png" },
    { name: "Python", icon: "./skills/python.png" },
    { name: "Salesforce", icon: "./skills/salesforce.png" },
]

const Skills: FC = () => {
    const skillsMemo = useMemo(() => skills, []);

    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="bg-white rounded-xl shadow-xl p-10 mb-14 dark:bg-gray-800 dark:text-white"
      >
          <h3 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skillsMemo.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                    <Tooltip title={skill.name} placement="top">
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-14 h-14 object-contain transform transition-transform duration-300 hover:scale-110 will-change-transform"
                        />
                    </Tooltip>
                </motion.div>
              ))}
          </div>
      </motion.section>
    )
}

export default Skills
