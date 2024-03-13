import GeneralNav from "../../../Navbar/GeneralNav"
import { getPromptById } from "../../../api"
import { useParams,  useLocation } from 'react-router-dom'; 
import React, { useEffect, useState } from 'react';
import DetailsForm from './DetailsForm'

const PromptsDetails = () => {
   
    const { id } = useParams();
    const [promptDetails, setPromptDetails] = useState({});

    const location = useLocation();
    
    useEffect(() => {
     if (location.pathname === `/promptdetails/${id}`) {
        window.scrollTo(0, 0);
    }

      getPromptById(id) // Fetch prompt details using the ID
          .then((res) => {
              // console.log('This is prompt details:', res.data);
              setPromptDetails(res.data);
          })
          .catch((error) => {
              console.error('Error fetching prompt details:', error);
          });
  }, [id, location]);

  return (
    <div className="">
        
      <div className="bg-[#FCF7E5] ">
         <GeneralNav
            bgColor="transparent"
            bgShadow="shadow"
            btnColor="black"
          />
          
        <div className="md:flex md:flex-row md:mt-20 mt-[50px] md:items-center md:justify-left ">
          {/* Text section */}
          <div className="lg:px-[80px] px-[50px]">
            {/* Add "mr-8" for right margin */}
            <button className="leading-8 text-[#4F4F4F]  font-Bold text-[14px] border-[1px] border-[#4F4F4F] rounded-3xl px-5 py-2 mb-5">
              {promptDetails?.category?.name}
            </button>
            <div>
              <h5 className="lg:w-3/5 md:w-6/12 lg:text-[72px] font-Bold md:text-5xl lg:mb-1 mb-4 text-5xl ">
                {promptDetails?.title}
              </h5>
              <p className="text-[16px] lg:mt-5 mt-3 lg:mb-5 pb-[20px]">
                 {promptDetails?.description}
              </p>
              
            </div>
          </div>
          </div>
          </div>
          <div className="flex items-center justify-center mt-4 ">
          <div className="lg:px-[80px] px-[50px]">
            {/* SCENARIO 1 */}
            <h2 className="font-Bold text-4xl lg:mt-8 mt-5">Scenario 1</h2>
             
              <p className="font-VarelaRegular lg:mt-6 md:mt-5 mt-3">
                 {promptDetails?.submission_guidelines}
              </p>


             {/* References */}
            <div>
              <h2 className="font-Bold text-4xl lg:mb-4 mb-3  lg:mt-6 mt-3">References</h2>
              <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2 md:w-[700px]">
                1. {promptDetails?.resources}
              </p>
            </div>
          </div> 
          </div>
          <div>
          <DetailsForm id={id} title={promptDetails?.title} />
          </div>
          </div>
    )
  }


export default PromptsDetails