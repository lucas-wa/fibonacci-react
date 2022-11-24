import React, { createContext } from "react";


interface ContextsType {
    theme : string | null,
    setTheme : React.Dispatch<React.SetStateAction<string | null>>,
    user : object | null,
    setUser : React.Dispatch<React.SetStateAction<object>>

}

export const Contexts = createContext<ContextsType>({
    theme: "light",
    setTheme: () => {},
    user: {},
    setUser: () => {}
})
