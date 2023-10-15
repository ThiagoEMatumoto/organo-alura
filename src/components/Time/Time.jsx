import React from "react";
import styles from "./Time.module.css";
import Colaborador from "../Colaborador/Colaborador";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const css = { backgroundColor: corSecundaria };

  return (
    colaboradores.length > 0 ? (
      <div className={styles.time} style={css}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className={styles.colaboradores}>
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </div>
    ) : ''
  );
};

export default Time;
