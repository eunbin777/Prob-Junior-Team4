import React from "react";
import Logo from '../assets/Logo.png';
import styles from "../styles/Footer.module.css"

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year
  };

  return(
    <div className={styles.container}>
        <div className={styles.LogoWrap}>
          <img src={Logo} width='45' height='27' />
          <div className={styles.travel}>Travel</div>
        </div>
      <p className={styles.txt}> Copyright &copy; <span>{thisYear()}</span></p>
    </div>
  )
}
export default Footer;