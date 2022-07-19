import styles from "./SortDropBox.module.css"

const localOptions = [
	{ value: "recommend", name: "추천 순" },
  { value: "popularity", name: "인기 순" }
];

const SelectBox = (props) =>{
  const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

  return (
    <div className={styles.selctWrap}>
      <select onChange={handleChange} key={"정렬"} defaultValue={"정렬"}>
        <option disabled={true} value={"정렬"}>정렬</option>
        {props.options.map( (option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}

      </select>
    </div>
    
  );
};

const SortDropBox = () => {
  return(
      <SelectBox options={localOptions}></SelectBox>
  )
}

export default SortDropBox;