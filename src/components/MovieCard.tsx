import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMG_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;