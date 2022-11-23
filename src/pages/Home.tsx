import "../styles/home.scss";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.png";

import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import {api} from "../lib/api"


export function Home() {

  const [user, setUser] = useState({});

  let testMain = [];
  const {theme, setTheme} = useContext(ThemeContext)

  for (let i = 0; i < 2; i++) {
    testMain.push(i)
  }

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
    <>
        <input checked = {
          !(theme == `light`)
        } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />

      <div id="home-page">
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

        <main>
          {
            testMain.map(
              element => (
                <section key={element}>
                  <h2>A ideia</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur commodi porro ut. Nihil necessitatibus aliquid fugiat cupiditate illo cum praesentium corrupti, quibusdam alias quae consectetur, vero ea iusto mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    atque laboriosam rerum eaque accusantium ad libero nostrum voluptate
                    aperiam impedit deleniti, asperiores sit perferendis earum iure.
                    Repellat nulla totam illum?
                  </p>
                </section>
              )
            )
          }

        </main>

        <Footer />


      </div>
    </>

  );
}