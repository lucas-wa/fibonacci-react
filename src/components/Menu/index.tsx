import home from "../../assets/images/home.svg";
import light from "../../assets/images/light.svg";
import contact from "../../assets/images/contact.svg";
import darkmodeButton from "../../assets/images/darkmode_light.svg";
import login from "../../assets/images/login.svg";
import logout from "../../assets/images/logout.svg";
import sign from "../../assets/images/sign.svg";
import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contexts } from "../../contexts/Contexts";

interface MenuProps {
  handleTheme: () => void;
}

export function Menu({ handleTheme }: MenuProps) {

  const navigate = useNavigate();


  const { user, setUser } = useContext(Contexts)

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
            <Link to="/contacts" >
              <img src={contact} alt="contact" className="icons" />
              <span>Contato</span>
            </Link>
          </li>

          {
            user ?
              (
                <li >
                  <Link to="/" onClick={() => {
                    setUser(false)
                  }
                  }
                    >
                    <img src={logout} alt="contact" className="icons" />
                    <span>Logout</span>
                  </Link>
                </li>
              )
              :
              (<>
                <li>
                  <Link to="/sign">
                    <img src={sign} alt="contact" className="icons" />
                    <span>Cadastrar</span>
                  </Link>
                </li>

                <li>
                  <Link to="/login">
                    <img src={login} alt="contact" className="icons" />
                    <span>Entrar</span>
                  </Link>
                </li>
              </>
              )
          }
        </ul>
      </nav>
    </div>
  );
}