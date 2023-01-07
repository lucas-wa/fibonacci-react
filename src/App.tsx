import { Home } from "./pages/Home"
import {About} from "./pages/About"
import "./styles/global.scss"
import {Contexts} from "./contexts/Contexts"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts"
import { SignPage } from "./pages/SignPage"
import { LoginPage } from "./pages/LoginPage"
import { Dashboard } from "./pages/Dashboard"




function App() {


  useEffect(()=>console.log(document.querySelector(":root")),[])

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
        <Route path="/sign" element={<SignPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Contexts.Provider>
  )
}

export default App
