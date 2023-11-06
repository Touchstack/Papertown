import React from "react";
import "../src/Style/Circle.css";

function Circle() {
  return (
    <>
      <div className="circle bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="py-24 flex  space-x-[200px] ">
          <div className="w-36 h-36 border-4 border-[#FFFFFF1A]  mt-10 -ms-9 rounded-full"></div>
          <div className="w-[40px] h-[40px]  border-4 border-[#E1B300] m-[5px]  rounded-full"></div>
          <div className="w-[40px] h-[40px] border-4 border-[#FFC5FF] m-[5px] mt-[10%] ml-[100%] rounded-full"></div>
        </div>
        <div className="flex flex-row-reverse space-x-1 space-x-reverse">
          <div className="w-36 h-36 border-4 border-[#FFFFFF1A]  mt-10 -me-9 rounded-full"></div>
        </div>
        <div className="flex space-x-2 ml-[50%]">
          <div className="relative w-12 h-12 ">
            <div className="w-[40px] h-[40px] border-4 border-[#E1B300]  rounded-full shadow-sm"></div>
            <div className="w-[20px] h-[20px] absolute top-0 right-0  my-1  rounded-full bg-[#394DCA] z-2"></div>
          </div>
        </div>
        <div className="py-24 ml-[10%] mb-[100%] space-x-4">
          <div className="w-[121px] h-[121px] border-4 border-[#FFFFFF1A] my-9 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Circle;
