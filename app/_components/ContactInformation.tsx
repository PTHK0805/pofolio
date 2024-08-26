import { FC } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/utils/utilFuns";
import {contactLinks} from "@/data/Information";

interface ContactInformationProps {
  className?: string;
}

const ContactInformation: FC<ContactInformationProps> = ({ className }) => {
  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "#E0E0E0" : "#2D2D2D";
  const bgColor = theme === "dark" ? "#2D2D2D" : "#E0E0E0";

  return (
    <div className={cn("flex flex-row gap-6", className as string)}>
      {contactLinks.map(({ icon: Icon, link }, index) => (
        <motion.a
          key={link}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", delay: index * 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{
            scale: 1.1,
            animationDelay: "0.2s",
            transition: { type: "spring", stiffness: 300},
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full p-3"
          style={{ backgroundColor: bgColor }}
        >
          <Icon className="text-3xl" style={{ color: iconColor }} />
        </motion.a>
      ))}
    </div>
  );
};

export default ContactInformation;
