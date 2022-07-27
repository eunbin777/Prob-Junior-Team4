import styles from "../styles/TDcontent.module.css";
import {Link} from "react-router-dom";
import TDdetail from "../routes/TDdetail";
import Heart from "../assets/heart.png"

const TDcontent = () => {
  return(
    <>
      <Link to="/TDdetail" element={<TDdetail />}>
        <div className={styles.TDcontentBox}>
          <div className={styles.imgBox01}>
            <h2>부산광역시</h2>
          </div>
          <div className={styles.textBox}>
            <div className={styles.texts}>
              <h2>광안리 해수욕장</h2>
              <p>광안리해수욕장은 부산광역시 수영구 광안2동에 있으며 해운대 해수욕장의 서쪽에 위치하고 있다. 총면적 82,000㎡, 길이 1.4km, 사장폭은 25~110m의 질 좋은 모래사장이 있고, 지속적인 수질 정화를 실시하여 인근의 수영강에 다시 고기가 살 수 있을 정도로 깨끗한 수질을 자랑하며, 특히 젊은이들이 즐겨 찾는 명소이다. 광안리에서는 해수욕뿐 아니라 독특한 분위기를 자아내는 레스토랑, 카페 등과 시내 중심가 못지않은 유명 패션상가들이 즐비하며, 다양한 먹을거리, 볼거리가 있어서 피서의 즐거움을 더해준다. 특히 밤이 되면 광안대교의 아름다운 야경이 장관이다.</p>
            </div>
            <img src={Heart}/>
          </div>
        </div>
      </Link>

      <Link to="/TDdetail" element={<TDdetail />}>
        <div className={styles.TDcontentBox}>
          <div className={styles.imgBox02}>
            <h2>대전광역시</h2>
          </div>
          <div className={styles.textBox}>
            <div className={styles.texts}>
              <h2>엑스포 과학공원</h2>
              <p>1993년 8월 7일부터 11월 7일까지 개최되었던 대전세계박람회가 끝난 뒤 그 시설과 부지를 국민과학교육의 장으로 활용하기 위하여 조성되었다. 1994년 8월 7일 문을 열었다. 대덕연구단지와 국립중앙과학관이 협력하여 개발한 각종 첨단 과학기술의 전시와 최첨단 영상을 통한 입체적이며 색다른 과학 학습의 공간으로 꾸며져 있다.
              </p>
            </div>
            <img src={Heart}/>
          </div>
        </div>
      </Link>

      <Link to="/TDdetail" element={<TDdetail />}>
        <div className={styles.TDcontentBox}>
          <div className={styles.imgBox03}>
            <h2>대구광역시</h2>
          </div>
          <div className={styles.textBox}>
            <div className={styles.texts}>
              <h2>스파밸리</h2>
              <p>스파밸리는 달성군 냉천리에 위치한 온천시설 및 사우나 시설로 2003년에 오픈했다. 스파밸리 1층에는 헬스클럽, 기념품, 판매점 등이 있고 2층 바데풀, 키즈풀, 삼합체험실, UK-Ball찜질방, 패스트푸드, 굴찜질방, 수면실 등이 있다. </p>
            </div>
            <img src={Heart}/>
          </div>
        </div>
      </Link>
      
      <Link to="/TDdetail" element={<TDdetail />}>
        <div className={styles.TDcontentBox}>
          <div className={styles.imgBox04}>
            <h2>부산광역시</h2>
          </div>
          <div className={styles.textBox}>
            <div className={styles.texts}>
              <h2>대저생태공원</h2>
              <p>대저생태공원은 낙동강 우안 대저수문에서부터 김해공항램프까지의 둔치지역으로, 구포대교부터 아래로 낙동강하류 철새도래지에 속하는 지역이다. 신덕습지를 비롯한 크고 작은 습지와 수로, 초지, 유채꽃단지, 각종 체육시설이 조성되어 있어 여가와 휴식을 즐길 수 있는 곳이다. 공원의 양쪽끝에 체육시설과 이용편의시설을 배치하고 그 외 지역은 습지와 초지 등으로 조성하였다. 특히 구포대교 아래쪽으로 조성된 유채경관단지에서 매년 4월 개최되는 유채꽃축제에는 수많은 관광객들이 방문하는 새로운 명소로 자리잡고 있다.
              </p>
            </div>
            <img src={Heart}/>
          </div>
        </div>
      </Link>
    </>
  )
}

export default TDcontent;