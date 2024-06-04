import React from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ReactDOM from "react-dom/client";
import {createStore} from 'redux'
import { Provider } from "react-redux";
import myReducers from "./context/reducers";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Readpage from "./pages/ReadPage/Readpage.jsx";
import PressClubPage from "./pages/PressClubPage/PressClubPage.jsx";
import WhyWeExistPage from "./pages/WhyWeExistPage/WhyWeExistPage.jsx";
import TeamDetails from "./Component/WhyWeExist/TeamDetails.jsx";
import PublicationsPage from "./pages/PublicationsPage/PublicationsPage.jsx";
import AdminDashBoard from "./pages/AdminPage/AdminDashBoard.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage/SubmitPage.jsx";
import PromptsPage from "./pages/PromptsPage/PromptsPage.jsx";
import Tips from "./pages/Tips/Tips.jsx";
import SinglePublicationData from "./pages/PublicationsPage/SinglePublicationData.jsx";
import EventsPage from "./pages/EventsPage/EventsPage.jsx";
import NewSection from "./pages/NewsPage/NewSection.jsx";
import NewsDetails from "./pages/NewsDetails/NewsDetails.jsx";
import Profile from "./pages/ProfilePage/Profile.jsx";
import EventsDetails from "./pages/EventsDetails/EventsDetails.jsx";
import PrivacyPolicy from "./pages/Doc/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/Doc/TermsOfUse.jsx";
import TipRead from "./pages/Tips/TipRead.jsx";
import Details from "./pages/PromptsPage/Details/Details.jsx";
import AccountSetupJourney from "./pages/SignUpForm/AccountSetupJourney.jsx";
import SetUpAccount from "./pages/SignUpForm/SetUpAccount.jsx";
import GetToKnowYou from "./pages/SignUpForm/GetToKnowYou.jsx";
import SchoolInformation from "./pages/SignUpForm/SchoolInformation.jsx";
import GuardianInformation from "./pages/SignUpForm/GuardianInformation.jsx";
import GuardianAccountSetup from "./pages/GuardianSignUpForm/GuardianAccountSetUp.jsx";
import AboutYourself from "./pages/GuardianSignUpForm/AboutYourSelf.jsx";
import AboutTheChild from "./pages/GuardianSignUpForm/AboutTheChild.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import FactsAndQuestions from "./pages/FAQs/FactsAndQuestions.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <ErrorPage /> },
  { path: "/submit", element: <SubmitPage />, errorElement: <ErrorPage /> },
  { path: "/read", element: <Readpage />, errorElement: <ErrorPage /> },
  { path: "/lessons&notes", element: <Tips />, errorElement: <ErrorPage /> },
  { path: "/tip-read", element: <TipRead />, errorElement: <ErrorPage /> },
  { path: "/prompt", element: <PromptsPage />, errorElement: <ErrorPage /> },
  { path: "/promptdetails/:id", element: <Details />, errorElement: <ErrorPage /> },
  { path: "/news", element: <NewSection />, errorElement: <ErrorPage /> },
  { path: "/det", element: <NewsDetails />, errorElement: <ErrorPage /> },
  { path: "/profile", element: <Profile />, errorElement: <ErrorPage /> },

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

  { path: "/events", element: <EventsPage />, errorElement: <ErrorPage /> },
  {
    path: "/eventsdetails",
    element: <EventsDetails />,
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
  {
    path: "/setupaccount",
    element: <SetUpAccount />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/contactus",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/faqs",
    element: <FactsAndQuestions />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/admin/*",
    element: <AdminDashBoard />,
    errorElement: <ErrorPage />,
  },

  { path: "/events", element: <EventsPage />, errorElement: <ErrorPage /> },

  {
    path: "/eventsdet",
    element: <EventsDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/termsofuse",
    element: <TermsOfUse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <AccountSetupJourney />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/setupaccount",
    element: <SetUpAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/gettoknowyou",
    element: <GetToKnowYou />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/school-info",
    element: <SchoolInformation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/guardian-info",
    element: <GuardianInformation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/guardian-account",
    element: <GuardianAccountSetup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/about-yourself",
    element: <AboutYourself />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/about-child",
    element: <AboutTheChild />,
    errorElement: <ErrorPage />,
  },
]);

const myStore = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Provider store={myStore}>
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
