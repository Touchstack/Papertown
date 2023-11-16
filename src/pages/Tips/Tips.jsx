import { useState } from "react";
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
      <div className="mt-10 md:ml-20  font-Bold">
        <span className="text-5xl ">Tips for writing great pieces</span>
        {/* Tab and pill section start  */}
        <div className="container mt-8">
          <div className="flex mb-4  ">
            {/* Tabs */}
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => changeTab(tab.id)}
                className={`cursor-pointer py-2  px-4 mr-2 border ${
                  activeTab === tab.id
                    ? "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold border-2 border-grad-100 text-center bg-gray-50"
                    : "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold border-2 border-grad-100 text-center   bg-gray-50"
                }`}
              >
                {tab.label}
              </div>
            ))}
            <div className="ml-auto float-right">
              <button className="flex ml-auto justify-center items-center text-grad-400 rounded-3xl py-2 px-6 text-lg border-2 border-grad-900 font-Bold text-center  ">
                <CiSliderHorizontal />
                Filter
              </button>
            </div>
          </div>

          {/* Display content based on active tab or pill */}
          <div className="">
            {activeTab && (
              <div className="container md:py-5 md:py-5  sm:py-12 md:px-1">
                <div className="grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1  gap-5 gap-x-[200px] text-left">
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#B44DB8] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#FBCA23] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  {/* card section start */}
                  <div className="bg-white border-[1px] border-grad-100 rounded-2xl p-10 px-10 w-[387px] h-[292px] ">
                    <span className="flex mt-2 ml-2">
                      <p className="mr-5 bg-[#52B4AE] text-white rounded-3xl px-2 py-1">
                        Grade 6-12
                      </p>
                      <p className="border-[1px] border-[#292929] rounded-3xl px-2 py-1">
                        Menoir
                      </p>
                    </span>
                    <h5 className="text-5xl mt-2 mb-3">Sensory Heat Mapping</h5>
                    <span className="">
                      Writers will identify their favorite sensory memories and
                      transfer them to a visual heart map.
                    </span>
                  </div>
                  {/* card section end */}
                  <div className="text-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded-2xl">
                      Load more
                    </button>
                  </div>
                </div>

                {/* {activeTab} */}
              </div>
            )}
          </div>
        </div>

        {/* Tab and pill section end  */}
      </div>
    </div>
  );
}

export default Tips;
