import React from "react";
import SignUpNavbar from "../../Navbar/SignUpNavbar";
import Footer from "../../Component/Footer";
import Slidershow from "../Slidershow/Slidershow";

const Homepage = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-full">
      <SignUpNavbar />

      <Footer />
    </div>
  );
};

export default Homepage;
