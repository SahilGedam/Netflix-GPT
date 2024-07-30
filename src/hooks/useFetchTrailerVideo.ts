import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSLice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((store: any) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.result[0];
    
    // setTrailerId(trailer?.key);
    dispatch(addTrailerVideo(trailer?.key));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useFetchTrailerVideo;
