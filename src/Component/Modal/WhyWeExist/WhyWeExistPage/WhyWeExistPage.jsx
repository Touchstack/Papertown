import GeneralNav from "../../Navbar/GeneralNav";
import Hero from "../../Component/WhyWeExist/Hero";
import Header from "../../Component/WhyWeExist/Header";
import Sponsor from "../../Component/WhyWeExist/Sponsor";
import Team from "../../Component/WhyWeExist/Team";

import Footer from "../FooterPage/Footer";
import "../../Style/Style.css";
import TeamDetails from "../../Component/WhyWeExist/TeamDetails";

const WhyWeExistPage = () => {
  return (
    <div>
      <div className="bg-[#FFD8FF] py-12">
        <div className="mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-1">
          <GeneralNav
            color="black"
            btnColor="black"
            bgColor="pink"
            bgShadow="whyShadow"
          />
        </div>
      </div>
      <Header />
      <Hero />
      <Sponsor />
      <Team />
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
      <TeamDetails />
    </div>
  );
};

export default WhyWeExistPage;
