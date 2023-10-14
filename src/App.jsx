import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";

function App() {
  const [colaboradores, setColaborador] = useState([]);
  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  };

  return (
    <>
      <Banner />
      <Formulario
        cadastroColaborador={(colaborador) => novoColaborador(colaborador)}
      />
    </>
  );
}

export default App;
