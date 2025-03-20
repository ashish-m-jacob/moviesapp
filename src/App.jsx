import { useEffect, useState } from "react";
import "./App.css";
import movieIcon from "./assets/movieIcon.png";

import MovieCard from "./components/MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=bdaa470a";

function App() {
  const [hasMovies, setHasMovies] = useState([]);

  const [movieName, setMovieName] = useState("");

  const handleClick = () => {
    setMovieName(document.querySelector("input").value);
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setHasMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(movieName);
  }, [handleClick]);

  return (
    <>
      <div className="app">
        <div className="navbar">
          <div className="logo">
            <img src={movieIcon} alt="logo" />
            <h1>Movie App</h1>
          </div>

          <div className="search">
            <input
              type="text"
              onChange={() => {}}
              placeholder="Search for a movie"
            />

            <button type="button" onClick={handleClick}></button>
          </div>
        </div>

        {hasMovies?.length > 0 ? (
          <div className="container">
            {hasMovies.map((movie, index) => {
              return <MovieCard movie={movie} key={index} />;
            })}
          </div>
        ) : (
          <div className="no-result">
            <p>No movies found</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
