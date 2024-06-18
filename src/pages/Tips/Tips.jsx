import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import LessonsAndNotesCard from "./LessonsAndNotesCard";


// const tabsData = [
//   { id: "all", label: "All" },
//   { id: "sparks", label: "Sparks" },
//   { id: "lessons", label: "Lessons" },
//   { id: "project", label: "Project" },
//   { id: "videos", label: "Videos" },
// ];

function Tips() {
  // const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // const changeTab = (tabId) => {
  //   setActiveTab(tabId);
  // };

  return (
    <div>
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      <div className="mt-20 font-Bold">
        <div className="ml-3 md:px-20">
          <span className="md:text-5xl text-[36px]">
          Lessons & Notes
          </span>

          <p className="pt-5 font-VarelaRegular text-[16px]">
          Hello Writers, <br /> Welcome to Lessons & Notes!
          <br />Here, you will find short notes, lessons in brief, and little packages of practical tips on various aspects of writing and being a writer.
          We hope you find something that helps you in your brainstorming, writing, reviewing, and editing processes.
          </p>
        </div>
        {/* Tab and pill section start  */}
        <div className=" lg:mx-24 my-8 md:mx-10 mx-8 ">
          <div className="flex md:justify-between flex-wrap justify-start">
            {/* <div className="grid md:grid-cols-5 grid-cols-3 gap-2 mb-4">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`cursor-pointer  py-2  px-4 mr-2  ${
                    activeTab === tab.id
                      ? "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold  text-center bg-gray-400"
                      : "inline-block text-grad-400 rounded-3xl py-2 px-6  text-lg font-Bold border-2 border-grad-100 text-center   bg-gray-50"
                  }`}
                >
                  {tab.label}
                </div>
              ))}
            </div> */}
            {/* <div className="">
              <button className="flex  gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f]  font-Bold">
                <CiSliderHorizontal />
                Filter
              </button>
            </div> */}
          </div>
         
        </div>
        <div className="lg:mx-24 my-8 md:mx-10 mx-8 ">
            <div className="items-center justify-center">
              <LessonsAndNotesCard />
          </div>
        </div>      
      </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default Tips;
