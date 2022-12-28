import home from "../../assets/images/home.svg";
import light from "../../assets/images/light.svg";
import contact from "../../assets/images/contact.svg";
import darkmodeButton from "../../assets/images/darkmode_light.svg";
import login from "../../assets/images/login.svg";
import logout from "../../assets/images/logout.svg";
import sign from "../../assets/images/sign.svg";
import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contexts } from "../../contexts/Contexts";

interface MenuProps {
  handleTheme: () => void;
}

export function Menu({ handleTheme }: MenuProps) {

  const [user, setUser] = useState(undefined);

  const { theme, setTheme } = useContext(Contexts)

  useEffect(() => {
    const button: any = document.querySelector("#menuContent #labelDarkmode span")
    const spans: any = document.querySelectorAll("#menuContent #label-menu #nav-icon3 span")
    const lis: any = document.querySelectorAll("#menuContent li .icons, #menuContent li a")

    if (theme == "dark") {
      button.style.marginLeft = "25px"

      for(let span of spans){
        span.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
      }

      for(let li of lis){
        li.style.filter = "brightness(100%)"
      }

      

    } else {
      button.style.marginLeft = "0"

      for(let span of spans){
        span.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
      }

      for(let li of lis){
        li.style.filter = "brightness(20%)"
      }

    }
  }, [theme])




  function handleMenu() {
    const nav = document.querySelector(".menuNavigation");
    nav?.classList.toggle("sr-only");
  }



  return (
    <div id="menuContent">
      <label id="label-menu" htmlFor="menu">
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="sr-only"
          onChange={handleMenu}
        />
        <div id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

      <nav className="menuNavigation sr-only">
        <ul>
          <li id="dark-mode">
            <label id="labelDarkmode" htmlFor="darkmode" onClick={handleTheme}>
              <span>
                <img
                  src={darkmodeButton}
                  alt="Botão de Darkmode"
                  className="icons"
                />
              </span>
            </label>
          </li>

          <li>
            <Link to="/">
              <img src={home} alt="Home" className="icons" />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={light} alt="light" className="icons" />
              <span>Projeto</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <img src={contact} alt="contact" className="icons" />
              <span>Contato</span>
            </Link>
          </li>

          {
            user ?
              (
                <li>
                  <a href="#">
                    <img src={logout} alt="contact" className="icons" />
                    <span>Logout</span>
                  </a>
                </li>
              )
              :

              (<>
                <li>
                  <a href="/sign">
                    <img src={sign} alt="contact" className="icons" />
                    <span>Cadastrar</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={login} alt="contact" className="icons" />
                    <span>Logar</span>
                  </a>
                </li>
              </>
              )
          }
        </ul>
      </nav>
    </div>
  );
}