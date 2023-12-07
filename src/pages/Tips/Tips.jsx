import { useState } from "react";
import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import { CiSliderHorizontal } from "react-icons/ci";
const tabsData = [
  { id: "all", label: "All" },
  { id: "sparks", label: "Sparks" },
  { id: "lessons", label: "Lessons" },
  { id: "project", label: "Project" },
  { id: "videos", label: "Videos" },
];

function Tips() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />

      <div className="mt-20 font-Bold">
        <div className="ml-3 md:px-20">
          <span className="md:text-5xl text-[36px]">
            Tips for writing great pieces
          </span>
        </div>
        {/* Tab and pill section start  */}
        <div className=" lg:mx-24 my-8 md:mx-10 mx-8 ">
          <div className="flex md:justify-between flex-wrap justify-start">
            <div className="grid md:grid-cols-5 grid-cols-3 gap-2 mb-4">
              {/* Tabs */}
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`cursor-pointer  py-2  px-4 mr-2  ${
                    activeTab === tab.id
                      ? "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold border-2 border-grad-100 text-center bg-gray-50"
                      : "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold border-2 border-grad-100 text-center   bg-gray-50"
                  }`}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="">
              <button className="flex  gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f]  font-Bold">
                <CiSliderHorizontal />
                Filter
              </button>
            </div>
          </div>
          {/* Display content based on active tab or pill */}
        </div>
        <div className="lg:mx-24 my-8 md:mx-10 mx-8 ">
          {activeTab && (
            <div className="items-center justify-center">
              <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 ">
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Processing elements of sound
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <a href="">
                        <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                          Grade 6-12
                        </button>
                      </a>
                    </a>
                    <a href="">
                      <a href="">
                        <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                          Menoir
                        </button>
                      </a>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    A definition of superego
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      {" "}
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      {" "}
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      {" "}
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      {" "}
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
                {/* card section start */}
                <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
                  <span className="flex md:mt-2 md:ml-2">
                    <a href="">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>
                    </a>

                    <a href="">
                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </a>
                  </span>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
                    Sensory Heat Mapping
                  </h5>
                  <span className="md:text-[16px] text-[15px]">
                    Writers will identify their favorite sensory memories and
                    transfer them to a visual heart map.
                  </span>
                </div>
                {/* card section end */}
              </div>
              {/* {activeTab} */}
              <div className="flex md:ml-[50px] justify-center m-[50px]">
                <button className="border-[1px] leading-8 border-[#52B4AE] text-[#52B4AE] font-bold rounded-3xl text-[20px] w-[145px] h-[50px]">
                  Load More
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tab and pill section end  */}
      </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default Tips;
