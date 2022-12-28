import "./style.scss";

import facebook from "../../assets/images/facebook.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";
import instagram from "../../assets/images/instagram.svg";

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; Projeto Fibonacci</p>

      <ul>
        <li>
          <a href="#">
            <img src={facebook} alt="" className="icone" />
            <p>Facebook</p>
          </a>
        </li>

        <li>
          <a href="#">
            <img src={github} alt="github" className="icone" />
            <p>Github</p>
          </a>
        </li>

        <li>
          <a href="#">
            <img src={instagram} alt="" className="icone" />
            <p>Instagram</p>
          </a>
        </li>

        <li>
          <a href="#">
            <img src={linkedin} alt="" className="icone" />
            <p>Linkedn</p>
          </a>
        </li>

        <li>
          <a href="#">
            <img src={youtube} alt="" className="icone" />
            <p>Youtube</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}