import React, {useState} from 'react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import styles from '../styles/MainPage2.module.css'
import '../styles/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import TDhome from './TDhome';


function MainPage2(){
  const [region, setRegion] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='MainPage2'>
      <Navbar />
      
      <div className={styles.list}>
        <h2 className={styles.t}>여행을 시작하세요!</h2>
        <Slider {...settings}>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/seoul.jpg' alt='서울'></img>
              <h3>서울</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/daejeon.jpg' alt='대전'></img>
              <h3>대전</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/busan.jpg' alt='부산'></img>
              <h3>부산</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/incheon.jpg' alt='인천'></img>
              <h3>인천</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/jeju.jpg' alt='제주'></img>
              <h3>제주</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/gwangju.jpg' alt='광주'></img>
              <h3>광주</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/daegu.jpg' alt='대구'></img>
              <h3>대구</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/ulsan.jpg' alt='울산'></img>
              <h3>울산</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/gangwon.jpg' alt='강원'></img>
              <h3>강원도</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/gyeonggi.jpg' alt='경기'></img>
              <h3>경기도</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/chungnam.jpg' alt='충남'></img>
              <h3>충청남도</h3>
            </Link>     
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/chungbuk.jpg' alt='충북'></img>
              <h3>충청북도</h3>
            </Link>     
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/jeonnam.jpg' alt='전남'></img>
              <h3>전라남도</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/jeonbuk.jpg' alt='전북'></img>
              <h3>전라북도</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/gyeongnam.jpg' alt='경남'></img>
              <h3>경상남도</h3>
            </Link>
          </div>
          <div>
            <Link to="/TDhome" element={<TDhome />}>
              <img className={styles.img} src='images/gyeongbuk.jpg' alt='경북'></img>
              <h3>경상북도</h3>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default MainPage2;