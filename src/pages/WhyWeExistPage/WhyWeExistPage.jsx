import GeneralNav from "../../Navbar/GeneralNav";
import Hero from "../../Component/WhyWeExist/Hero";
import Header from "../../Component/WhyWeExist/Header";
import Sponsor from "../../Component/WhyWeExist/Sponsor";
import Team from "../../Component/WhyWeExist/Team";
import Footer from "../FooterPage/Footer";
import "../../Style/Style.css";

const WhyWeExistPage = () => {
  return (
    <div>
      <div className="bg-[#FFD8FF]">
        <GeneralNav
          color="black"
          btnColor="black"
          bgColor="pink"
          bgShadow="whyShadow"
        />
      </div>
      <Header />
      <Hero />
      <Sponsor />
      <Team />
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
};

export default WhyWeExistPage;
