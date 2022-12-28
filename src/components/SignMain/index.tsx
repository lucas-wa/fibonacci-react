import galaxy from "../../assets/images/galaxy.svg";
import './style.scss'

export function SignMain(){
    return (
        <main>

        <div className="image">
            <img src={galaxy} alt="galaxy" />
        </div>

        <div className="modal-wrapper">
            <div className="modal">
                <h1>Cadastro</h1>
                <form action="#">
                    <span>
                        <label htmlFor="user">Nome de usuário</label>
                        <input type="text" name="" id="user" placeholder='Digite seu usuário' />
                    </span>

                    <span>
                        <label htmlFor="email">Endereço de email</label>
                        <input type="email" name="" id="email" placeholder='Digite seu email' />
                    </span>

                    <span>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="" id="password" placeholder='Digite sua senha' />
                    </span>
                </form>
            </div>
        </div>
    </main>
    )
}