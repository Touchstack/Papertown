import React from "react";
import ImageGallery from "./ImageGallery";

/*import RightImage from "../assets/unsplash_O5EMzfdxedg.png"*/



const CallToAction = () => {
  return (
    <div className="bg-transparent">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gray-300 lg:mx-24 md:mx-16 mx-12 rounded-lg items-center mt-10">
        <div className=" flex-col justify-center py-4 px-10 ">
          <h1 className="lg:text-5xl md:text-3xl text-2xl text-black font-Bold mb-4 tracking-wider items-center ">
            Technovation 
            <p>announces</p> 
            <p>finalists</p>
          </h1>
          <p className="text-black text-lg mb-2 items-center font-Regular">
           It was popularised in the 1960s with the release of Letraset sheets <p>containing Lorem Ipsum passages, and more recently</p><p> with desktop publishing software.</p>
          </p>
          <button
            className="bg-[#099B96]
            
    
           hover:bg-[#099B96] cursor-pointer 
          place-self-start mt-8 font-Bold 
          lg:mb-16 space-y-4 sm:flex-row sm:justify-center 
          sm:space-y-0 sm:space-x-4 
          transition-transform 
          duration-700 ease-in-out
           transform hover:scale-110 
           justify-center items-center py-3 lg:px-8 md:px-6
            sm:px-4 px-4 text-white rounded-full w-30 h-13 "
          >
            Read more
          </button>
         
        </div>
        <div className="inset-80 bg-gray-900 object-cover rounded-lg aspect-w-1 aspect-h-1">
        <ImageGallery/>
        </div>
       
       
        
        </div>
      </div>
    
  );
};

export default CallToAction;
