import React from "react";
import styles from '../styles/Box.module.css';

function Box(props){
    return(
    <div className={styles.box}>{props.content}</div>
    )
};

export default Box;