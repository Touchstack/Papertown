import React from "react";
import SignUpNavbar from "../../Navbar/SignUpNavbar";
import Slidershow from "../Slidershow/Slidershow";
import Footer from "../FooterPage/Footer";
// import Circle from "../../Component/Circle";

const Homepage = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen */}
      {/* <Circle> */}
      <SignUpNavbar />
      <Slidershow />

      <Footer />
      {/* </Circle> */}
    </div>
  );
};

export default Homepage;
