"use client"
import { FC } from 'react';
import {contactLinks} from "@/data/Information";
import {handleScroll} from "@/utils/utilFuns";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-900 dark:text-gray-100 :bg-gray-100 text-gray-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Phyo Thiha Kyaw</h2>
          <p className="text-sm text-gray-400 dark:text-gray-600">&copy; {currentYear} | Crafted with passion.</p>
        </div>
        <div className="hidden md:flex justify-center md:justify-end space-x-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Explore</h4>
            <ul className="text-gray-400 dark:text-gray-600 text-sm space-y-1">
              <li><a onClick={(e) => handleScroll("about", e)} className="dark:hover:text-gray-100 hover:text-gray-900 transition cursor-pointer">About</a></li>
              <li><a onClick={(e) => handleScroll("skills", e)} className="dark:hover:text-gray-100 hover:text-gray-900 transition cursor-pointer">Skills</a></li>
              <li><a onClick={(e) => handleScroll("projects", e)} className="dark:hover:text-gray-100 hover:text-gray-900 transition cursor-pointer">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Social</h4>
            <ul className="text-gray-400 dark:text-gray-600 text-sm space-y-1">
              {
                contactLinks.map(({ name, link }) => (
                  <li key={link}>
                    <a href={link} target
                    ="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-100 hover:text-gray-900 transition cursor-pointer">
                      {name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;