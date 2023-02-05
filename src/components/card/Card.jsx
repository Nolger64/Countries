import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import styleLigth from "./CardLigth.module.css"; //Importando el css module claro
import styleDark from "./CardDark.module.css"; //Importando el css module osbcuro
import { useContext } from "react"; //Importando el hook useContext
import { Context } from "../../context/Context"; //Importando el contexto


const Card = (props) => {
  //Usando el hook useMode para cambiar el modo claro u oscuro
  const style = useMode(props.mode, styleDark, styleLigth);
  //Usando el hook useContext para abrir y cerrar la informacion del pais seleccionado
  const { open } = useContext(Context);
  //Usando el hook useContext para guardar el pais seleccionado
  const { select } = useContext(Context);
  //Creando una funcion que le agregar los puntos de mil y millones a los numeros
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  //Creando una funcion que guarda el pais seleccionado
  const selectThis = () => {
    select(props.data);
    open();
  };
  //Retornando el componente Card
  return (
    <div className={style.container} onClick={selectThis}>
      <img src={props.data.flags.png} alt="" className={style.imgFlag}/>
      <div className={style.containerInfo}>
        <h3 className={style.name}>{props.data.name}</h3>
        <h4 className={style.parr}>Population: <p className={style.subParr}>{formatNumber(props.data.population)}</p></h4>
        <h4 className={style.parr}>Region: <p className={style.subParr}>{props.data.region}</p></h4>
        <h4 className={style.parr}>Capital: <p className={style.subParr}>{props.data.capital}</p></h4>
      </div>
    </div>
  );
};
export default Card;
