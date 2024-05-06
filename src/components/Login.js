import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggleSignInForm = () => {
    const status = isSignedIn ? false : true;
    setIsSignedIn(status);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
        alt="netflix background image"
      />
      <form className="rounded-lg bg-opacity-80 absolute p-12 bg-black w-3/12 my-36 right-0 left-0 mx-auto text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#222839]"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-[#222839]"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#222839]"
        ></input>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignedIn
            ? " New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
