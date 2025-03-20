import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <div className="movie-poster">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="movie-info">
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
