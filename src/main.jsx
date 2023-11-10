import React from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage/SubmitPage.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <ErrorPage /> },
  { path: "/submit", element: <SubmitPage />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
