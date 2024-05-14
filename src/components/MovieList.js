import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-[10px]">
      <h1 className="text-2xl py-[6px]">{title}</h1>
      <div className="flex overflow-x-auto w-screen">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
