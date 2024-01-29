import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";
import PatnersComponent from "../Slidershow/PatnersComponent";
import MarqueeApp from "../../Component/MarqueeText";
import CallToAction from "../../Component/CallToAction/CallToAction";

//import Tips from "../Tips/Tips";

const Homepage = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, #9747FF 7.29%, #DF327B 84.19%, #9747FF 100%)',
  };

  return (

    <div className="font-Medium h-screen" style={gradientStyle}>
      <GeneralNav color="white" btnColor="white" bgColor="transparent" />
      
      <RedefiningWriting />
      <MarqueeApp />
      <CallToAction className="overflow-hidden justify-center" />
      <HomeWhyWeEXist />
      <PatnersComponent />
      <Footer />
    </div>
  );
}

export default Homepage;
