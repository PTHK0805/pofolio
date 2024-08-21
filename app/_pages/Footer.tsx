import { FC } from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer: FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Phyo Thiha Kyaw</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/PTHK0805" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
            <FaGithub className="w-6 h-6"/>
          </a>
          <a href="https://linkedin.com/in/phyo-thiha-kyaw-849453177" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
            <FaLinkedin className="w-6 h-6"/>
          </a>
          <a href="mailto:ptkyaw505@gmail.com" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
            <SiGmail className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
