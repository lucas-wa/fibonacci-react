import "./style.scss"
import { Footer } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/Contexts";
import {api} from "../../lib/api"
import { Header } from "../../components/Header";
import {AboutMain} from "../../components/AboutMain"
import { useWindowSize } from "../../hooks/useWindowSize";


export function About() {


  // const [width, height] = useWindowSize();


  let testMain = [];
  const {theme, setTheme} = useContext(Contexts)

  for (let i = 0; i < 2; i++) {
    testMain.push(i)
  }


  useEffect(() => {
    const container:any = document.querySelector(".AboutContainer")

    if (container?.clientHeight < window.screen.height) {
      container.style.height = "100vh"
    }

  }, [])

  return (
    <>
        <input checked = {
          !(theme == `light`)
        } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />

      <div className="AboutContainer" >
 
        <Header/>

        <AboutMain/>

        <Footer />


      </div>
    </>

  );
}