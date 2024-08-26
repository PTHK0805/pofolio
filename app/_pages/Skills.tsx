'use client'
import {FC, useMemo} from 'react'
import {Tooltip} from "@mui/material"
import {motion} from 'framer-motion'
import {skills} from '@/data/Information'

const Skills: FC = () => {
  const skillsMemo = useMemo(() => [...skills, ...skills], []);

  return (
    <section
      className="p-10 mb-14"
    >
      <h3 className="text-4xl font-semibold mb-6 text-sky-900 dark:text-sky-200">Skills</h3>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] pointer-events-none">
          <div
            className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 "></div>
          <div
            className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-900"></div>
        </div>
        <motion.div
          className="flex gap-8"
          animate={{x: "-50%"}}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{animation: "none"}}
          style={{width: `${skillsMemo.length * 12}rem`}}
        >
          {skillsMemo.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{width: "12rem", paddingTop: "0.5rem", paddingBottom: "0.5rem"}}
            >
              <Tooltip title={skill.name} placement="top">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain transform transition-transform duration-300 hover:scale-110"
                />
              </Tooltip>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
