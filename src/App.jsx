import { Component } from "react";
import Login from "./pages/Login";
import Application from "./pages/Register";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default () => {
  return <RouterProvider router={router} />;
};
  