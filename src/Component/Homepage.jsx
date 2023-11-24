import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen pt-10">
      {/**/}
      {/* <Circle> */}
      {/* <SignUpNavbar /> */}
      <GeneralNav color="white" btnColor="white" />
      <RedefiningWriting />
      <Slidershow />
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 ">
        <HomeWhyWeEXist />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
