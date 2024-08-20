import { FC } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  theme: 'light' | 'dark';
}

const pathAnimation = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
  },
  hover: {
    pathLength: 1,
    fillOpacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    }
  }
};

const Logo: FC<LogoProps> = ({ theme }) => {
  const fillColor = theme === 'light' ? '#2D2D2D' : '#E0E0E0';
  const gradientId = theme === 'light' ? 'light-gradient' : 'dark-gradient';

  return (
    <motion.svg
      width="45"
      height="76"
      viewBox="0 0 99 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme === 'light' ? '#4A90E2' : '#1D3557'} />
          <stop offset="100%" stopColor={theme === 'light' ? '#D4E157' : '#457B9D'} />

        </linearGradient>
      </defs>
      <motion.path
        d="M0 75.6364V0H26.9602C32.8447 0 37.7197 1.07102 41.5852 3.21307C45.4508 5.35511 48.3437 8.28504 50.2642 12.0028C52.1847 15.696 53.1449 19.857 53.1449 24.4858C53.1449 29.1392 52.1723 33.3248 50.2273 37.0426C48.3068 40.7358 45.4015 43.6657 41.5114 45.8324C37.6458 47.9744 32.7831 49.0455 26.9233 49.0455H11.4119V39.3693H25.8892C29.607 39.3693 32.6231 38.7292 34.9375 37.4489C37.2519 36.1439 38.9508 34.3712 40.0341 32.1307C41.1174 29.8902 41.6591 27.3419 41.6591 24.4858C41.6591 21.6297 41.1174 19.0938 40.0341 16.8778C38.9508 14.6619 37.2396 12.9261 34.9006 11.6705C32.5862 10.4148 29.5331 9.78693 25.7415 9.78693H11.4119V43.6364V75.6364H0Z"
        fill={`url(#${gradientId})`}
        variants={pathAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover" // Apply hover animation
      />
      <motion.path
        d="M43.6818 75.6364V0.136414H54.3256V38.7792H55.1868L85.4649 0.136414H98.2788L69.723 36.8502L98.2788 75.6364H85.4649L62.6616 44.1183L54.3256 53.6943V75.6364H43.6818Z"
        fill={`url(#${gradientId})`}
        variants={pathAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      />
      <motion.path
        d="M19.1449 9.82393V6.10352e-05H77.6818V9.82393H54.0824V75.6364H42.7074V9.82393H19.1449Z"
        fill={fillColor}
        variants={pathAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      />
    </motion.svg>
  );
};

export default Logo;
