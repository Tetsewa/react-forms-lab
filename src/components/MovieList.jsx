import { useState } from "react";   
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList(){
    const [movies, setMovies] = useState(moviesDataJSON);
    const [moviesData, setMoviesData] = useState(moviesDataJSON);

    const addNewMovie = (newMovie) => {
        // Create a new array
  const updatedMovies = [...movies, newMovie];
  const updatedMoviesData = [...moviesData, newMovie];

  setMovies(updatedMovies);
  setMoviesData(updatedMoviesData); 
    }
//we’ll now connect the FilterMovies component with the MovieList and use it to filter the list of movies.
    
    const filterMovieList = (str) => {
        let filteredMovies;

        if (str ==="All"){
            filteredMovies = moviesData;
        }
        else {
            filteredMovies = moviesData.filter((movie) =>{
                return movie.title[0].toLowerCase() === str.toLowerCase();
            })
        }
        setMovies(filteredMovies);
    }


    return (
        <div>
            <FilterMovies filterMovies = {filterMovieList}/> 
            
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