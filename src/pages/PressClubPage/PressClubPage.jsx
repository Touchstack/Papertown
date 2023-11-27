import GeneralNav from "../../Navbar/GeneralNav";
import PressClubs from "../../Component/PressClub/PressClubs";
import PerkAndGoodies from "../../Component/PressClub/PerkAndGoodies";
import FeaturedPressClubs from "../../Component/PressClub/FeaturedPressClubs";
import Footer from "../FooterPage/Footer";
import "../../Style/Style.css";

const PressClubPage = () => {
  return (
    <div> 
      <GeneralNav color="black" btnColor="black" bgShadow="shadow" />
      <PressClubs />
      <PerkAndGoodies />
      <FeaturedPressClubs />
      <div className="bg-[#B44DB8]">
        <Footer />
       </div>
    </div>
  );
};

export default PressClubPage;
