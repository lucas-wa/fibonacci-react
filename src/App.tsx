import { Home } from "./pages/Home"
import {About} from "./pages/About"
import "./styles/global.scss"
import {Contexts} from "./contexts/Contexts"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts"




function App() {


  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
    ?
    localStorage.getItem("theme")
    :
    "light"
  );

  const [user, setUser] = useState({});

  
    
  if(theme == `dark`) document.querySelector("#root")?.classList.add(`darkmode`)


  return (
   <Contexts.Provider value={{theme, setTheme, user, setUser}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </Contexts.Provider>
  )
}

export default App
