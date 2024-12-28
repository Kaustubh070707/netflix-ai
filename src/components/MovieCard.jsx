import React from "react";
import { TMDB_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        alt="Movie Card"
        src={TMDB_CDN_URL + posterPath}
        className="opacity-80 w-full h-64 object-cover"
      />
    </div>
  );
};

export default MovieCard;
