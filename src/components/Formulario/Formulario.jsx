import React from "react";
import styles from "./Formulario.module.css";
import LabelTexto from "../LabelTexto/LabelTexto";
import ListSelect from "../ListSelect/ListSelect";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = ({cadastroColaborador}) => {
  const times = [
    "",
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    cadastroColaborador({nome,cargo,imagem, team})
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("");

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
          itens={times}
          valor={team}
          aoAlterado={(valor) => setTeam(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </div>
  );
};

export default Formulario;
