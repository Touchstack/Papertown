import { useState } from "react";
import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import { CiSliderHorizontal } from "react-icons/ci";
import ArrowNew from "../../assets/Images/arrownew.png";
import BGimage from "../../assets/Images/pexels-katerina-holmes-5905479 1.png";
const tabsData = [
  { id: "all", label: "All" },
  { id: "sparks", label: "Sparks" },
  { id: "lessons", label: "Lessons" },
  { id: "project", label: "Project" },
  { id: "videos", label: "Videos" },
];

function PromptsPage() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="">
      <div className="bg-[#FCF7E5] ">
      <GeneralNav
            bgColor="transparent"
            bgShadow="shadow"
            btnColor="black"
          />
          
        <div className="md:flex md:flex-row md:mt-20 mt-[50px] md:items-center md:justify-center ">
          {/* Text section */}
          <div className="lg:ml-10 ml-5">
            {/* Add "mr-8" for right margin */}
            <button className="leading-8 text-[#4F4F4F]  font-Bold text-[14px] border-[1px] border-[#4F4F4F] rounded-3xl px-5 py-2 mb-5">
              Featured spark
            </button>
            <div>
              <h5 className="lg:w-[599px] md:w-[400px] lg:text-[72px] font-Bold md:text-5xl text-5xl ">
                The pandemic effects on student learning
              </h5>
              <p className="text-[16px] mt-5 mb-5">
                Submit your articles by 10 April, 2023
              </p>
              <button className="leading-8 mb-10 bg-[#52B4AE] text-white font-Bold rounded-3xl md:text-[20px] text-[16px] md:w-[222px] h-[50px] w-[190px]">
                Submit your writing
              </button>
            </div>
          </div>

          {/* Card image section */}
          <div className="flex items-center justify-center ">
            <div className="relative lg:flex lg:flex-col">
              <img
                src={BGimage}
                alt="image"
                className="lg:w-[544px] lg:h-[467px] w-[328px] h-[282px] items-center justify-center mb-10"
              />
              <div className="flex justify-center items-center h-screen">
                <div className="bg-[#FFFFFF] rounded-[16px] lg:rounded-[25px] md:rounded-[20px] absolute lg:top-[310px] top-[140px] lg:w-[500px] md:w-[900] w-[310px] p-2  lg:p-4 md:p-2 ">
                  <div className="flex items-center">
                    <img
                      src={ArrowNew}
                      alt="image"
                      className="lg:mr-2 ml-1 mr-2 mb-[70px] lg:mb-11 md:mr-3 md:mb-[89px]"
                    />
                    <div className="grow-0">
                      <span className="lg:text-[20px] md:text-[16px] font-Bold">
                        View Submission Guidelines
                      </span>
                      <p>
                        It has survived not only five centuries but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 font-Bold">
        <div className="ml-3  md:px-20">
          <span className="md:text-5xl text-[36px]">Writing prompts</span>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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
                    <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                      Grade 6-12
                    </button>

                    <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                      Menoir
                    </button>
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

export default PromptsPage;
