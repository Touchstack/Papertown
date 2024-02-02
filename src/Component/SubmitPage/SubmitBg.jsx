/* eslint-disable no-irregular-whitespace */

import "../../Style/CircleSubmit.css"

function SubmitBg() {
  return (
    <>

      <div className="circle bg-transparent z-[-1]"> 

        <div className="py-24 flex space-x-[200px] ">


         <div className="w-36 h-36 border-4 border-[#FFFFFF1A] mt-10 -ms-9 rounded-full">
          <div className="w-[59px] h-[59px] absolute flex-auto bg-pink-400 opacity-30 rounded-full" />
        </div>
          <div className="w-[40px] h-[40px] border-4 border-[#E1B300] m-[5px] rounded-full"></div>

          <div className="w-[40px] hidden md:flex h-[40px] border-4 border-[#FFC5FF] m-[5px] mt-[10%] ml-[100%] border-opacity-30 rounded-full"></div>

        </div>
        <div className="flex flex-row-reverse space-x-1 space-x-reverse">
          <div className="w-36 h-36 border-4 border-[#FFFFFF1A] mt-10 -me-9 rounded-full"></div>
          <div className="w-[276px] h-[276px] rounded-full border-8 border-pink-600 border-opacity-10" />

        </div>
        <div className="flex space-x-2 ml-[50%]">
          <div className="relative w-10 h-10 ">

            <div className="w-[40px] h-[40px] relative top-10 right-10 border-4 border-[#E1B300] rounded-full shadow-sm border-opacity-30"></div>
            <div className="w-[20px] h-[20px] absolute top-10 right-10 my-1 rounded-full bg-[#394DCA] opacity-30 z-2"></div>
          </div>
        </div>
        <div className="py-24 ml-[10%] mb-[100%] space-x-4">
          <div className="w-[121px] h-[121px] border-4 border-[#FFFFFF1A] my-9 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default SubmitBg;