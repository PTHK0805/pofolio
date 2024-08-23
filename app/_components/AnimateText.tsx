import { useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import RedoAnimateText from "@/app/_components/RedoAnimateText";
import CursorBlinker from "@/app/_components/CursorBlinker";

export interface IAnimTextProps {
  texts: string[];
  delay: number;
  className?: string;
}

const AnimateText = ({ texts, delay, className}: IAnimTextProps) => {
  const baseText = "Dear Hiring Manager, ";
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span>
      <RedoAnimateText delay={delay + 1}  texts={texts} className={className}/>
      <CursorBlinker className={"bg-gray-700 dark:bg-blue-400 h-7"}/>
    </span>
  );
}

export default AnimateText;
