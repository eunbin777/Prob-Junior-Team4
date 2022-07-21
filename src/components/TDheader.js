import styles from '../styles/TDheader.module.css';
import Diamond from '../assets/diamond-symbol.png';

const TDheader = () => {
  return(
    <div className={styles.TDheader}>
      <h1>여행지</h1>
      <div className={styles.DiamondWrap}>
        <img className={styles.DiamondMedium} src={ Diamond } />
        {/* <img className={styles.DiamondSmall} src={ Diamond }  /> */}
        <img className={styles.DiamondLarge} src={ Diamond }  />
        {/* <img className={styles.DiamondSmall} src={ Diamond }  /> */}
        <img className={styles.DiamondMedium} src={ Diamond }  />
      </div>
    </div>
  );
}

export default TDheader;