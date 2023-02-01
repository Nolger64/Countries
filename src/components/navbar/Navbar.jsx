import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import styleLigth from "./NavbarLigth.module.css"; //Importando el css module
import styleDark from "./NavbarDark.module.css"; //Importando el css module
import darkSVG from "../../assets/moon-outline.svg"; //Importando el svg
import ligthSVG from "../../assets/sunny-outline.svg"; //Importando el svg

const Navbar = (props) => {
    const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
    const changeMode = () => { props.setMode(!props.mode) } //Funcion para cambiar el modo (dark o ligth
    return (
        <div className={style.container}>
            <h3>Where in the world?</h3>
            <button onClick={changeMode} className={style.btnMode}>
                <img src={props.mode ? ligthSVG : darkSVG} alt="Change mode to dark" className={style.imgMode}/> 
                <span>{props.mode ? "Ligth" : "Dark"} Mode</span>
            </button>
        </div>
    )
}
export default (Navbar)