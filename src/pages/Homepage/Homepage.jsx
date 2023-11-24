import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";
import PatnersComponent from "../Slidershow/PatnersComponent";
import MarqueeApp from "../../Component/MarqueeText";
import CallToAction from "../../Component/CallToAction/CallToAction";
// import Circle from "../../Component/Circle";
//import Tips from "../Tips/Tips";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen pt-10">
      {/* <Circle> */}
      <GeneralNav color="white" btnColor="white" bgColor="transparent" />
      <RedefiningWriting />
      <MarqueeApp />
      <CallToAction />
      <HomeWhyWeEXist />
      <PatnersComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
