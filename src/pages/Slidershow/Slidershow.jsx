import React, { useState } from "react";
import "../../Style/Slidershow.css";
import Text from "../../Component/Text";
import Icon1 from "../../assets/Images/icon1.png";
import Icon2 from "../../assets/Images/icon2.png";
import Icon3 from "../../assets/Images/icon3.png";
import BGimage from "../../assets/Images/image.png";
import Left from "../../assets/Images/left.png";
import Right from "../../assets/Images/right.png";

function Slidershow() {
  return (
    <div>
      {/* top-[2891px] */}
      <Text />
      <div className="mr-10">
        <div className="ml-[55px] pl-[20px] mt-20">
          <img
            src={BGimage}
            alt="unsplashO5EMzfdxedg4326"
            className="top-[0px] ml-7  h-[599px] bg-no-repeat   mt-20  "
          />
        </div>
        <div className=" gap-[24px] top-[230px] left-[125px] w-[1192px] flex absolute items-start flex-col">
          <div className="gap-[542px]  w-[1192px] flex items-start justify-between shrink">
            <span className="mr-10 text-white text-3xl font-Bold font-[700]">
              <span>Our Partners</span>
            </span>
            <div className="gap-[20px] mt-[40%] ml-10 flex items-start">
              <div>
                {/* <HiChevronLeft className="w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2  rounded-[50px] text-sm border-white z-10 text-center" /> */}

                <img
                  src={Left}
                  alt="Ellipse167249"
                  className="w-[50px] h-[50px] text-white bg-gray-500 border-solid border-2 cursor-pointer  rounded-[50px] text-sm border-white z-10 text-center "
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
          <div className="gap-[17px]  flex items-start">
            {/* Android starts */}
            <div className="gap-[10px] w-[386px]  h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
              <div className="gap-[15px] flex grow items-start flex-col justify-between">
                <div className="gap-[4px] flex items-start flex-col">
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
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </span>
                </span>
              </div>
            </div>
            {/* Android ends */}
            {/* Apple Inc. starts */}
            <div className="gap-[10px] w-[386px] h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
              <div className="gap-[15px] flex grow items-start flex-col justify-between">
                <div className="gap-[4px] flex items-start flex-col">
                  <img
                    src={Icon2}
                    alt="phandroidlogofill5196"
                    className="w-[48px] h-[48px]"
                  />
                  <span className="text-black w-[315px] text-[24px] font-Bold text-left font-[800] leading-[26px]">
                    <span>Apple Inc.</span>
                  </span>
                </div>
                <span className="home-login-text063">
                  <span>
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </span>
                </span>
              </div>
            </div>
            {/* Apple Inc. ends */}
            {/* Discord starts */}
            <div className="gap-[10px] w-[386px] h-[187px] flex p-[28px] items-start shrink  flex-col bg-white rounded-[30px]">
              <div className="gap-[15px] flex grow items-start flex-col justify-between">
                <div className="gap-[4px] flex items-start flex-col">
                  <img
                    src={Icon3}
                    alt="phandroidlogofill5196"
                    className="w-[48px] h-[48px]"
                  />
                  <span className="text-black w-[315px] text-[24px] font-Bold text-left font-[800] leading-[26px]">
                    <span>Discord</span>
                  </span>
                </div>
                <span className="home-login-text063">
                  <span>
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </span>
                </span>
              </div>
            </div>
            {/* Discord ends */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slidershow;
