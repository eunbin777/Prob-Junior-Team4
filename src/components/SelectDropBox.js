import styles from "../styles/SelectDropBox.module.css"


const localOptions = [
  { value: "seoul", name: "서울특별시" },
  { value: "incheon", name: "인천광역시" },
  { value: "daejeon", name: "대전광역시" },
  { value: "gwangju", name: "광주광역시" },
  { value: "daegu", name: "대구광역시" },
  { value: "ulsan", name: "울산광역시" },
  { value: "busan", name: "부산광역시" },
  { value: "gangwon", name: "강원도" },
  { value: "gyeonggi", name: "경기도" },
  { value: "chunnam", name: "충청남도" },
  { value: "chunbuk", name: "충청북도" },
  { value: "jeonnam", name: "전라남도" },
  { value: "jeonbuk", name: "전라북도" },
  { value: "gyeongnam", name: "경상남도" },
  { value: "gyeongbuk", name: "경상북도" },
  { value: "jeju", name: "제주도" },
]

const SelectBox = (props) =>{
  const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

  return (
    <div className={styles.selctWrap}>
      <select onChange={handleChange} key={"시/도"} defaultValue={"시/도"}>
        <option disabled={true} value={"시/도"}>시/도</option>
        {props.options.map( (option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}

      </select>
    </div>
    
  );
};

const SelectDropBox = () => {
  return(
    <div className={styles.selectLabel}>
      <div>지역 선택</div>
      <SelectBox options={localOptions}></SelectBox>
    </div>
  )
}



export default SelectDropBox;

