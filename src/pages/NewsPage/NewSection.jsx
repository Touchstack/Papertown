import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import FeaturedNew from "./FeaturedNew";

function NewSection() {
  return (
    <div>
        <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      {/* Navbar section ends */}
      {/* News section start  */}
      <div className="lg:ml-20 lg:mt-14 md:ml-20 md:mt-12 ml-7 mt-10">
        {/* header text start  */}
        <h5 className="lg:text-[72px] md:text-[60px] text-[30px] font-Bold">
          News
        </h5>
        {/* header text end  */}
        <p className="lg:text-25 md:text-[20px] lg:w-[620px] md:w-[600px] w-[330px] ">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing
        </p>
      </div>

      {/* Featured New section start  */}
      <div className="lg:mt-20 lg:ml-20 md:ml-20 md:mt-12  ml-7 mt-10">
        <FeaturedNew />
      </div>

      {/* Featured New section end  */}
      {/* News section ends  */}
      {/* Footer section starts */}
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
      {/* Footer section ends */}
    </div>
  );
}

export default NewSection;
