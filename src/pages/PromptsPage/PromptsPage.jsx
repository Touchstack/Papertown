import { useState } from "react";
import Footer from "../FooterPage/Footer";
import Navbar from "../../Navbar/Navbar";
import { CiSliderHorizontal } from "react-icons/ci";
import ArrowNew from "../../assets/Images/arrownew.png";
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
    <div>
      <div className="bg-[#FCF7E5] w-[1440px] h-[866px]">
        <div>
          {/* Nvavbar section start */}
          <div>
            <div className="  <Navbar />">
              <Navbar />
              {/* Nvavbar section end */}
              <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[110px] h-[36px]">
                Featured spark
              </button>
              <div className=" ">
                <div>
                  <h5 className="text-[72px] font-Bold mb-5">
                    The pandemic effects on student learning
                  </h5>
                  <p className="text-[16px] mb-10">
                    Submit your articles by 10 April, 2023
                  </p>
                  <button className=" leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl text-[20px] w-[222px] h-[50px]">
                    Submit your writing
                  </button>
                </div>
                {/* crad image section start  */}
                <div className="">
                  <div className="bg-[#FFFFFF]  rounded-[25px] w-[488px] h-[113px] px-10 py-4 ">
                    <span className=" flex text-[20px] font-[800]">
                      <img src={ArrowNew} alt="" className="mr-2" />
                      View Submission Guidelines
                    </span>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged
                    </p>
                  </div>
                </div>
                {/* crad image section end  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:ml-20  font-Bold">
        <div className="ml-3">
          <span className="md:text-5xl text-[36px]">Writing prompts</span>
        </div>
        {/* Tab and pill section start  */}
        <div className="container mt-8 ">
          <div className="">
            <div className="flex mb-4">
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
              <div className="ml-auto float-right break-word">
                <button className="flex ml-auto justify-center items-center text-grad-400 rounded-3xl py-2 px-6 text-lg border-2 border-grad-900 font-Bold text-center  ">
                  <CiSliderHorizontal />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Display content based on active tab or pill */}
          <div className="">
            {activeTab && (
              <div className="container md:py-5 md:py-5  sm:py-12 md:px-1">
                <div className="grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1  gap-5 gap-x-[200px] text-left items-center justify-center">
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#52B4AE] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#B44DB8] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-[387px] md:h-[292px] w-[290px] h-[198px]  ">
                    <span className="flex md:mt-2 md:ml-2">
                      <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FBCA23] text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                        Grade 6-12
                      </button>

                      <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                        Menoir
                      </button>
                    </span>
                    <h5 className="md:text-5xl text-[27px] font-Bold  mt-2 md:mb-3">
                      Sensory Heat Mapping
                    </h5>
                    <span className="md:text-[16px] text-[15px]">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                </div>
                <div className="flex justify-center mt-10 mb-10">
                  <button className="border-[1px] leading-8 border-[#52B4AE] text-[#52B4AE] font-bold rounded-3xl text-[20px] w-[145px] h-[50px] mx-auto">
                    Load more
                  </button>
                </div>

                {/* {activeTab} */}
              </div>
            )}
          </div>
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