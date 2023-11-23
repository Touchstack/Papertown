import icon from "../../assets/Images/base.svg";

const Header = () => {
  return (
    <div className="bg-[#FFD8FF] py-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:mb-20 md:mb-20 sm:mb-80 mb-80">
          {/* Left Col */}
          <h3 className="font-Bold text-[#000] lg:text-7xl md:text-6xl sm:text-6xl text-6xl mt-8 text-center">
            Welcome to Papertown - Read, Write, Submit
          </h3>
          {/* Right Col*/}
          <div className="container mx-auto relative mt-8">
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-3xl shadow-shadow absolute top-4 left-0 w-full h-full z-10">
                <div className="text-[#393939] text-lg mt-7 pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold">
                    <img src={icon} alt="base.svg" className="mr-2" />
                    Submit writing samples made with love
                  </h3>
                  <div className="font-Medium m-7 text-sm text-start mt-2 text-13 max-w-[340px]">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
              </div>

              <div className="bg-[#FFE9FF] rounded-3xl mt-32 ml-12 absolute top-1 left-0 w-full h-full">
                <div className="text-[#393939] text-lg mt-6 pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold mt-8">
                    <img src={icon} alt="base.svg" className="mr-2" />
                    Get your writing samples published
                  </h3>
                  <div className="font-Medium m-7 text-sm text-start mt-2 text-13 max-w-[450px]">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
