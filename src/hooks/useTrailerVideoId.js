import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideoId = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      let result = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      result = await result.json();
      result = result.results;

      const officialTrailerVideo = result.filter((video) => {
        if (video.type === "Trailer" && video.name === "Official Trailer")
          return true;
        else return false;
      });

      if (!officialTrailerVideo || !officialTrailerVideo.length)
        officialTrailerVideo = result[0];

      dispatch(addTrailerVideo(officialTrailerVideo[0].key));
    } catch (err) {
      console.log(err);
      return;
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideoId;
