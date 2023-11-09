import React from "react";
import SignUpNavbar from "../../Navbar/SignUpNavbar";
import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import RedefiningWriting from "../../Component/RedefiningWriting";
import Footer from "../FooterPage/Footer";
// import Circle from "../../Component/Circle";

const Homepage = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen */}
      {/* <Circle> */}
      <SignUpNavbar />
      <Slidershow />
      {/* <<<<<<< HEAD */}
      {/* ======= */}
      <HomeWhyWeEXist />
      <RedefiningWriting />
      {/* >>>>>>> ed882d3ee67838c23430436c16683dd18a875689 */}
      <Footer />
      {/* </Circle> */}
    </div>
  );
};

export default Homepage;
