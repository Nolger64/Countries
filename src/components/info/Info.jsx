import { Context } from "../../context/context"; //Importando el contexto
import { useContext } from "react"; //Importando el hook useContext
import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import styleLigth from "./InfoLigth.module.css"; //Importando el css
import styleDark from "./InfoDark.module.css"; //Importando el css
import backSVG from "../../assets/arrow-back-outline.svg"; //Importando el svg

const Info = () => {
  //Usando el hook useMode para obtener el modo actual
  const style = useMode(styleDark, styleLigth);
  //Usando el hook useContext para obtener el estado select
  const { open } = useContext(Context);
  //Usando el hook useContext para obtener el pais seleccionado
  const { countri } = useContext(Context);
  //Retornando el componente Info
  return (
    <div className={style.container}>
      <div className={style.containerBack}>
        <button className={style.btnBack} onClick={open}> <img src={backSVG} alt="Back" className={style.backSVG} /> Back</button>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Info;
