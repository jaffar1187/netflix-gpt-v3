import { useSelector } from "react-redux";
import useTrailerVideoId from "../hooks/useTrailerVideoId";

const VideoBg = ({ id }) => {
  useTrailerVideoId(id);
  const finalVideoTrailerId = useSelector(
    (store) => store.movies.addTrailerVideo
  );

  if (!finalVideoTrailerId) return;

  return (
    <div className="absolute top-[-86px]">
      <iframe
        className="absolute w-screen aspect-video"
        src={`https://www.youtube.com/embed/${finalVideoTrailerId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
