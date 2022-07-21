import styles from "../styles/TDcontent.module.css";
import {Link} from "react-router-dom";
import TDdetail from "../routes/TDdetail";

const TDcontent = () => {
  return(
      <Link to="/TDdetail" element={<TDdetail />}>
        <div className={styles.TDcontentBox}>
          <div className={styles.imgBox}>
            <h2>광역시</h2>
          </div>
          <div className={styles.textBox}>
            <div className={styles.texts}>
              <h2>여행지 이름</h2>
              <p>여행지 설명 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro commodi soluta pariatur magni nihil aspernatur expedita labore. Pariatur quaerat mollitia voluptas. Magni, exercitationem rem nulla quia reprehenderit eos omnis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro commodi soluta pariatur magni nihil aspernatur expedita labore. Pariatur quaerat mollitia voluptas. Magni, exercitationem rem nulla quia reprehenderit eos omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro commodi soluta pariatur magni nihil aspernatur expedita labore. Pariatur quaerat mollitia voluptas. Magni, exercitationem rem nulla quia reprehenderit eos omnis.</p>
            </div>
            <h1>❤</h1>
          </div>
        </div>
      </Link>
  )
}

export default TDcontent;