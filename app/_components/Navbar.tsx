'use client';
import React, {FC, useState, useEffect} from 'react';
import {motion, AnimatePresence, useScroll, useMotionValueEvent} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './Logo';
import ThemeToggle from "@/app/_components/ThemeToggle";
import {handleScroll} from "@/utils/utilFuns";
import Link from "next/link";

const Navbar: FC = () => {
  const {scrollY} = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 30 && latest > prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.getItem('theme') ? setTheme(localStorage.getItem('theme') as 'light' | 'dark') : setTheme('dark');
    setIsLoading(false);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
        scale: 0.95,
        width: '80%',
        left: '10%',
        right: '10%'
      }}
      animate={
        hidden
          ? {
            opacity: 0,
            y: -20,
            scale: 0.95
          }
          : {
            opacity: 1,
            y: 0,
            scale: 1,
          }
      }
      transition={{duration: 0.5, ease: 'easeOut'}}
      className={`fixed top-2.5 border rounded-lg drop-shadow-xl z-10 ${
        theme === 'light' ? 'border-gray-300 bg-transparent backdrop-blur-lg' : 'bg-gray-800 border-gray-700 bg-transparent backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo theme={theme}/>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              // href="#about"
              onClick={(e) => handleScroll('about', e, setIsOpen)}
              className={`cursor-pointer transition duration-300 ${
                theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              About
            </a>
            <a
              // href="#skills"
              onClick={(e) => handleScroll('skills', e, setIsOpen)}
              className={`cursor-pointer transition duration-300 ${
                theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Skills
            </a>
            <a
              // href="#projects"
              onClick={(e) => handleScroll('projects', e, setIsOpen)}
              className={`cursor-pointer transition duration-300 ${
                theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Projects
            </a>
            <a
              // href="#contact"
              onClick={(e) => handleScroll('contact', e, setIsOpen)}
              className={`cursor-pointer transition duration-300 ${
                theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
            <button onClick={handleMenuToggle} className="md:hidden ml-2 p-2 rounded-full focus:outline-none">
              {isOpen ? <CloseIcon className="text-gray-800 dark:text-gray-200"/> :
                <MenuIcon className="text-gray-800 dark:text-gray-200"/>}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0, y: 20}}
            animate={{opacity: 1, height: 'auto', y: 0}}
            transition={{duration: 0.3, ease: 'easeOut'}}
            exit={{opacity: 0, height: 0, y: 20}}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'skills', 'projects', 'contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: index * 0.1, duration: 0.3}}
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link
                    href={`#${item}`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer transition duration-300 ${
                      theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
                    }`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
                // <motion.a
                //   key={item}
                //   href={`#${item}`}
                //   onClick={(e) => {
                //     handleScroll(item, e, setIsOpen);
                //   }}
                //   className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ${
                //     theme === 'light' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'
                //   }`}
                //   initial={{ opacity: 0, y: 20 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   transition={{ delay: index * 0.1, duration: 0.3 }}
                // >
                //   {item.charAt(0).toUpperCase() + item.slice(1)}
                // </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;