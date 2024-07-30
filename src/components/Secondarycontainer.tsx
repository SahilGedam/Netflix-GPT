import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store: any) => store.movies);
  console.log(movies.nowPlayingMovies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-80 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Continue Watching"}
            movies={movies.nowPlayingMovies}
          />
        </div>{" "}
      </div>
    )
  );
};

export default Secondarycontainer;
