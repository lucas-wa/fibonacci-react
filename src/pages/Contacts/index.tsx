import "./style.scss"

import { Footer } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/Contexts";
import {api} from "../../lib/api"
import { Header } from "../../components/Header";
import {ContactsMain} from "../../components/ContactsMain"


export function Contacts() {

  const [user, setUser] = useState({});

  let testMain = [];
  const {theme, setTheme} = useContext(Contexts)

  for (let i = 0; i < 2; i++) {
    testMain.push(i)
  }


  useEffect(() => {
    const container:any = document.querySelector(".ContactsContainer")

    if (container?.clientHeight < window.screen.height) {
      container.style.height = "100vh"
    }

  }, [])

  return (
    <>
        <input checked = {
          !(theme == `light`)
        } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />

      <div className="ContactsContainer">
 
        <Header/>

        <ContactsMain/>

        <Footer />


      </div>
    </>

  );
}