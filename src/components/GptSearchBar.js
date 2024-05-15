import React, { useRef } from "react";

const GptSearchBar = () => {
  const searchBarText = useRef();
  return (
    <div className="relative flex justify-center pt-[340px] z-20">
      <form className="bg-black w-[620px] bg-opacity-70 rounded-lg">
        <input
          type="text"
          className="p-[16px] m-[16px] w-[450px] text-black"
          placeholder="What would you like to watch today?"
          ref={searchBarText}
        ></input>
        <button className="py-[8px] px-[32px] bg-red-700 rounded-lg text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
