import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {cn} from "@/utils/tailWindMerge";

interface ContactInformationProps {
  className?: string;
}

const ContactInformation = ({className} : ContactInformationProps) => {
  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "#E0E0E0" : "#2D2D2D";
  const bgColor = theme === "dark" ? "#2D2D2D" : "#E0E0E0";
  const hoverBgColor = theme === "dark" ? "#E0E0E0" : "#2D2D2D";
  const hoverIconColor = theme === "dark" ? "#E0E0E0" : "#2D2D2D";

  return (
    <div className={cn("flex flex-row gap-6", className as string)}>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: hoverIconColor,
          transition: { type: "spring", stiffness: 300 },
        }}
        href="https://www.linkedin.com/in/phyo-thiha-kyaw-849453177/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full p-3"
        style={{ backgroundColor: bgColor }}
      >
        <FaLinkedin className="text-3xl" style={{ color: iconColor }} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        href="mailto:ptkyaw505@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full p-3"
        style={{ backgroundColor: bgColor }}
      >
        <SiGmail className="text-3xl" style={{ color: iconColor }} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        href="https://github.com/PTHK0805"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full p-3"
        style={{ backgroundColor: bgColor }}
      >
        <FaGithub className="text-3xl" style={{ color: iconColor }} />
      </motion.a>
    </div>
  );
};

export default ContactInformation;
