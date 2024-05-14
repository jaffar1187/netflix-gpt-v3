import React from "react";
import { IMG_CDN_POSTS } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[180px] pr-[10px] cursor-pointer mb-[10px]">
      <img alt="movie image" src={IMG_CDN_POSTS + posterPath} />
    </div>
  );
};

export default MovieCard;
