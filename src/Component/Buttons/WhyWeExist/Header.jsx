import icon from "../../assets/Images/base.svg";

const Header = () => {
  return (
    <div className="bg-[#FFD8FF]">
      <div className="container mx-auto py-32">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-12">
          {/* Left Col */}
          <h3 className="font-Bold text-[#000] text-6xl">
            Welcome to Papertown - Read, Write, Submit
          </h3>

          <div className="container mx-auto relative">
            <div className="flex justify-center items-center">
              <div className="rounded-3xl bg-white shadow-customShadow absolute top-4 left-0 w-full h-full z-10">
                <div className="text-[#393939] text-lg mt-7 pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold">
                    <img src={icon} alt="base.svg" className="mr-2" />
                    Submit writing samples made with love
                  </h3>
                  <div className="font-Medium m-8 text-sm text-start mt-2 text-13 max-w-[340px]">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
              </div>

              <div className="rounded-3xl mt-32 ml-12 bg-[#FFE9FF] absolute top-0 left-0 w-full h-full">
                <div className="text-[#393939] text-lg mt-6 pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold">
                    <img src={icon} alt="base.svg" className="mr-2" />
                    {/* sm:w-[299.74px] sm:p-24 sm:flex-row sm:justify-between sm:gap-10 */}
                    Get your writing samples published
                  </h3>
                  <div className="font-Medium m-8 text-sm text-start mt-2 text-13 max-w-[450px]">
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
