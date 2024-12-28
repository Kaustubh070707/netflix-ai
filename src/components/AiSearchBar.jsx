import React, { useRef } from "react";
import { API_OPTIONS, BG_IMAGE, SRCBG_IMAGE } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import mistralSearch from "../utils/mistral";
import { addAiMovieResult } from "../utils/aiSlice";

const AiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //searching movies in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results[0];
  };

  //integrating AI

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aiQuery =
      "Act as a movie recommendation system. Based on the query '" +
      searchText.current.value +
      "', suggest 6 movies, separated by commas, without any extra text. Format the response as: 'Movie 1, Movie 2, Movie 3, Movie 4, Movie 5'.";

    const chatResponse = await mistralSearch.chat.complete({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: aiQuery }],
    });
    const moviesArray = chatResponse.choices[0].message.content
      .split(", ")
      .map((movie) => movie.replace(/\"/g, "").replace(/\.$/, "").trim());

    const promiseArray = moviesArray.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addAiMovieResult(tmdbResults));
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full opacity-70">
        <img
          src={BG_IMAGE}
          srcSet={SRCBG_IMAGE}
          alt="Background"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Search Bar */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 p-4 w-full max-w-sm bg-black bg-opacity-60 rounded-lg z-20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              ref={searchText}
              id="movie"
              name="movie"
              type="text"
              className="w-full p-2 border border-gray-300 rounded opacity-80"
              placeholder={lang[langKey].aiSearchPlaceholder}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-900 text-white rounded"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
