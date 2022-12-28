import { useContext, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import './style.scss';
import { Contexts } from '../../contexts/Contexts';
import { SignMain } from '../../components/SignMain';

export function SignPage() {
    const {theme, setTheme} = useContext(Contexts);


    useEffect(() => {
        const container:any = document.querySelector(".SignPageContainer")
    
        if (container?.clientHeight < window.screen.height) {
          container.style.height = "100vh"
        }
    
      }, [])


    return (

        <>

            <input checked={
                !(theme == `light`)
            } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />


            <div className="SignPageContainer">

                <Header />

                <SignMain/>

                <Footer />

            </div>

        </>



    )
}