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
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen pt-10">
      {/* <Circle> */}
      <GeneralNav color="white" btnColor="white" bgColor="transparent" />
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
