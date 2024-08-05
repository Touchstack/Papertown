import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import ImageAndText from "./ImageAndText";

function NewsDetails() {
  return (
    <div>
        <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
        <ImageAndText />
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default NewsDetails;
