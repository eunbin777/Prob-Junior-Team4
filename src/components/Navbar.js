import styles from "./Navbar.module.css"

const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <div className={`${styles.navCon} ${styles.conLarge}`}>
          <h1>🟡로고</h1>
          <ul className={styles.click}>
            <li><a href="#!">여행지</a></li>
            <li><a href="#!">여행계획</a></li>
            <li><a href="#!">여행지추천</a></li>
            <li><a href="#!">마이페이지</a></li>
          </ul>
          <div className={styles.navSearch}>
            <input className={styles.inputSearch} type="text"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>  
          <ul className={styles.login}>
            <li><a href="#!">LOGIN</a></li>
            <li><a href="#!">JOIN US</a></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar;