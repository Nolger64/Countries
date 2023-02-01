import { useState } from "react"; //Importando el hook useState
import styleLigth from "./AppLigth.module.css"; //Importando el css module
import styleDark from "./AppDark.module.css"; //Importando el css module
import { useMode } from "./hooks/useMode"; //Importando el hook useMode
import Navbar from "./components/navbar/Navbar"; //Importando el componente Navbar
import Filter from "./components/filter/Filter"; //Importando el componente Filter
import Grid from "./components/grid/Grid";


const App = () => {
  const [mode, setMode] = useState(false); //Creando el estado mode y su setter setMode para cambiar al modo oscuro o claro
  const style = useMode(mode, styleLigth, styleDark); //Usando el hook useMode
  return (
    <div className={style.container}>
      <Navbar mode={mode} setMode={setMode}/>
      <Filter mode={mode}/>
      <Grid mode={mode}/>
    </div>
  );
};
export default App;
