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
import { HOME_PAGE_BG } from "../utils/constants";

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
        src={HOME_PAGE_BG}
        alt="netflix background image"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg bg-opacity-80 relative p-[48px] bg-black w-[400px] top-[150px] right-0 left-0 mx-auto text-white"
      >
        <h1 className="font-bold text-3xl py-[16px]">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-[16px] my-[16px] w-full bg-[#222839]"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-[16px] my-[16px] w-full bg-[#222839]"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-[16px] my-[16px] w-full bg-[#222839]"
          ref={password}
        ></input>
        <p className="text-red-500 font-bold text-lg py-[8px]">
          {errorMessage}
        </p>
        <button
          className="p-[16px] my-[16px] bg-red-700 w-[100%] rounded-lg"
          onClick={authenticate}
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-[16px] my-[16px] cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignedIn
            ? " New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
