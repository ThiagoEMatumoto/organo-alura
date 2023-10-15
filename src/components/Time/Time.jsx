import React from 'react'
import styles from './Time.module.css'
import Colaborador from '../Colaborador/Colaborador'

const Time = ({nome, corPrimaria, corSecundaria}) => {

  const css = { backgroundColor: corSecundaria}

  return (

    <div className={styles.time} style={css}>
      <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
    
      <Colaborador/>
      <Colaborador/>

    </div>

  )
}

export default Time