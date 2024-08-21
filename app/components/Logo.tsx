import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  theme: 'light' | 'dark';
}

const Logo: FC<LogoProps> = ({ theme }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [theme]);

  const fill = {
    circle: theme === 'light' ? '#262121' : '#e5e7eb',
    text: theme === 'light' ? '#e5e7eb' : '#262121',
  }

  const svgVariants = {
    hover: { scale: 1.05 }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    },
    hover: {
      fill: "#ff6b6b",
      transition: { duration: 0.3 }
    }
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      fill: "#4ecdc4",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.svg
      key={animationKey}
      width="40"
      height="40"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      whileHover="hover"
    >
      <motion.circle
        cx="68"
        cy="68"
        r="68"
        fill={fill.circle}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M25 104.001V31H48.8662C54.0753 31 58.3909 32.0337 61.8128 34.1011C65.2347 36.1685 67.7957 38.9964 69.4957 42.5846C71.1958 46.1491 72.0458 50.1651 72.0458 54.6327C72.0458 59.1239 71.1849 63.1637 69.463 66.752C67.763 70.3165 65.1911 73.1443 61.7474 75.2355C58.3255 77.3029 54.0208 78.3366 48.8335 78.3366H35.1023V68.9976H47.9181C51.2092 68.9976 53.8792 68.3798 55.928 67.1441C57.9768 65.8846 59.4806 64.1736 60.4397 62.0112C61.3987 59.8487 61.8782 57.3892 61.8782 54.6327C61.8782 51.8761 61.3987 49.4285 60.4397 47.2898C59.4806 45.1511 57.9659 43.4758 55.8953 42.2638C53.8465 41.0519 51.1438 40.4459 47.7873 40.4459H35.1023V73.116V104.001H25Z"
        fill={fill.text}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={fill.text}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M63.6688 104.001V31.1317H73.0911V68.428H73.8534L100.657 31.1317H112L86.7214 66.5662L112 104.001H100.657L80.4703 73.5811L73.0911 82.8235V104.001H63.6688Z"
        fill={fill.text}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={fill.text}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M41.9478 40.4816V31.0001H93.7668V40.4816H72.8757V104.001H62.8062V40.4816H41.9478Z"
        fill={fill.text}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={fill.text}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default Logo;