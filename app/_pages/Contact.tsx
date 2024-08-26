'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const contactLinks = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/phyo-thiha-kyaw-849453177/" },
  { icon: FaGithub, link: "https://github.com/PTHK0805" },
  { icon: SiGmail, link: "mailto:ptkyaw505@gmail.com" },
  { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100008839742201&mibextid=ZbWKwL" }
];

export default function Contact() {
  return (
    <section className="p-8 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800">
      <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-gray-50">Get in Touch</h3>
      <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I'm always eager to connect with like-minded professionals and explore new opportunities. Whether you want to discuss a potential project or just say hello, feel free to reach out through any of the platforms below.
      </p>
      <div className="flex justify-center space-x-8">
        {contactLinks.map(({ icon: Icon, link }, index) => (
          <motion.a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-4 bg-white dark:bg-gray-600 shadow-lg hover:shadow-xl"
            initial={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Icon className="text-4xl text-gray-900 dark:text-gray-50" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
