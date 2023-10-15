import React from "react";
import styles from "./Formulario.module.css";
import LabelTexto from "../LabelTexto/LabelTexto";
import ListSelect from "../ListSelect/ListSelect";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = ({cadastroColaborador, teams}) => {


  const aoSalvar = (event) => {
    event.preventDefault();
    cadastroColaborador({nome,cargo,imagem, time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className={styles.formulario}>
      <form onSubmit={aoSalvar}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <LabelTexto
          obrigatorio={true}
          label="Nome"
          placeHolder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <LabelTexto
          obrigatorio={true}
          label="Cargo"
          placeHolder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <LabelTexto
          label="Imagem"
          placeHolder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListSelect
          obrigatorio={true}
          label="Time"
          itens={teams}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </div>
  );
};

export default Formulario;
