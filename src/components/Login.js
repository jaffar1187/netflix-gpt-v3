import React, { useRef, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import validateCredentialsCriteria from "../utils/validateCredentialsCriteria";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    const status = isSignedIn ? false : true;
    setIsSignedIn(status);
    setErrorMessage(null);
  };

  const authenticate = () => {
    let result = null;
    if (name.current && name.current.value) {
      result = validateCredentialsCriteria(
        email.current.value,
        password.current.value,
        name.current.value
      );
    } else {
      result = validateCredentialsCriteria(
        email.current.value,
        password.current.value,
        "NA NA",
        isSignedIn
      );
    }

    setErrorMessage(result);
    //return on error
    if (result) return;
    //Proceed if credentials criteria is met.
    else if (!result) {
      //Signup
      if (!isSignedIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                //auth.userName will have latest data.
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                  })
                );
                navigate("/browse");
              })
              .catch((error) => {
                navigate("/error");
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + error.message);
          });
      }

      //Sign In
      else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            // setErrorMessage(null);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Incorrect email or password, Please try again.");
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
        alt="netflix background image"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg bg-opacity-80 absolute p-12 bg-black w-3/12 my-36 right-0 left-0 mx-auto text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#222839]"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-[#222839]"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#222839]"
          ref={password}
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={authenticate}
        >
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
