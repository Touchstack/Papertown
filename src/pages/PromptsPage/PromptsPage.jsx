import  { useState, useEffect, Fragment } from "react";
import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import { CiSliderHorizontal } from "react-icons/ci";
import BGimage from "../../assets/Images/pexels-katerina-holmes-5905479 1.png";
import { getCategoryListing, getPrompt, getPromptByCategoryId } from "../../api";
import PromptCard from "./PromptCard/PromptCard";
import { ClipLoader } from 'react-spinners';
import EmptyState from "../../Component/EmptyState/EmptyState";

function PromptsPage() {
  const [categories, setCategories] = useState([]);
  const [promptData, setPromptData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch categories
    getCategoryListing()
      .then((category) => setCategories(category))
      .catch((error) => console.error("Error fetching Category:", error));

    // Fetch all prompts initially
    fetchPrompts();
  }, []);

  const fetchPrompts = () => {
    setLoading(true);
    if (selectedCategoryId) {
      // Fetch prompts by selected category ID
      getPromptByCategoryId(selectedCategoryId)
        .then((res) => {
          setPromptData(res?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching prompts by category:", error);
          setLoading(false);
        });
    } else {
      // Fetch all prompts
      getPrompt()
        .then((res) => {
          setPromptData(res?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching prompts:", error);
          setLoading(false);
        });
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setLoading(true);
    // Fetch prompts by selected category ID
    getPromptByCategoryId(categoryId)
      .then((res) => {
        setPromptData(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prompts by category:", error);
        setLoading(false);
      });
  };

  const handleFilterClick = () => {
    // Fetch all prompts
    fetchPrompts();
    setSelectedCategoryId(null); // Reset selected category ID
  };

  return (
    <div>
      <div className="bg-[#FCF7E5]">
        <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />

        <div className="md:flex md:flex-row md:mt-20 mt-[50px] md:items-center md:justify-center">
          {/* Text section */}
          <div className="lg:ml-10 ml-5">
            <button className="leading-8 text-[#4F4F4F] font-Bold text-[14px] border-[1px] border-[#4F4F4F] rounded-3xl px-5 py-2 mb-5">
              Featured spark
            </button>
            <div>
              <h5 className="lg:w-[599px] md:w-[400px] lg:text-[72px] font-Bold md:text-5xl text-5xl">
                The pandemic effects on student learning
              </h5>
              <p className="text-[16px] mt-5 mb-5">
                Submit your articles by 10 April, 2023
              </p>
            </div>
          </div>

          {/* Card image section */}
          <div className="flex items-center justify-center">
            <div className="relative lg:flex lg:flex-col md:px-5">
              <img
                src={BGimage}
                alt="image"
                className="lg:w-[544px] lg:h-[467px] w-[328px] h-[282px] items-center justify-center mb-10 mt-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 font-Bold">
        <div className="ml-3 md:px-20">
          <span className="md:text-5xl text-[36px]">Writing prompts</span>
        </div>

        {/* Tab and pill section start */}
        <div className="lg:mx-24 my-8 md:mx-10 mx-8">
          {loading ? (
            <div className="flex items-center justify-center my-[10%]">
              <ClipLoader color="#B44DB8" loading={loading} size={35} />
            </div>
          ) : (
            <>
              {promptData.length > 0 ? (
                <div className="flex md:justify-between flex-wrap justify-start">
                  <div className="grid md:grid-cols-5 grid-cols-3 gap-2 mb-4">
                    {/* Tabs */}
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        className={`cursor-pointer flex items-center justify-center w-[100px] h-[50px] mr-2  text-grad-400 rounded-3xl text-lg font-Bold border-2 border-grad-100 text-center ${
                          selectedCategoryId === category._id
                            ? "bg-gray-200" // Change background color if selected
                            : "bg-gray-50"
                        }`}
                        onClick={() => handleCategoryClick(category._id)}
                      >
                        <p>{category.name}</p>
                      </div>
                    ))}
                  </div>

                   {/* Filter button */}
                   <div className="flex justify-center mb-8">
                      <button
                        className="flex gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f] font-Bold"
                        onClick={handleFilterClick}
                      >
                        <CiSliderHorizontal />
                         Reset
                      </button>
                    </div>
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}
        </div>
        {/* Tab and pill section end */}

        {/* Display prompts */}
        {!loading && promptData.length > 0 && (
          <div className="lg:mx-24 my-8 md:mx-10 mx-8">
            <div className="items-center justify-center">
              <Fragment>
                <PromptCard data={promptData} />
                <div className="flex md:ml-[50px] justify-center m-[50px]">
                  <button className="border-[1px] leading-8 border-[#52B4AE] text-[#52B4AE] font-bold rounded-3xl text-[20px] w-[145px] h-[50px]">
                    Load More
                  </button>
                </div>
              </Fragment>
            </div>
          </div>
        )}
        {/* Display prompts end */}
      </div>

      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default PromptsPage;
