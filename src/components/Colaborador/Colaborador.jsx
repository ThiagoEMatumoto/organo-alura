import styles from './Colaborador.module.css'

const Colaborador = () => {

  return (
    <div className={styles.colaborador}>
      <div className={styles.cabecalho}>
        <img src="https://github.com/ThiagoEMatumoto.png" alt="Thiago Eiji Matumoto" />
      </div>
      <div className={styles.rodape}>
        <h4>Thiago Eiji Matumoto</h4>
        <h5>Engenheiro de Software</h5>
      </div>
    </div>
  )
}

export default Colaborador;