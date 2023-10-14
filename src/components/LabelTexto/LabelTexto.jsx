
import styles from "./LabelTexto.module.css"

function LabelTexto({label, placeHolder, obrigatorio, valor, aoAlterado}) {


  const aoDigitado = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <div className={styles.campo_texto}>
      <label>{label}</label>
      <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={`${placeHolder}...`} type="text" />
    </div>
  )
}

export default LabelTexto 