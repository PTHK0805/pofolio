'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material'

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
            className="bg-gradient-to-r from-gray-50 to-gray-200 mx-auto px-4 py-8 dark:bg-gray-800 transition-colors duration-300 rounded-lg shadow-lg mb-12 bg-dots"
        >
            <h3 className="text-2xl font-semibold mb-6 text-sky-900 dark:text-sky-200">Projects</h3>
            <Grid container direction={"row"} spacing={4} alignItems={"stretch"}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            viewport={{ once: false }}
                        >
                            <Card
                                className="bg-gradient-to-b from-sky-100 to-cyan-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                                elevation={3}
                            >
                                <CardHeader
                                    title={<Typography variant="h6" component="div">{project.name}</Typography>}
                                    subheader={<Typography variant="body2" className="text-sky-700 dark:text-sky-400">{project.tech}</Typography>}
                                />
                                <CardContent>
                                    <Typography variant="body2" className="text-gray-700 dark:text-gray-300">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </motion.section>
    )
}
