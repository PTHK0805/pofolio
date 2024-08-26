'use client'
import {motion} from 'framer-motion'
import ProfileImage from "@/app/_components/ProfileImage";
import ContactInformation from "@/app/_components/ContactInformation";
import AnimateText from "@/app/_components/AnimateText";

const positions = [
  "Web Developer",
  "Software Developer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
]
export default function Hero() {
  return (
    <section
      className="min-h-auto md:min-h-[95vh] p-8 flex flex-col md:flex-row md:items-center mb-12"
    >
      <ProfileImage/>
      <div className="flex-1 md:ml-12">
        <motion.h1
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.3, duration: 0.8, ease: "easeOut"}}
          viewport={{once: false, amount: 0.5}}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-sky-300 leading-tight"
        >
          <span className="block text-lg font-light tracking-wide text-gray-700 dark:text-sky-200">
            Hi&#44; I&apos;m
          </span>
          Phyo Thiha Kyaw
        </motion.h1>

        <motion.h2
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.4, duration: 0.8, ease: "easeOut"}}
          viewport={{once: false, amount: 0.5}}
          className="text-3xl text-gray-700 dark:text-blue-400 mb-6"
        >
          <AnimateText delay={1} className={'text-gray-700 dark:text-blue-400 w-[3px] h-5'} texts={positions}/>
        </motion.h2>
        <ContactInformation className="mt-7 md:mt-5"/>
      </div>
    </section>
  )
}
