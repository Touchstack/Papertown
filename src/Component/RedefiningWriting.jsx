import React from "react";
import BackgroundImg from "../assets/Images/Background.png";
import Rectangle from "../assets/Images/Rectangle.png";

const RedefiningWriting = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mt-12">
      <div className="lg:py-4 md:py-3 sm:py-2 py-4 px-2">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
            {/* Left Col */}
            <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
              <p className="font-Bold lg:text-5xl md:text-4xl sm:text-4xl text-[#F2F2F2] text-4xl text-left">
                Redefining writing, one
                <span className="text-[#FBCA23]"> spark</span> at a time
              </p>
              <p className="font-Regular lg:text-lg md:text-lg sm:text-base pt-8 text-[#E8E8E8] leading-7 text-sm tracking-wider text-13">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software.
              </p>
              <button className="font-SemiBold bg-[#52B4AE] text-center text-xl text-[#FFFFFF] rounded-full p-3 w-48 mt-16 lg:text-xl md:text-lg sm:text-base pt-3 break-normal md:break-all">
                Join Papertown
              </button>
            </div>
            {/* Right Col */}
            <div className="relative py-60">
              <div className="flex justify-center items-center">
                <img
                  src={Rectangle}
                  alt="Rectangle.png"
                  style={{ height: "auto" }}
                  className="absolute top-12 left-0 w-full h-full"
                />
                <img
                  src={BackgroundImg}
                  alt="Background.png"
                  style={{ height: "auto" }}
                  className="absolute top-0 left-0 w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedefiningWriting;
