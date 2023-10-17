import React from "react";
import { OPTIONS } from "../ApiLinks/constants";
import { useEffect, useState } from "react";

// fetch the trailer video and set as background
const VideoBackgound = ({ movieId }) => {
  const [trailerVideos, setTrailerVideos] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      OPTIONS
    );
    const json = await data.json();
    setTrailerVideos(json);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  if (!trailerVideos) return;

  const filterData = trailerVideos.results.filter(
    (video) => video.type === "Trailer"
  );
  const trailer = filterData.length ? filterData[0] : trailerVideos.results[0];
  const iFrameSrc = `https://www.youtube.com/embed/${trailer.key}?si=WnW2ZMV_EyEqWAxE?rel=0?version=3&autoplay=1&&controls=0&&showinfo=0`;
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={iFrameSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share loop"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackgound;
