import icon from "../../assets/Images/base.svg";

const Header = () => {
  return (
    <div className="bg-[#FFD8FF] md:py-10 py-20">
      <div className="flex items-center justify-center m-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:mb-20 md:mb-20 sm:mb-80 mb-80">
          {/* Left Col */}
          <h3 className="font-Bold text-[#000] lg:text-7xl md:text-6xl sm:text-6xl text-6xl mt-8">
            Welcome to <br/> Papertown - <br/> Read, Write, Submit
          </h3>
          {/* Right Col*/}
          {/* <!-- First Card --> */}
          <div className="relative py-4 px-10">
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-3xl shadow-shadow lg:m-18 md:m-18 sm:m-8 m-8 absolute top-4 left-0 md:w-[488px] w-12/12  z-10">
                <div className="text-[#393939] text-lg pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold">
                    <img
                      src={icon}
                      alt="base.svg"
                      className="mr-2"
                    />
                    Submit writing samples made with love
                  </h3>
                  <div className="font-Medium m-7 text-sm text-start mt-2 text-13 max-w-[340px]">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
              </div>
              {/* <!-- Second Card --> */}
              <div className="bg-[#FFE9FF] rounded-3xl mt-32 ml-12 absolute md:top-6 top-20 left-6 md:w-[488px] w-6/6">
                <div className="text-[#393939] text-lg  pl-4 pr-4 m-4">
                  <h3 className="flex font-Bold">
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
