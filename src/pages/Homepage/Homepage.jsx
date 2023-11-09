import React from "react";
import SignUpNavbar from "../../Navbar/SignUpNavbar";
import RedefiningWriting from "../../Component/RedefiningWriting";
// import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";
// import Circle from "../../Component/Circle";

const Homepage = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen */}
      {/* <Circle> */}
      <SignUpNavbar />
      <RedefiningWriting />
      <HomeWhyWeEXist />
      <Footer />
      {/* </Circle> */}
    </div>
  );
};

export default Homepage;
