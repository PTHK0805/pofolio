'use client'
import { useTheme } from "next-themes"
import { SpeedDial, SpeedDialAction } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CloseIcon from '@mui/icons-material/Close'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function UtilityActions() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const darkMode = theme === "dark";

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <SpeedDial
            ariaLabel="Utility Actions"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            icon={
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={open ? 'close' : 'menu'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </motion.div>
                </AnimatePresence>
            }
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
