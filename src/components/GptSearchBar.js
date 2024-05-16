import React, { useRef } from "react";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const searchBarText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log("called");
    if (!searchBarText?.current?.value) return;
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchBarText?.current?.value +
      ". Only give me names of 5 movies comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Animal, Golmaal";

    const searchString = searchBarText?.current?.value;
    console.log(searchString);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("chatCompletion", chatCompletion);
  };
  return (
    <div className="relative flex justify-center pt-[340px] z-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-[620px] bg-opacity-70 rounded-lg"
      >
        <input
          type="text"
          className="p-[16px] m-[16px] w-[450px] text-black"
          placeholder="What would you like to watch today?"
          ref={searchBarText}
        ></input>
        <button
          onClick={handleGptSearchClick}
          className="py-[8px] px-[32px] bg-red-700 rounded-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
