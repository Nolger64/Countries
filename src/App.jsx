import { useState, useEffect } from "react"; //Importando el hook useState
import { useMode } from "./hooks/useMode"; //Importando el hook useMode
import { Context } from "./context/Context"; //Importando el contexto
import styleLigth from "./AppLigth.module.css"; //Importando el css module
import styleDark from "./AppDark.module.css"; //Importando el css module
import Navbar from "./components/navbar/Navbar"; //Importando el componente Navbar
import Filter from "./components/filter/Filter"; //Importando el componente Filter
import Info from "./components/info/Info"; //Importando el componente Informacion del pais seleccionado

const App = () => {
  //Creando el estado open y su setter setOpen para abrir y cerrar la informacion del pais seleccionado
  const [open, setOpen] = useState(false);
   //Creando el estado mode y su setter setMode para cambiar al modo oscuro o claro
  const [mode, setMode] = useState(false);
  //Creando el estado cardSelected y su setter setCardSelected para guardar el pais seleccionado
  const [cardSelect, setCardSelect] = useState(false); 
  //Usando el hook useMode para cambiar el css dependiendo del modo
  const style = useMode(mode, styleLigth, styleDark);
  //Creando una funcion que cambia el estado open
  const handleOpen = () => setOpen(!open); 
   //Creando una funcion que cambia el estado cardSelect
  const handleCardSelect = (data) => setCardSelect(data);
  //Creando un objeto context que contiene las funciones handleOpen y handleCardSelect
  const value = { open: handleOpen, select : handleCardSelect, countri : cardSelect };
  //Retornando el componente App
  return (
    <Context.Provider value={value}>
      <div className={style.container}>
        <Navbar mode={mode} setMode={setMode} />
        {open ? <Info mode={mode} /> : <Filter mode={mode} />}
      </div>
    </Context.Provider>
  );
};
export default App;
