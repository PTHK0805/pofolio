import {motion} from "framer-motion";
import {cn} from "@/utils/tailWindMerge";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

interface CursorProps {
  className?: string;
}

const CursorBlinker = ({className}: CursorProps) => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={cn('inline-block w-[3px] h-5 translate-y-1 bg-gray-700 dark:bg-blue-400', className as string)}
    />
  );
}

export default CursorBlinker;
