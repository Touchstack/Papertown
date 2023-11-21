import GeneralNav from "../../Navbar/GeneralNav";
import RedefiningWriting from "../../Component/RedefiningWriting";
import Slidershow from "../Slidershow/Slidershow";
import HomeWhyWeEXist from "../../Component/HomeWhyDoWeExist";
import Footer from "../FooterPage/Footer";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-Medium h-screen">
      <GeneralNav color="white" btnColor="white" />
      <RedefiningWriting />
      <Slidershow />
      <HomeWhyWeEXist />
      <Footer />
    </div>
  );
};

export default Homepage;
