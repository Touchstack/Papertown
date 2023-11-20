// import SignUpNavbar from "../../Navbar/SignUpNavbar";
import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";
// import Circle from "../../Component/Circle";
//import Tips from "../Tips/Tips";
//import PromptsPage from "../PromptsPage/PromptsPage";

const Homepage = () => {

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen ">
      {/**/}
      {/* <Circle> */}
      {/* <SignUpNavbar /> */}
      <GeneralNav color="white" btnColor="white"/>
      <RedefiningWriting />
      <Slidershow />
      <HomeWhyWeEXist />
      <Footer />
    </div>
  );
};

export default Homepage;
