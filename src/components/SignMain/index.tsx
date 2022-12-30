import galaxy from "../../assets/images/galaxy.svg";
import './style.scss'
import logo from "../../assets/images/logo.png"
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

export function SignMain() {

    const { theme, setTheme } = useContext(Contexts)


    return (
        <main>

            <div className="image">
                <img src={galaxy} alt="galaxy" />
            </div>

            <div className="modal-wrapper">

                <div className="modal">


                <figure>
                    <img src={logo} alt="Fibonacci" style={
                        theme == "dark" ? { filter: "brightness(100%)" } : {}
                    }
                    />
                    <figcaption hidden>Logo Fibonacci</figcaption>
                </figure>


                    <form action="#">
                    
                    <h1>Cadastro</h1>
                    
                        <input type="text" name="" id="user" placeholder='Digite seu usuário' />

                        <input type="email" name="" id="email" placeholder='Digite seu email' />

                        <input type="password" name="" id="password" placeholder='Digite sua senha' />

                        <button type="submit">Cadastrar</button>
                    </form>

                </div>
            </div>
        </main>
    )
}