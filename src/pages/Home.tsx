import "../styles/home.scss";

import { Footer } from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import {api} from "../lib/api"
import { Header } from "../components/Header";
import { HomeMain } from "../components/HomeMain";


export function Home() {

  const [user, setUser] = useState({});

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <>
        <input checked = {
          !(theme == `light`)
        } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />

      <div id="home-page">
 
        <Header/>

       <HomeMain/>

        <Footer />


      </div>
    </>

  );
}