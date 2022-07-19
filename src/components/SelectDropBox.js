import styles from "./SelectDropBox.module.css"

const localOptions = [
	{ value: "seoul", name: "서울특별시" },
  { value: "incheon", name: "인천광역시" },
	{ value: "daejeon", name: "대전광역시" },
  { value: "gwangju", name: "광주광역시" },
  { value: "daegu", name: "대구광역시" },
  { value: "ulsan", name: "울산광역시" },
  { value: "busan", name: "부산광역시" }
];

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
    <>
      <div className="selecLabel" >지역 선택 : </div>
      <SelectBox options={localOptions}></SelectBox>
    </>
  )
}

export default SelectDropBox;