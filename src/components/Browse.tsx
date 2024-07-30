import React, { useEffect } from "react";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      {" "}
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
