'use client'

import { motion } from 'framer-motion'

const projects = [
    {
        name: "File Management System",
        tech: "Angular, Strapi",
        description: "A comprehensive file management solution built with Angular frontend and Strapi backend. Features include secure file upload/download, user authentication, role-based access control, and real-time file sharing capabilities."
    },
    {
        name: "Exam System",
        tech: "Angular, Strapi",
        description: "An online examination platform developed using Angular and Strapi. The system supports creating various question types, automated grading, timed exams, and detailed result analytics for both students and instructors."
    },
    {
        name: "Task Management System",
        tech: "React, Node.js",
        description: "A robust task management application built with React frontend and Node.js backend. It offers features like task creation, assignment, priority setting, deadline tracking, and team collaboration tools to enhance productivity."
    },
    {
        name: "Evaluation Comment System",
        tech: "React, Python (Django)",
        description: "An evaluation and commenting system using React for the frontend and Django for the backend. It allows for detailed time study analysis, performance evaluations, and collaborative commenting on work processes."
    },
    {
        name: "Task Management System (Salesforce)",
        tech: "Salesforce",
        description: "A Salesforce-based task management solution leveraging the platform's powerful features. It includes custom objects for tasks, automated workflows, reports and dashboards for task tracking, and integration with Salesforce's native collaboration tools."
    },
    {
        name: "HH/HE System",
        tech: "Salesforce",
        description: "A specialized Salesforce application for managing HH (Hearing Health) and HE (Human Error) data. It provides custom data models, automated processes for record management, and tailored reports for insights into household and educational metrics."
    },
    {
        name: "Health Check System",
        tech: "Java, Spring Boot",
        description: "A comprehensive health check system designed to monitor the health of patients, employees, and facilities. It incorporates features like automated health checks, real-time reporting, and integration with external healthcare providers."
    }
]

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
            <h3 className="text-2xl font-semibold mb-6 text-sky-900">Projects</h3>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: false }}
                        className="border-b border-gray-200 pb-6 last:border-b-0"
                    >
                        <h4 className="text-xl font-semibold mb-2 text-blue-600">{project.name}</h4>
                        <p className="text-sm text-sky-900 mb-2">Technologies: {project.tech}</p>
                        <p className="text-gray-700">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
