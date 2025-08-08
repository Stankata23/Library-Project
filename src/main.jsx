import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import BookManager from './assets/Components/BookManager/BookManager';

import { ThemeProvider } from './DarkTheme/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <ThemeProvider>
        <App/>
      </ThemeProvider>
    </StrictMode>
)

  
