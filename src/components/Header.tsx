import "../styles/home.scss";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.png";

import { Menu } from "../components/Menu";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Contexts } from "../contexts/Contexts";

export function Header (){

    const {theme, setTheme} = useContext(Contexts)

    function handleTheme(){
        const Root = document.querySelector("#root");
        
    
    
        if(theme == `light`){
          Root?.classList.add(`darkmode`);
          setTheme(`dark`); 
          localStorage.setItem(`theme`, `dark`);
          
    
        }else{
          Root?.classList.remove(`darkmode`);
          setTheme(`light`);
          localStorage.setItem(`theme`, `light`);
        } 
    
    
        
      }

    return (
        <header>
        <div className="line">
          {/* <Link to={"#"}> */}
          <figure>
            <img src={logo} alt="Fibonacci" />
            <figcaption hidden>Logo Fibonacci</figcaption>
          </figure>
          {/* </Link> */}
          <div className="right">
            <Menu handleTheme={handleTheme}/>
          </div>
        </div>
        <div className="introduction">
          <span className="introductionText">
            <h2>Quem somos?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, at nisi quos eum repudiandae minus aliquam suscipit
              culpa ipsam in animi! Voluptas accusamus repudiandae, odit id
              molestiae neque eius corrupti.
            </p>
            <button>Cadastrar</button>
          </span>

          <img src={illustration} alt="illustration" />
        </div>
      </header>
    )
}