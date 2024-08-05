import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import SensoryHeat from "./SensoryHeat.jsx";

function TipRead() {
  return (
    <div>
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
       <div className="flex items-center justify-center">
        <SensoryHeat /> 
       </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default TipRead;
