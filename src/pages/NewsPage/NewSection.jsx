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
        <p className="lg:text-25 md:text-[20px] w-10/12  ">
         Wondering what’s happening at Papertown and in the general world of creative writing for young writers?
          <br /> Welcome to our News page!
          <br /> This is where you find information about what we are up to and what is happening with us. We also scout for writing opportunities (contests, competition, prizes, projects, programs, fellowships, festivals, etc) and share them with you here. 
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
