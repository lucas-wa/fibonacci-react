import { Home } from "./pages/Home"
import "./styles/global.scss"
import {ThemeContext} from "./contexts/themeContext"
import { useState } from "react"




function App() {


  const [theme, setTheme] = useState(
    localStorage.getItem(`theme`) 
    ?
    localStorage.getItem(`theme`)
    :
    "light"
  );

  if(theme == `dark`) document.querySelector("#root")?.classList.add(`darkmode`)



  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Home/>
    </ThemeContext.Provider>
  )
}

export default App
