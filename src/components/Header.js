import React from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const status = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  const handleGptSearchButtonClick = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unscubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 justify-between">
      {user && (
        <>
          <div className="flex cursor-pointer justify-between">
            <img className="w-44" src={LOGO} alt="Netflix Logo" />
            <button
              className="font-bold text-white my-1 relative top-[-10px]"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
            {/* <img
            // className="w-10 absolute right-[130px] top-5"
            className="w-10 h-10 relative top-[20px]"
            alt="user Icon"
            src={USER_AVATAR}
          /> */}
          </div>

          <div className="flex w-full justify-end relative top-[-63px] left-[-95px]">
            <button
              onClick={handleGptSearchButtonClick}
              className="px-[7px] h-[32px] bg-purple-800 text-white rounded-lg"
            >
              {!status ? "GPT Search" : "Homepage"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
