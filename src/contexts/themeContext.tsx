import React, { createContext } from "react";


interface ThemeContextType {
    theme : string | null,
    setTheme : React.Dispatch<React.SetStateAction<string | null>>

}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {}
})
