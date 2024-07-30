import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackGround = ({ movieId }) => {
  const trailerId = useSelector((store: any) => store.movies?.trailerVideo);
  useFetchTrailerVideo(movieId);
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video h-screen"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
