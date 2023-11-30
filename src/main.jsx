import React from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Readpage from "./pages/ReadPage/Readpage.jsx";
import PressClubPage from "./pages/PressClubPage/PressClubPage.jsx";
import WhyWeExistPage from "./pages/WhyWeExistPage/WhyWeExistPage.jsx";
import TeamDetails from "./Component/WhyWeExist/TeamDetails.jsx";
import PublicationsPage from "./pages/PublicationsPage/PublicationsPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage/SubmitPage.jsx";
import PromptsPage from "./pages/PromptsPage/PromptsPage.jsx";
import Tips from "./pages/Tips/Tips.jsx";
import SinglePublicationData from "./pages/PublicationsPage/SinglePublicationData.jsx";
import NewSection from "./pages/NewsPage/NewSection.jsx";
import NewsDetails from "./pages/NewsDetails/NewsDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <ErrorPage /> },
  { path: "/submit", element: <SubmitPage />, errorElement: <ErrorPage /> },
  { path: "/read", element: <Readpage />, errorElement: <ErrorPage /> },
  { path: "/tips", element: <Tips />, errorElement: <ErrorPage /> },
  { path: "/prompt", element: <PromptsPage />, errorElement: <ErrorPage /> },
  { path: "/news", element: <NewSection />, errorElement: <ErrorPage /> },
  { path: "/det", element: <NewsDetails />, errorElement: <ErrorPage /> },

  {
    path: "/pressclub",
    element: <PressClubPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/whyweexist",
    element: <WhyWeExistPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teamdetails",
    element: <TeamDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pressclub",
    element: <PressClubPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/publication",
    element: <PublicationsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/publication/*",
    element: <SinglePublicationData />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
