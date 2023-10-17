import React from "react";
import { OPTIONS } from "../ApiLinks/constants";
import { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

// display title, overview for the background video
const VideoTitle = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      OPTIONS
    );
    const json = await data.json();
    setMovieDetails(json);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  if (!movieDetails) return;

  return (
    <div className="absolute top-[30%] text-white max-w-xl ml-20">
      <h1 className="text-5xl font-extrabold">{movieDetails.original_title}</h1>
      <p className="my-5 font-semibold">{movieDetails.overview}</p>
      <div className="flex gap-2">
        <button className="border bg-white px-7 py-2 rounded-md text-black flex items-center hover:bg-gray-300 font-bold">
          <BsPlayFill />
          Play
        </button>
        <button className="border px-3 hover:bg-slate-300 rounded-md font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
