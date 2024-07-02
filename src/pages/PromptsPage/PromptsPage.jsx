import  { useState, useEffect, Fragment } from "react";
import Footer from "../FooterPage/Footer";
import GeneralNav from "../../Navbar/GeneralNav";
import { CiSliderHorizontal } from "react-icons/ci";
import { getCategoryListing, getPrompt, getPromptByCategoryId } from "../../api";
import PromptCard from "./PromptCard/PromptCard";
import { ClipLoader } from 'react-spinners';
import EmptyState from "../../Component/EmptyState/EmptyState";
import { Button } from "@/components/ui/button";

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

  // const handleFilterClick = () => {
  //   // Fetch all prompts
  //   fetchPrompts();
  //   setSelectedCategoryId(null); // Reset selected category ID
  // };

  const handleSubmitClick = () => {
    window.location.href = '/submit'
  };

  return (
    <div>
      <div className="bg-[#FCF7E5]">
        <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />

         <div className="md:px-40 p-6 xl:px-80 flex flex-col items-start justify-center">
           <h1 className="font-Bold text-[42px] md:text-[72px]">Writing prompts</h1>
            <div className="space-y-6">
              <p>
              Hello Writers, <br />
              Welcome to Prompts! <br />
              Prompts are writing assignments - they present scenarios/thoughts/questions for you to explore/respond to/answer through stories, poems, and essays.
              Writers (especially budding writers) should always be writing; this is how you get better at it. Prompt-based writing is a great way for you to continuously practice your craft and improve your skills with every new piece you tackle. After all, practice makes perfect! 
            </p>
            <p>
              There is no particular order to follow when exploring the prompts - you can start anywhere. Simply pick any prompt that excites or challenges you and see where it takes you. 
            </p>
            <p>     
              We encourage writers to explore the prompts through more than one writing type, even those that seemingly lend themselves to one or two particular forms. It is always thrilling to read pieces that tackle prompts through unexpected and unconventional ways. That is why we’re here, after all. To  be creative, inventive and unconventional! 
            </p>
             <p>
              Have fun writing!
             </p>
            </div>

            <Button onClick={handleSubmitClick} className="bg-[#52B4AE] mt-5 font-Bold rounded-[25px] md:w-2/12 text-white">
              Submit your writing
            </Button>
         </div>
        
      </div>

      <div className="mt-8 md:px-20 xl:px-80  font-Bold">
        <div className="px-10">
          <span className="md:text-5xl text-[36px]">Writing prompts</span>
        </div>

        {/* Tab and pill section start */}
        <div className=" my-8  mx-8">
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
                      >
                        <p>{category.name}</p>
                      </div>
                    ))}
                  </div>

                   {/* Filter button */}
                   <div className="flex justify-center mb-8">
                      <button
                        className="flex gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f] font-Bold"
                      >
                        <CiSliderHorizontal />
                         Filter
                      </button>
                    </div>
                </div>
              ) : (
                <>
                 <div className="flex justify-end mb-8">
                      <button
                        className="flex gap-5 rounded-3xl justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f] font-Bold"
                      >
                        <CiSliderHorizontal />
                         Filter
                      </button>
                    </div>
                <EmptyState />
              </>
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
