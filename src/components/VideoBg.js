import { useSelector } from "react-redux";
import useTrailerVideoId from "../hooks/useTrailerVideoId";

const VideoBg = ({ id }) => {
  useTrailerVideoId(id);
  const finalVideoTrailerId = useSelector(
    (store) => store.movies.addTrailerVideo
  );

  if (!finalVideoTrailerId) return;

  return (
    <div>
      <iframe
        className="absolute w-screen aspect-video"
        src={`https://www.youtube.com/embed/${finalVideoTrailerId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
