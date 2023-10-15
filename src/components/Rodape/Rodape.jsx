import React from "react";
import styles from "./Rodape.module.css";
import logo from "../../assets/logo.png";
import facebook from '../../assets/fb.png'
import twitter from '../../assets/tw.png'
import instagram from '../../assets/ig.png'

const Rodape = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={facebook} alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={twitter} alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={instagram} alt="Logo Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="Logo da Alura" />
      </div>
      <div>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;
