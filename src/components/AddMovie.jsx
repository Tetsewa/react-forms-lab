//addMovie is our controlled component
import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

//   To show the content entered in the input, we must update its state variable on each keystroke. To do this, we must add an onChange event and a handler function to each input, which will run on every keystroke or change in the input.

const handleTitleInput = e => setTitle(e.target.value)
const handleDirectorInput = e => setDirector(e.target.value);
const handleRatingInput = e => setIMDBRating(e.target.value);
const handleOscarsInput = e => setHasOscars(e.target.checked);
// e.target.checked is a boolean value from the `checkbox` input

/*
If you click on the submit button, you’ll notice the entire app reloading and starting from scratch. This means that all of the state kept in components is lost, wiped out!

To prevent this we have to add an onSubmit event and a handler function to handles the form submission. This way we’ll be able to prevent the default behavior and also access the data that the user entered.
*/
const handleSubmit = (e) => {        
    e.preventDefault();
    //we use e.preventDefault() to cancel the default behavior of the form, the page reloads. 
    const newMovie = { title, director, IMDBRating, hasOscars };
 
    console.log("Submitted: ", newMovie);
    // Whenever the form in the AddMovie component is submitted we can call addNewMovie and pass it to the newMovie object.
    props.addMovie(newMovie); 

    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  }
 

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>

        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleTitleInput} 
        />
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director} 
            onChange={handleDirectorInput} 
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating} 
            onChange={handleRatingInput} 
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars} 
            onChange={handleOscarsInput} 
        />
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
