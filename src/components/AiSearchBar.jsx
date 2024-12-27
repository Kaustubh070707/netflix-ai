import React from "react";
import { BG_IMAGE, SRCBG_IMAGE } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const AiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = e.target.movie.value;
    console.log("Movie submitted:", movie);
    e.target.reset();
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={BG_IMAGE}
          srcSet={SRCBG_IMAGE}
          alt="Background"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-4 w-full max-w-sm bg-black bg-opacity-40 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
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
