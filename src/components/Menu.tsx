import home from "../assets/images/home.svg";
import light from "../assets/images/light.svg";
import contact from "../assets/images/contact.svg";
import darkmodeButton from "../assets/images/darkmode_light.svg";
import login from "../assets/images/login.svg";
import logout from "../assets/images/logout.svg";
import sign from "../assets/images/sign.svg";
import "../styles/menu.scss";
import { useState } from "react";

interface MenuProps {
  handleTheme: () => void;
}

export function Menu({ handleTheme }: MenuProps) {

  const [user, setUser] = useState(undefined);




  function handleMenu() {
    const nav = document.querySelector(".menuNavigation");
    nav?.classList.toggle("sr-only");
  }



  return (
    <div id="menu">
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
            <a href="#">
              <img src={home} alt="Home" className="icons" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={light} alt="light" className="icons" />

              <span>Projeto</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={contact} alt="contact" className="icons" />
              <span>Contato</span>
            </a>
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
                  <a href="#">
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