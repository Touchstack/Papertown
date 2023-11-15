import SignUpNavbar from "../../Navbar/SignUpNavbar";
import PressClubs from "../../Component/PressClub/PressClubs";
import PerkAndGoodies from "../../Component/PressClub/PerkAndGoodies";
import FeaturedPressClubs from "../../Component/PressClub/FeaturedPressClubs";
import Footer from "../FooterPage/Footer";
import Style from "../../Style/Style.css";

const PressClubPage = () => {
  return (
    <div>
      <div className="custom-shadow mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-1 mt-12">
        <SignUpNavbar />
      </div>
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
