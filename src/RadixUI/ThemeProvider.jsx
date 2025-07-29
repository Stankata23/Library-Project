import { useState, useEffect, createContext } from "react"
import { Theme } from "@radix-ui/themes"

export const ThemeContext = createContext()

export default function ThemeProvider({children}){

    const [theme, setTheme] = useState("light")

    useEffect(() =>  {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return(

    <ThemeContext.Provider value={{ theme, setTheme }}>
      
      {children}
      
      
    </ThemeContext.Provider>

   
    )
}