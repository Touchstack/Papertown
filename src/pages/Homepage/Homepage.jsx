import React from "react";
import SignUpNavbar from "../../Navbar/SignUpNavbar";
import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import RedefiningWriting from "../../Component/RedefiningWriting";
import Footer from "../FooterPage/Footer";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen">
      <SignUpNavbar />
      <Slidershow />
      <HomeWhyWeEXist />
      <RedefiningWriting />
      <Footer />
    </div>
  );
};

export default Homepage;
