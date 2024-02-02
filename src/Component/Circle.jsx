import "../Style/CircleSubmit.css";

function Circle() {
  return (
    <>
      <div className="circle z-0">
        <div className="py-24 hidden md:flex md:space-x-[340px]">
          <div className="w-[276px] h-[276px] rounded-full border-[10px] opacity-60 border-opacity-50 md:translate-x-70  border-[#FFFFFF1A]" />
          <div className="w-[40px] h-[40px] border-4 border-[#E1B300] opacity-60 m-[5px] rounded-full"></div>
          <div className="w-[40px] h-[40px] border-4 border-[#FFC5FF] opacity-60 m-[5px] md:mt-[10%] md:ml-[100%] rounded-full"></div>
          <div className="w-[59px] h-[59px] mt-[-6%] hidden lg:flex bg-pink-600 rounded-full border-4 opacity-60 border-pink-600" />
        </div>
    
        
        <div className="flex space-x-2 md:ml-[50%]">
          <div className="relative w-12 h-12">
            <div className="w-[60px] h-[60px] border-4 border-[#E1B300] opacity-60 rounded-full shadow-sm"></div>
            <div className="w-[40px] h-[40px] absolute top-0 right-0 my-1 opacity-60 rounded-full bg-[#394DCA] z-2"></div>
            
          </div>
        <div className="w-[151px] h-[151px] rounded-full border-8 border-pink-600 border-opacity-30 opacity-60 mr-[80%]" />

        </div>
        <div className="w-[276px] h-[276px] hidden rounded-full  opacity-60 border-opacity-50 ml-[80%] top-[60%] border-[#FFFFFF1A] border-[10px]" />
        <div className="w-[276px] h-[276px]  rounded-full  opacity-60 border-opacity-50 ml-[40%] border-[#FFFFFF1A] border-[10px]" />
      </div>
    </>
  );
}

export default Circle;
