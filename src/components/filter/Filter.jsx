import { useMode } from "../../hooks/useMode"; //Importando el hook useMode
import { useState } from "react"; //Importando el hook useState
import styleLigth from "./FilterLigth.module.css"; //Importando el css module
import styleDark from "./FilterDark.module.css"; //Importando el css module
import { GridFilter, GridFilterByCont } from "../grid/Grid";

const Filter = (props) => {
  const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
  const [searchValue, setSearchValue] = useState(""); //Creando el estado searchValue y su setter setSearchValue para guardar el valor del input
  const [selectValue, setSelectValue] = useState("All"); //Creando el estado selectValue y su setter setSelectValue para guardar el valor del select
  const options = ["All", "America", "Africa", "Asia", "Europe", "Oceania"]; //Creando un array de opciones
  const handleChangeSelect = (e) => {
    //Creando una funcion que maneja el evento onChange del select
    setSelectValue(e.target.value); //Guardando el valor del select en el estado selectValue
  };

  return (
    <>
      <div className={style.container}>
        <input
          type="text"
          name=""
          onChange={(e) => setSearchValue(e.target.value)}
          id=""
          placeholder="Search for country..."
          className={style.input}
        />
        <div>
          <select
            onChange={handleChangeSelect}
            name=""
            id=""
            className={selectValue == "All" ? style.dropDown : style.dropDownSelect}
          >
            {options.map((option, e) => (
              <option key={e} value={option} className={style.dropDownItem}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <GridFilterByCont
          searchValue={searchValue}
          mode={props.mode}
          option={selectValue}
        />
      </div>
    </>
  ); //Retornando el componente Filter
};

export default Filter; //Exportando el componente Filter
