import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

export const contactLinks = [
  {name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/phyo-thiha-kyaw-849453177/"},
  {name: "Github", icon: FaGithub, link: "https://github.com/PTHK0805"},
  {name: "Gmail", icon: SiGmail, link: "mailto:ptkyaw505@gmail.com"},
  {name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100008839742201&mibextid=ZbWKwL"}
];

export const skills = [
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
  { name: "PostgresSQL", icon: "./skills/postgres.png" },
  { name: "React.js", icon: "./skills/react.png" },
  { name: "Next.js", icon: "./skills/nextjs.png" },
  { name: "Python", icon: "./skills/python.png" },
  { name: "Salesforce", icon: "./skills/salesforce.png" },
]

export const projects = [
  {
    name: "File Management System",
    tech: ["Angular", "Strapi"],
    description: "A comprehensive file management solution built with Angular frontend and Strapi backend. Features include secure file upload/download, user authentication, role-based access control, and real-time file sharing capabilities."
  },
  {
    name: "Exam System",
    tech: ["Angular", "Strapi"],
    description: "An online examination platform developed using Angular and Strapi. The system supports creating various question types, automated grading, timed exams, and detailed result analytics for both students and instructors."
  },
  {
    name: "Task Management System",
    tech: ["React", "Node.js"],
    description: "A robust task management application built with React frontend and Node.js backend. It offers features like task creation, assignment, priority setting, deadline tracking, and team collaboration tools to enhance productivity."
  },
  {
    name: "Evaluation Comment System",
    tech: ["React", "Python (Django)"],
    description: "An evaluation and commenting system using React for the frontend and Django for the backend. It allows for detailed time study analysis, performance evaluations, and collaborative commenting on work processes."
  },
  {
    name: "Task Management System (Salesforce)",
    tech: ["Salesforce"],
    description: "A Salesforce-based task management solution leveraging the platform's powerful features. It includes custom objects for tasks, automated workflows, reports and dashboards for task tracking, and integration with Salesforce's native collaboration tools."
  },
  {
    name: "HH/HE System",
    tech: ["Salesforce"],
    description: "A specialized Salesforce application for managing HH (Hearing Health) and HE (Human Error) data. It provides custom data models, automated processes for record management, and tailored reports for insights into household and educational metrics."
  },
  {
    name: "Health Check System",
    tech: ["Java", "Spring Boot"],
    description: "A comprehensive health check system designed to monitor the health of patients, employees, and facilities. It incorporates features like automated health checks, real-time reporting, and integration with external healthcare providers."
  }
]