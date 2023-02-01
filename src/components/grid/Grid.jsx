import Card from "../card/Card" //Importando el componente Card
import data from "../../data.json" //Importando el json
import styleLigth from "./GridLigth.module.css"; //Importando el css module
import styleDark from "./GridDark.module.css"; //Importando el css module
import { useMode } from "../../hooks/useMode"; //Importando el hook useMode

const Grid = (props) => {
    const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
    return (
        <div className={style.container}>
        {data.map((item, index) => {
            return <Card mode={props.mode} data={item} key={index}/>
        })}
        </div>
    )
}
export default (Grid)
// <Card mode={props.mode} data={data[1]}/> //Ejemplo de como se usa el componente Card