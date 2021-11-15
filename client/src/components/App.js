import React, { useState } from 'react'
import SearchBar from "./SearchBar";
import MovieList from './MovieList';


function App() {
    const [movies, setMovies] = useState([])

    return (
        <div>
            <SearchBar setMovies={setMovies} />
            <MovieList movies={movies} />
        </div>
    )
}
export default App
