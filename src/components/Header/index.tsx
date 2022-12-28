import "./style.scss";
import logo from "../../assets/images/logo.png";

import { Menu } from "../Menu";
import { useContext} from "react";
import { Contexts } from "../../contexts/Contexts";

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
            <img src={logo} alt="Fibonacci" style={
              theme == "dark"
              ?
              {
                filter: "brightness(100%)"
              }
              :
              {}
            }
            />
            <figcaption hidden>Logo Fibonacci</figcaption>
          </figure>
          {/* </Link> */}
          <div className="right">
            <Menu handleTheme={handleTheme}/>
          </div>
        </div>
      </header>
    )
}