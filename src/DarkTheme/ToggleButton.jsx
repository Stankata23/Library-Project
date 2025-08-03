import { useTheme } from './ThemeProvider';
import { Button } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import './ToggleButton.css'

export function ThemeToggleButton() {
  const { appearance, toggleTheme } = useTheme();

  return (
    <div className='theme-toggle-fixed'>
    <Button onClick={toggleTheme} variant="soft">
      {appearance === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
    </div>
  );
}