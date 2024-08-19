'use client'
import { Tooltip } from "@mui/material"
import { motion } from 'framer-motion'

const skills = [
    { name: "Angular", icon: "./angular.png" },
    { name: "Bootstrap", icon: "./bootstrap.png" },
    { name: "Cascading Style Sheets (CSS)", icon: "./css.png" },
    { name: "Git", icon: "./git.png" },
    { name: "GitHub", icon: "./github.png" },
    { name: "GitLab", icon: "./gitlab.png" },
    { name: "HTML", icon: "./html.png" },
    { name: "Tailwind", icon: "./tailwind.png" },
    { name: "Java", icon: "./java.png" },
    { name: "Spring Boot", icon: "./springboot.png" },
    { name: "MongoDB", icon: "./mongo-db.png" },
    { name: "Strapi", icon: "./strapi.png" },
    { name: "Node.js", icon: "./nodejs.png" },
    { name: "Javascript", icon: "./javascript.png" },
    { name: "Typescript", icon: "./typescript.png" },
    { name: "MySql", icon: "./mysql.png" },
    { name: "PostgreSQL", icon: "./postgres.png" },
    { name: "React.js", icon: "./react.png" },
    { name: "Next.js", icon: "./nextjs.png" },
    { name: "Python", icon: "./python.png" },
    { name: "Salesforce", icon: "./salesforce.png" },
]

export default function Skills() {
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
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                        viewport={{ once: false }}
                    >
                        <Tooltip title={skill.name} placement="top">
                            <motion.img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-14 h-14 object-contain transform transition-transform duration-300 hover:scale-110"
                            />
                        </Tooltip>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
