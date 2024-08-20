import { FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {Tooltip} from "@mui/material";

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <Tooltip title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} placement="top">
    <div
      onClick={toggleTheme}
      className={`relative inline-block w-12 h-6 p-1 cursor-pointer rounded-full ${
        theme === 'light' ? 'bg-gray-300' : 'bg-blue-600'
      }`}
    >
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-transform flex items-center justify-center ${
          theme === 'light' ? 'transform translate-x-0' : 'transform translate-x-6'
        }`}
      >
        {theme === 'light' ? (
          <FaSun className="text-amber-600 text-sm" />
        ) : (
          <FaMoon className="text-yellow-400 text-sm" />
        )}
      </div>
    </div>
    </Tooltip>
  );
};

export default ThemeToggle;
