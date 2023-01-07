import { useContext } from "react";
import { DashboardMain } from "../../components/DashboardMain";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Contexts } from "../../contexts/Contexts";
import "./style.scss";

export function Dashboard() {

  const {theme, setTheme} = useContext(Contexts)


    return (

        <>
            <input checked={
                !(theme == `light`)
            } type="checkbox" name="darkmode" id="darkmode" className="sr-only" />


            <div className="dashboardContainer">
                <Header />

                <DashboardMain />

                <Footer />
            </div>

        </>
    )
}