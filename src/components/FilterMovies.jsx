import { useState } from "react";
 
function FilterMovies(props) {
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = e => {
    setFirstLetter(e.target.value);
 
    console.log("selected", e.target.value);
    props.filterMovies(e.target.value); 
  };
  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}
 
export default FilterMovies;

//The <select> tag works on the same principle as the <input>. We convert it to a controlled component in the same way, by adding the attribute value and the onChange event.