import React from "react";
import { useSelector } from "react-redux";

const AiMovieSuggestion = () => {
  const ai = useSelector((store) => store.ai);
  const moviesNames = ai?.aiMovies;

  if (!moviesNames || moviesNames.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
        No suggestions available
      </div>
    );
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-4 w-full max-w-6xl z-10">
      <div className="overflow-x-auto">
        <div className="flex space-x-8 py-8">
          {moviesNames.map((movie, index) => (
            <div
              key={index}
              className="relative bg-black bg-opacity-40 rounded-lg overflow-hidden shadow-lg w-64 md:w-72 transition-transform transform hover:scale-105"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-96 object-cover rounded-lg transition-all duration-500 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-end justify-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                    {movie.original_title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiMovieSuggestion;
