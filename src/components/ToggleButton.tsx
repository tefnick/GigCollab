'use client';

import { useState } from "react";
import moonIcon from '@/assets/moon-2-50.png';
import sunIcon from '@/assets/sun-2-50.png';
import Image from "next/image";
import { useTheme } from "next-themes";

export default function ToggleButtton() {
    const {theme, setTheme} = useTheme();

    function handleToggleClick() {
        setTheme(theme === 'dark'? 'light' : 'dark')
    }

    console.log(`current theme is: ${theme}`)

    return (
        <button 
            className="flex flex-row px-4"
            onClick={handleToggleClick}
        >
            {theme === 'dark'? 
                <Image className="rounded-lg" src={moonIcon} height={40} width={40} alt="dark mode icon"/> :
                <Image className="rounded-lg" src={sunIcon} height={40} width={40} alt="light mode icon"/>
            }
        </button>
    )
}