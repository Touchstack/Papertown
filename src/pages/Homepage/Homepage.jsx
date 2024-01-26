import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";
import PatnersComponent from "../Slidershow/PatnersComponent";
import MarqueeApp from "../../Component/MarqueeText";
import CallToAction from "../../Component/CallToAction/CallToAction";
import Circle from "../../Component/Circle";
//import Tips from "../Tips/Tips";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-b bg-fixed from-purple-600 via-pink-500 to-purple-600 font-Medium overflow-hidden h-screen">
      
      <GeneralNav color="white" btnColor="white" bgColor="transparent" />
      <Circle />
      <RedefiningWriting />
      <MarqueeApp />
      <CallToAction className="overflow-hidden justify-center" />
      <HomeWhyWeEXist />
      <PatnersComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
