import React, {useEffect, useState} from "react";
import styles from "../styles/Navbar.module.css"
import {Link} from "react-router-dom";
import TDhome from "../routes/TDhome";
import MainPage from "../routes/MainPage";
import LoginPage from "../routes/LoginPage";
import {auth} from "../fbase";
import SignUpPage from "../routes/SignUpPage";
import Logo from '../assets/Logo.png';
import MapPage from "../routes/MapPage";


const Navbar = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogOut = () => {
    auth.signOut();
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  })
  return(
    <nav className={styles.navbar}>
      <div className={`${styles.navCon} ${styles.conLarge}`}>
          <Link to="/" element={<MainPage/>}>
            <div className={styles.LogoWrap}>
              <img src={Logo} width='45' height='27' />
              <div className={styles.travel}>Travel</div>
            </div>
          </Link>
          <ul className={styles.click}>
            <li><Link to="/TDhome" element={<TDhome />}>여행지</Link></li>
            <li><a href="#!">여행계획</a></li>
            <li><a href="#!">여행지추천</a></li>
            <li><a href="#!">마이페이지</a></li>
          </ul>
          <Link to="/MapPage" element={<MapPage />}>
            <div className={styles.navSearch}>
              {/* <input className={styles.inputSearch} type="text" placeholder="지도로 검색하기"></input> */}
              <p>지도로 검색하기</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>  
          </Link>


          {!init || isLoggedIn === false ? 
          <ul className={styles.login}>
            <li><Link to="/LoginPage" element={<LoginPage/>}>LOGIN</Link></li>
            <li><Link to="/SignUpPage" element={<SignUpPage/>}>JOIN US</Link></li>
          </ul> :
          <ul className={styles.login}>
            <li><button onClick={onLogOut}>LOG OUT</button></li>
          </ul>
          }
      </div>
    </nav>
  )
}

export default Navbar;