import "../styles/home.scss";

import { Footer } from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import {api} from "../lib/api"
import { Header } from "../components/Header";
import {AboutMain} from "../components/AboutMain"


export function About() {

  const [user, setUser] = useState({});

  let testMain = [];
  const {theme, setTheme} = useContext(ThemeContext)

  for (let i = 0; i < 2; i++) {
    testMain.push(i)
  }




  return (
    <>
        <input checked = {
          !(theme == `light`)
        } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />

      <div id="home-page">
 
        <Header/>

        <AboutMain/>

        <Footer />


      </div>
    </>

  );
}