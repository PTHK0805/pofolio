'use client'
import { useTheme } from "next-themes"
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import React, { useEffect, useState } from 'react'

function UtilityActions() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    console.log('Theme : ', theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const darkMode = theme === "dark";

    return (
        <SpeedDial
            ariaLabel="Utility Actions"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                icon={darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                className="
      bg-white dark:bg-gray-800
      text-gray-600 dark:text-gray-300
      hover:bg-blue-100 dark:hover:bg-yellow-600
      hover:text-blue-500 dark:hover:text-yellow-400
      transition-colors duration-300"
                tooltipTitle={darkMode ? "Light Mode" : "Dark Mode"}
                onClick={() => setTheme(darkMode ? "light" : "dark")}
            />
        </SpeedDial>
    )
}

export default UtilityActions
