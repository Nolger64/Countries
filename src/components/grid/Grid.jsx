import Card from "../card/Card"; //Importando el componente Card
import data from "../../data.json"; //Importando el json
import styleLigth from "./GridLigth.module.css"; //Importando el css module
import styleDark from "./GridDark.module.css"; //Importando el css module
import { useMode } from "../../hooks/useMode"; //Importando el hook useMode

export const GridFilterByCont = (props) => {
  console.log(props.option);
  const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
  const searchValue = props.searchValue.toLowerCase(); //Pasando el valor del input a minusculas
  //Una funcion que filtra los paises por nombre
  const filterByName = (data) => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });
  };
  const filterByCont = (data) => {
    return data.filter((item) => {
      return item.region.includes(props.option);
    });
  };
  const dataFiltName = filterByName(data); //Filtrando los paises por nombre
  const dataFiltCont = filterByCont(dataFiltName); //Filtrando los paises por continente
  return (
    <div className={style.container}>
      {props.option == "All"
        ? dataFiltName.map((item, index) => {
            return <Card mode={props.mode} data={item} key={index} />;
          })
        : dataFiltCont.map((item, index) => {
            return <Card mode={props.mode} data={item} key={index} />;
          })}
    </div>
  );
};

export const GridFilter = (props) => {
  const style = useMode(props.mode, styleDark, styleLigth); //Usando el hook useMode
  const searchValue = props.searchValue.toLowerCase();
  //Una funcion que filtra los paises por nombre
  const filterByName = (data) => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });
  };
  const dataFilt = filterByName(data);
  return (
    <div className={style.container}>
      {dataFilt.map((item, index) => {
        return <Card mode={props.mode} data={item} key={index} />;
      })}
    </div>
  );
};
