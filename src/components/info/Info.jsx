import { Context } from "../../context/Context"; //Importando el contexto
import { useContext } from "react"; //Importando el hook useContext
import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import styleLigth from "./InfoLigth.module.css"; //Importando el css
import styleDark from "./InfoDark.module.css"; //Importando el css
import backSVG from "../../assets/arrow-back-outline.svg"; //Importando el svg

const Info = (props) => {
  //Usando el hook useMode para obtener el modo actual
  const style = useMode( props.mode, styleDark, styleLigth);
  //Usando el hook useContext para obtener el estado select
  const { open } = useContext(Context);
  //Usando el hook useContext para obtener el pais seleccionado
  const { countri } = useContext(Context);
  //Creando una funcion que le agregar los puntos de mil y millones a los numeros
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  //Retornando el componente Info
  return (
    <div className={style.container}>
      <div className={style.containerBack}>
        <button className={style.btnBack} onClick={open}> <img src={backSVG} alt="Back" className={style.backSVG} /> Back</button>
      </div>
      <div className={style.containerInfo}>
        <div className={style.containerLeft}>
          <img src={countri.flag} alt="Flag" className={style.imgFlag}/>
        </div>
        <div className={style.containerRigth}>
          <h1 className={style.tittle}>{countri.name}</h1>
          <h3 className={style.infoText}>Capital: <p className={style.infoSubText}>{countri.capital}</p></h3>
          <h3 className={style.infoText}>Native Name: <p className={style.infoSubText}>{countri.nativeName}</p></h3>
          <h3 className={style.infoText}>Region: <p className={style.infoSubText}>{countri.region}</p></h3>
          <h3 className={style.infoText}>Sub Region: <p className={style.infoSubText}>{countri.subregion ? countri.subregion : "None"}</p></h3>
          <h3 className={style.infoText}>population: <p className={style.infoSubText}>{formatNumber(countri.population)}</p></h3>
          <h3 className={style.infoText}>Lenguajes: <p className={style.infoSubText}>{countri.languages.map(e => e.name + ", ")}</p></h3>
          <h3 className={style.infoText}>Borders: <p className={style.infoSubText}>{countri.borders ? countri.borders.map(e => e + ", ") : "No bordes"}</p></h3>
          <h3 className={style.infoText}>Call code: <p className={style.infoSubText}>{countri.callingCodes}</p></h3>
          <h3 className={style.infoText}>Currencies: <p className={style.infoSubText}>{countri.currencies ? countri.currencies.map(e => e.name + " ") : "No curriencies"}</p></h3>
          <h3><p></p></h3>
          <h3><p></p></h3>
        </div>
      </div>
    </div>
  );
};
export default Info;
