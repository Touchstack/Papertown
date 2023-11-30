import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import ImageAndText from "./ImageAndText";

function NewsDetails() {
  return (
    <div>
      {/* Navbar section starts */}
      <div className="md:mx-[77px] text-center rounded-full max-w-6xl pt-10 px-4 py-1 ">
        <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      </div>
      {/* Navbar section ends */}

      <div>
        <ImageAndText />
      </div>

      {/* Footer section starts */}
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
      {/* Footer section ends */}
    </div>
  );
}

export default NewsDetails;
