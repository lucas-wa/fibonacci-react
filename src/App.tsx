import { Home } from "./pages/Home"
import {About} from "./pages/About"
import "./styles/global.scss"
import {ThemeContext} from "./contexts/themeContext"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts"




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
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
