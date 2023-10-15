import styles from "./Colaborador.module.css";

const Colaborador = ({ nome, cargo, imagem }) => {
  return (
    <div className={styles.colaborador}>
      <div className={styles.cabecalho}>
        <img src={imagem} alt="Thiago Eiji Matumoto" />
      </div>
      <div className={styles.rodape}>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
