import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import './index.css';

const App = () => {
  const [movies, setMovies] = useState([{
            "Title": "The Godfather",
            "Year": "1972",
            "imdbID": "tt0068646",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather Part II",
            "Year": "1974",
            "imdbID": "tt0071562",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather Part III",
            "Year": "1990",
            "imdbID": "tt0099674",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg"
        }]);

  return <div class="bg-background">

    <MovieList movies={movies} />

  </div>
};

export default App;