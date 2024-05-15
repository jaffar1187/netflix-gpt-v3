import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { HOME_PAGE_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="z-20 text-white">
      <img
        className="absolute"
        src={HOME_PAGE_BG}
        alt="netflix background image"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
