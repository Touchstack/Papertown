import { useState, useEffect } from "react";
import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import { CiSliderHorizontal } from "react-icons/ci";
import ArrowNew from "../../assets/Images/arrownew.png";
import BGimage from "../../assets/Images/pexels-katerina-holmes-5905479 1.png";
import { getCategoryListing } from "../../api";
import PromptCard from "./PromptCard/PromptCard";


// const tabsData = [
//   { id: "all", label: "All" },
//   { id: "sparks", label: "Sparks" },
//   { id: "lessons", label: "Lessons" },
//   { id: "project", label: "Project" },
//   { id: "videos", label: "Videos" },
// ];

function PromptsPage() {
  const [categories, setCategories] = useState([])


useEffect(() => {
   getCategoryListing()
      .then((category) => 
      setCategories(category) 
    )
}, [])


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
            <div className="relative lg:flex lg:flex-col md:px-5 ">
              <img
                src={BGimage}
                alt="image"
                className="lg:w-[544px] lg:h-[467px] w-[328px] h-[282px] items-center justify-center mb-10 mt-5"
              />

              
              <div className="flex justify-center items-center md:px-5">
                <div className="bg-[#FFFFFF] rounded-[16px] lg:rounded-[25px] md:rounded-[20px] absolute lg:top-[310px] top-[140px] xl:min-w-[500px] lg:min-w-[320px] md:w-[200] w-[310px] py-2  lg:py-4 md:py-2 ">
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
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={"cursor-pointer  py-2  px-4 mr-2  inline-block text-grad-400 rounded-3xl  text-lg font-Bold border-2 border-grad-100 text-center bg-gray-50"} 
                >
                  {category.name}
                </div>
              ))}
            </div>
            <div className="">
              {/* <button className="flex  gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f]  font-Bold">
                <CiSliderHorizontal />
                Filter
              </button> */}
            </div>
          </div>
          {/* Display content based on active tab or pill */}
        </div>
        <div className="lg:mx-24 my-8 md:mx-10 mx-8 ">
            <div className="items-center justify-center">

              <PromptCard />
              
              {/* {activeTab} */}
              <div className="flex md:ml-[50px] justify-center m-[50px]">
                <button className="border-[1px] leading-8 border-[#52B4AE] text-[#52B4AE] font-bold rounded-3xl text-[20px] w-[145px] h-[50px]">
                  Load More
                </button>
              </div>
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
