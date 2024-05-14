import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies ||
    !movies.upcomingMovies
  )
    return;
  return (
    <div className="absolute bg-black text-white z-20 top-[650px] px-[40px]">
      <div className="bg-transparent">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
