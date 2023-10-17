import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../Movies/MovieCard";
import { useState, useEffect } from "react";

//displaying top rated movies, search and filtering by movie name
const TopRated = () => {
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState(null);

  useEffect(() => {
    setFilterMovies(movies);
  }, []);

  const movies = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies) return;

  if (!filterMovies) return;

  const filteredMovies = () => {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  const Filter = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="pt-20 px-14">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Top Rated</h1>
        <div className="flex gap-3">
          <input
            className="px-4 py-1 rounded-md"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={Filter}
          ></input>
          <button
            className="bg-red-500 text-white rounded-md px-2 hover:bg-red-300 py-1"
            type="submit"
            onClick={() => setFilterMovies(filteredMovies)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-5 space-y-14 sm:grid-cols-3 spacing-x-8 pb-16 pt-4">
        {filterMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`/detail/` + movie.id}>
              <MovieCard className="" posterPath={movie.poster_path} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
