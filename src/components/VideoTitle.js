import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="pt-[120px] px-24 relative z-10 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold w-[400px]">{original_title}</h1>
      <p className="py-6 text-lg w-[450px] overflow-x-clip">{overview}</p>
      <div>
        <button className="cursor-pointer bg-white text-black w-32 h-12 text-lg rounded-lg text-center hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="cursor-pointer bg-gray-500 text-white w-32 h-12 text-lg rounded-lg text-center mx-4">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
