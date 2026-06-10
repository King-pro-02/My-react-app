import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/Components/Header/Header.css";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./Provider/AuthProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <App/>
    </AuthProvider>
  </StrictMode>,
);
