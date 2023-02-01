import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import searchSVG from "../../assets/search-outline.svg"; //Importando el svg de la lupa
import styleLigth from "./FilterLigth.module.css"; //Importando el css module
import styleDark from "./FilterDark.module.css"; //Importando el css module

const Filter = (props) => {
  const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
  return (
    <div className={style.container}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for country..."
        className={style.input}
      />
      <Dopdown mode={props.mode} />
    </div>
  ); //Retornando el componente Filter
};
const Dopdown = (props) => {
  //Creando el componente Dropdown
  const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
  const options = ["All", "America", "Africa", "Asia", "Europa", "Oceania"]; //Creando un array de opciones
  return (
    <div>
      <select name="" id="" className={style.dropDown}>
        {options.map((option, e) => (
          <option key={e} value={option} className={style.dropDownItem}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ); //Retornando el componente Dropdown
};
export default Filter; //Exportando el componente Filter
