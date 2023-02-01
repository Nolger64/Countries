import { useMode } from "../../hooks/useMode";
import styleLigth from "./CardLigth.module.css";
import styleDark from "./CardDark.module.css";
const Card = (props) => {
  const style = useMode(props.mode, styleDark, styleLigth);

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  return (
    <div className={style.container}>
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
