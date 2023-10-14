import React from 'react'
import styles from './Botao.module.css'

const Botao = ({texto}) => {
  return (
    <div className={styles.botao}>
      <button>{texto}</button>
    </div>
  )
}

export default Botao