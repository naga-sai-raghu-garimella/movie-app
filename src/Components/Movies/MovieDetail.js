import React from "react";
import VideoBackgound from "./VideoBackgound";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// getting movie details by id
const MovieDetail = () => {
  const movies = useSelector((store) => store.movies);

  const { id } = useParams();

  if (!movies) return;

  return (
    <div className="relative">
      <VideoTitle movieId={id}></VideoTitle>
      <VideoBackgound movieId={id}></VideoBackgound>
    </div>
  );
};

export default MovieDetail;
