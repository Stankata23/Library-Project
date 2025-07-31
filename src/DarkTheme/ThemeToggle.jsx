import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"



export default function ThemeToggle(){

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('theme-light');
       
    } else {
      root.classList.remove('theme-light');
    }
  }, [darkMode]);

  return (
    <div>

    
    <button class="fixed-top-right" onClick={() => setDarkMode(prev => !prev)}>
     {darkMode ? <SunIcon />  :  <MoonIcon />}
    </button>
    </div>
  );
}


