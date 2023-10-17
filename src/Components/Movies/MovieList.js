import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

// displaying movie lists
const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div>
        <h1 className="text-xl text-white font-semibold py-4 pl-2">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex gap-4">
            {movies.map((movie) => {
              return (
                <Link key={movie.id} to={`/detail/` + movie.id}>
                  <MovieCard posterPath={movie.poster_path} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
