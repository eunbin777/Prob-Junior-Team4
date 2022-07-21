import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import styles from '../styles/TDdetail.module.css';

function TDdetail() {
  return (
    <div className="App">
      <Navbar />

      <section className={styles.TDdetail}>
        <div className="conSmall">
          <div className={styles.titleBox}>
            <div className={styles.title}>
              <h4>광역시</h4>
              <h2>여행지 이름</h2>
            </div>
            <h5>여행지 주소</h5>
          </div>
        
          <div className={styles.content}>
            <section className={styles.imgBox}></section>
            <div>
              <section className={styles.leftSec}></section>
              <section className={styles.rightSec}></section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TDdetail;
