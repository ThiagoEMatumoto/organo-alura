import React from 'react'
import styles from './Time.module.css'

const Time = ({nome, corPrimaria, corSecundaria}) => {

  const css = { backgroundColor: corSecundaria}

  return (
    <div className={styles.time} style={css}>
      <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
    </div>
  )
}

export default Time