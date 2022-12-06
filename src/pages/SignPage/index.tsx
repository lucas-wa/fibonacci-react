import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import '../../styles/signpage.scss';

export function SignPage() {


    const fullHeightStyle = {
        height: "100vh"
    }

    // useEffect(() => {
    //     const container = document.querySelector(".SignPageContainer");
    //     const height = window.screen.height;

    //     //console.log(height);
    //     console.log(container);

    //     if (Number(container?.clientHeight) < height) {
    //         container.style.height = "100vh"
    //     }
    // }, [])

    return (

        <div className="SignPageContainer" style={
            document
            .querySelector(".SignPageContainer")
            ?.clientHeight

            <

            window.screen.height 

            ?

            fullHeightStyle

            :

            {}
        }>


            <div className="modal-wrapper">
                <div className="modal">
                    <h1>Cadastro</h1>
                    <form action="POST">
                        <span>
                            <label htmlFor="user">Nome de usuário</label>
                            <input type="text" name="" id="user" placeholder='Digite seu usuário'/>
                        </span>

                        <span>
                            <label htmlFor="email">Endereço de email</label>
                            <input type="email" name="" id="email" placeholder='Digite seu email'/>
                        </span>

                        <span>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="" id="password" placeholder='Digite sua senha'/>
                        </span>
                    </form>
                </div>
            </div>


        </div>

    )
}