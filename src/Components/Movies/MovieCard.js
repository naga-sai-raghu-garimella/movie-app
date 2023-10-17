import React from "react";
import { IMAGE_URL } from "../ApiLinks/constants";

//movie cards
const MovieCard = ({ posterPath }) => {
  return (
    <div className="h-48 w-40 hover:scale-110">
      <img className="rounded-lg" src={IMAGE_URL + posterPath} alt=""></img>
    </div>
  );
};

export default MovieCard;
