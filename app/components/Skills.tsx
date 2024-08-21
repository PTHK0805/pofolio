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
    const skillsMemo = useMemo(() => [...skills, ...skills], []);

    return (
      <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="bg-white rounded-xl shadow-xl p-10 mb-14 dark:bg-gray-800 dark:text-white"
      >
          <h3 className="text-3xl font-semibold mb-6 text-sky-900 dark:text-sky-200">Skills</h3>
          <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-800"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-800"></div>
              </div>
              <motion.div
                className="flex gap-8"
                animate={{ x: "-50%" }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
                style={{ width: `${skillsMemo.length * 12}rem` }}
              >
                  {skillsMemo.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center"
                      style={{ width: "12rem" }}
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
              </motion.div>
          </div>
      </motion.section>
    )
}

export default Skills