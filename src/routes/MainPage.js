import React from "react";
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar';
import styles from '../styles/MainPage.module.css'
import MapPage from './MapPage'

const MainPage = () => {
  return (
      <>
        <Navbar />
        <div className={styles.MainPage01}>
          <div className={styles.OceanGIF}>
            <Link to="/MapPage" element={<MapPage />}>
              <div className={styles.MainSrc}>
                  <h2>지도로 검색하기</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
              </div>
            </Link>
          </div>
        </div>
      </>
  );
}

export default MainPage;
