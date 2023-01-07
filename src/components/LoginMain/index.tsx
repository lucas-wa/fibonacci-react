import galaxy from "../../assets/images/galaxy.svg";
import './style.scss'
import logo from "../../assets/images/logo.png"
import { useContext, useState } from "react";
import { Contexts } from "../../contexts/Contexts";
import { api } from "../../lib/api";
import {useNavigate} from "react-router-dom"

export function LoginMain() {

    const navigate = useNavigate();

    const { theme, setTheme } = useContext(Contexts)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e: any) {
        e.preventDefault()

        const res = await api.post("/authenticateUser", {
            email: email,
            password: password
        })
        .catch(
            error => {
                const pError:any = document.querySelector(".error")
                console.log(error)
                pError.innerHTML = error.response.data.error
            }
        )

        const inputs: any = document.querySelectorAll("main .modal-wrapper .modal form input")

        for(let input of inputs){
            input.value = ""
        }

        navigate(res.data.redirectUrl)
    }



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


                    <form action="#" onSubmit={handleSubmit}>
                    
                        <h1>Entrar</h1>

                        <p className="error" style={{"color":"red"}}></p>
                    
                        <input 
                        type="text" 
                        name="" 
                        id="user" 
                        placeholder='Digite seu usuário' 
                        onChange={e => setEmail(e.target.value)}
                        required
                        />

                        <input 
                        type="password" 
                        name="" 
                        id="password" 
                        placeholder='Digite sua senha'
                        onChange={e => setPassword(e.target.value)}
                        required
                        />

                        <button type="submit">Entrar</button>
                        
                    </form>

                </div>
            </div>
        </main>
    )
}