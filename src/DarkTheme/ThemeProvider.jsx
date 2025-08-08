import { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [appearance, setAppearance] = useState('dark'); // Default is dark
  const [mounted, setMounted] = useState(false); // For hydration control

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setAppearance(stored);
    } else {
      setAppearance('dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = appearance === 'dark' ? 'light' : 'dark';
    setAppearance(next);
    localStorage.setItem('theme', next);
  };

  if (!mounted) return null; // Prevent mismatches or flashing

  return (
    <ThemeContext.Provider value={{ appearance, toggleTheme }}>
      <Theme appearance={appearance}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};