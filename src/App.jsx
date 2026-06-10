import { Component } from "react";
// import Home from "./pages/Home";
import Login from "./pages/Login"
import Application from "./pages/Register";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
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
    element: (
      <Register />
    )
  },
  {
    path: "profile",
    element: (
      <Profile />
    )
  }
]);


export default ()=>{

    return(
 <RouterProvider router={router} />
    );
}
 

