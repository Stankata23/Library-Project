
import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function ThemeToggleButton(){

  const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        
        <button onClick={toggleTheme}>
           
             Switch to {theme === "light" ? "Dark" : "Light"} Mode
             
        </button>
    )
}