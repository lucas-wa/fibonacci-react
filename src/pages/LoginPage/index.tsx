import { useContext, useEffect } from 'react';
import './style.scss';
import { Contexts } from '../../contexts/Contexts';
import { LoginMain } from '../../components/LoginMain';

export function LoginPage() {
    const {theme, setTheme} = useContext(Contexts);


    return (

        <>

            <input checked={
                !(theme == `light`)
            } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />


            <div className="LoginPageContainer">


                <LoginMain/>


            </div>

        </>



    )
}