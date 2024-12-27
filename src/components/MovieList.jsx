import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return null; // Return null if there are no movies
  }

  return (
    <div className="px-6">
      <h1 className="text-3xl font-thin text-white py-8">{title}</h1>
      <div className="overflow-x-auto flex space-x-4">
        {movies.map((m) => {
          return (
            <div key={m.id} className="flex-shrink-0">
              <MovieCard posterPath={m.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
