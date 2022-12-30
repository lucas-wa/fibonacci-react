import galaxy from "../../assets/images/galaxy.svg";
import './style.scss'
import logo from "../../assets/images/logo.png"
import { useContext, useState } from "react";
import { Contexts } from "../../contexts/Contexts";
import { api } from "../../lib/api";


export function SignMain() {

    const { theme, setTheme } = useContext(Contexts)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e: any) {
        e.preventDefault()

        const res = await api.post("/createUsers", {
            email: email,
            name: name,
            password: password
        })


        const inputs = document.querySelectorAll("main .modal-wrapper .modal form input")

        for(let input of inputs){
            input.value = ""
        }
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

                        <h1>Cadastro</h1>

                        <input
                        required 
                        type="text" 
                        name="" 
                        id="user" 
                        placeholder='Crie um usuário' 
                        onChange={(e) => {setName(e.target.value)}}/>

                        <input
                        required 
                        type="email" 
                        name="" 
                        id="email" 
                        placeholder='Digite seu email' 
                        onChange={(e) => {setEmail(e.target.value)}}/>

                        <input 
                        required
                        type="password" 
                        name="" 
                        id="password" 
                        placeholder='Crie uma senha' 
                        onChange={(e) => {setPassword(e.target.value)}}/>

                        <button type="submit">Cadastrar</button>
                    </form>

                </div>
            </div>
        </main>
    )
}