import React from 'react'
import styles from './ListSelect.module.css'

const ListSelect = ({label, itens, obrigatorio, valor, aoAlterado}) => {

  const aoSelecionar = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <div className={styles.lista_suspensa}>
      <label>{label}</label>
      <select required={obrigatorio} value={valor} onChange={aoSelecionar}>
        <option value=""></option>
        {
          itens.map(item => <option key={item}>{item}</option>)
        }
      </select>
    </div>
  )
}

export default ListSelect