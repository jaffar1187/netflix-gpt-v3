import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //Entry point is here, this is creating routes and providing to App.js
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
