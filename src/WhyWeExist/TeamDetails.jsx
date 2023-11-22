import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../../pages/FooterPage/Footer";
import RuthDumany from "../../assets/Images/Ruth.svg";

const TeamDetails = () => {
  return (
    <div>
      <div className="mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-1">
        <GeneralNav
          color="black"
          btnColor="black"
          bgColor="pink"
          bgShadow="whyShadow"
        />
      </div>
      <div className="bg-[#FAFAFA] p-12 text-center lg:text-xl md:text-xl sm:text-lg">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-4">
            <div className="flex justify-center items-center mx-8 lg:mt-0 md:mt-0 mt-12">
              <img src={RuthDumany} alt="Mercedes" />
            </div>
            <div className="md:mt-0 sm:mt-16 mt-16">
              <p className="font-Regular text-[#6D6D6D] text-xl lg:text-xl md:text-lg sm:text-lg lg:text-left md:text-left text-center max-w-[3000px]">
                <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#191919]">
                  Ruth Dumany
                </h3>
                Quality Assurance
                <p className="mt-6">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
};

export default TeamDetails;
