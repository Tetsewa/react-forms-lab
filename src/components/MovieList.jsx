import { useState } from "react";   
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList(){
    const [movies, setMovies] = useState(moviesDataJSON);
    const addNewMovie = (newMovie) => {
        // Create a new array
  const updatedMovies = [...movies, newMovie];
  setMovies(updatedMovies)
    }

    return (
        <div>
            <h2>Movie List</h2>
            <AddMovie addMovie={addNewMovie}/>
            {/* We passed the function addNewMovie as a prop to the child component <AddMovie />. */}

            {movies.map(movie => {
                return <MovieCard key = {movie._id} movie = {movie}/>
            })}
        </div>
    )
}
export default MovieList;