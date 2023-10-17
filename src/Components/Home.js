import React from "react";
import ImageSlider from "./ImageSlider";
import useNowPlaying from "./CustomHooks/useNowPlaying";
import MovieList from "./Movies/MovieList";
import { useSelector } from "react-redux";
import usePopular from "./CustomHooks/usePopular";
import useTopRated from "./CustomHooks/useTopRated";
import useUpcoming from "./CustomHooks/useUpcomming";

const Home = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();

  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <>
      <div className="ml-6">
        <ImageSlider />
        <MovieList title="Now Showing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </>
  );
};

export default Home;
