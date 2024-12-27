import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import AiSearch from "./aiSearch";

const Browse = () => {
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showAiSearch ? (
        <AiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
