import React, { useState } from "react";
import "../../Style/Slidershow.css";
// import Text from "../../Component/Text";
import Icon1 from "../../assets/Images/icon1.png";
import Icon2 from "../../assets/Images/icon2.png";
import Icon3 from "../../assets/Images/icon3.png";
import BGimage from "../../assets/Images/image.png";
import Left from "../../assets/Images/left.png";
import Right from "../../assets/Images/right.png";
import Marquee from "react-fast-marquee";
// import Text from "../../Component/Text";

function Slidershow() {
  return (
    <div>
      {/* <Text /> */}
      <div class="relative overflow-hidden">
        {/* opacity-[0.10] */}
        <div className="absolute  top-0 gap-10 ">
          <div className="marqueeText text-[128px]  font-Bold text-left font-[800] opacity-[0.10]">
            SOME OF OUR WRITING SAMPLES
          </div>
        </div>

        <div className=" ml-7">
          <div className="mb-[30px] top-[100px] relative">
            <img
              src={BGimage}
              alt="unsplashO5EMzfdxedg4326"
              className=" ml-7 h-[599px]  bg-no-repeat"
            />
          </div>
        </div>
      </div>

      <div className=" left-20 top-[399px]  w-[1192px] flex absolute items-start flex-col">
        {/* gap-[542px]   */}
        <div className=" flex items-start justify-between shrink">
          <span className=" mt-[40%] text-white text-3xl font-Bold font-[700]">
            <span>Our Partners</span>
          </span>
          <div className="absolute gap-[16px] mt-[40%]  flex items-start">
            <div>
              {/* <HiChevronLeft className="w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2  rounded-[50px] text-sm border-white z-10 text-center" /> */}
              <img
                src={Left}
                alt="Ellipse167249"
                className=" w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2 cursor-pointer  rounded-[50px] text-sm border-white z-10 text-center "
              />
            </div>
            <div>
              {/* <HiChevronRight className="w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2  rounded-[50px] text-sm border-white z-10 text-center" /> */}
              <img
                src={Right}
                alt="Ellipse167249"
                className="w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2  cursor-pointer rounded-[50px] text-sm border-white z-10 text-center "
              />
            </div>
          </div>
        </div>
        <div className="gap-[17px] flex flex-wrap justify-center mt-10 ">
          {/* Android starts */}
          <div className="gap-[10px] w-[386px]  h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
            <div className="gap-[15px] flex grow items-start flex-col justify-between">
              <div className="gap-[4px] flex flex-col jusitfy-between flex-grow">
                <img
                  src={Icon1}
                  alt="phandroidlogofill5196"
                  className="w-[48px] h-[48px]"
                />
                <span className="text-black w-[315px] text-[24px] font-Bold text-left font-[800] leading-[26px]">
                  <span>Android</span>
                </span>
              </div>
              <span className="home-login-text063">
                <span>
                  A short description of how the Papertown Imaginarium partners
                  with this compnay
                </span>
              </span>
            </div>
          </div>
          {/* Android ends */}
          {/* Android starts */}
          <div className="gap-[10px] w-[386px]  h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
            <div className="gap-[15px] flex grow items-start flex-col justify-between">
              <div className="gap-[4px] flex flex-col jusitfy-between flex-grow">
                <img
                  src={Icon1}
                  alt="phandroidlogofill5196"
                  className="w-[48px] h-[48px]"
                />
                <span className="text-black w-[315px] text-[24px] font-Bold text-left font-[800] leading-[26px]">
                  <span>Android</span>
                </span>
              </div>
              <span className="home-login-text063">
                <span>
                  A short description of how the Papertown Imaginarium partners
                  with this compnay
                </span>
              </span>
            </div>
          </div>
          {/* Android ends */}
          {/* Android starts */}
          <div className="gap-[10px] w-[386px]  h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
            <div className="gap-[15px] flex grow items-start flex-col justify-between">
              <div className="gap-[4px] flex flex-col jusitfy-between flex-grow">
                <img
                  src={Icon1}
                  alt="phandroidlogofill5196"
                  className="w-[48px] h-[48px]"
                />
                <span className="text-black w-[315px] text-[24px] font-Bold text-left font-[800] leading-[26px]">
                  <span>Android</span>
                </span>
              </div>
              <span className="home-login-text063">
                <span>
                  A short description of how the Papertown Imaginarium partners
                  with this compnay
                </span>
              </span>
            </div>
          </div>
          {/* Android ends */}
        </div>
      </div>
    </div>
  );
}

export default Slidershow;
