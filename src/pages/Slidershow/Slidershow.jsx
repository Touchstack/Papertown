import React, { useState } from "react";
import "../../Style/Slidershow.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
// import { sliderData } from "../../../Component/sliderData";
import "../../Style/Slidershow.css";
import Text from "../../Component/Text";
import Icon1 from "../..//assets/Images/icon1.png";
import Icon2 from "../..//assets/Images/icon2.png";
import Icon3 from "../..//assets/Images/icon3.png";
import BGimage from "../..//assets/Images/image.png";

function Slidershow() {
  return (
    <div>
      <Text />

      <div>
        <img src={BGimage} alt="" />
        <HiChevronLeft className="" />
        <HiChevronRight className="" />
        <section className="relative flex justify-center items-center">
          <div>
            <div className="text-left">
              <h1 className="mr-10 text-red-500 text-3xl font-bold">
                Our Partners
              </h1>
            </div>
            <div className="flex flex-wrap content-center ml-8 -mx-1 lg:-mx-3    gap-7 ">
              {/* box section start */}
              <div className="flex flex-col  justify-center">
                <div className="block p-3 py-0  w-[330px]  h-[131px] max-w-sm bg-white rounded-2xl border items-center border-gray-200 shadow-md">
                  <img
                    src={Icon1}
                    alt=""
                    className="w-[40px] h-[40px] relative"
                  />
                  <h1 className="mb-2 text-[20px] font-bold text-black dark:text-white">
                    Android
                  </h1>
                  <p class="font-normal text-black text-[13px]">
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </p>
                </div>
              </div>
              {/* box section end */}
              {/* box section start */}
              <div className="flex flex-col  justify-center">
                <div className="block p-3 py-0  w-[330px]  h-[131px] max-w-sm bg-white rounded-2xl border items-center border-gray-200 shadow-md">
                  <img
                    src={Icon2}
                    alt=""
                    className="w-[40px] h-[40px] relative"
                  />
                  <h1 className="mb-2 text-[20px] font-bold text-black dark:text-white">
                    Apple Inc.
                  </h1>
                  <p class="font-normal text-black text-[13px]">
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </p>
                </div>
              </div>
              {/* box section end */}
              {/* box section start */}
              <div className="flex flex-col  justify-center">
                <div className="block p-3 py-0  w-[330px]  h-[131px] max-w-sm bg-white rounded-2xl border items-center border-gray-200 shadow-md">
                  <img
                    src={Icon3}
                    alt=""
                    className="w-[40px] h-[40px] relative"
                  />
                  <h1 className="mb-2 text-[20px] font-bold text-black dark:text-white">
                    Discord
                  </h1>
                  <p class="font-normal text-black text-[13px]">
                    A short description of how the Papertown Imaginarium
                    partners with this compnay
                  </p>
                </div>
              </div>
              {/* box section end */}
            </div>
          </div>
          {/* <img src={iamgeBD} alt="" className="slider__image" /> */}
        </section>
      </div>
    </div>
  );
}

export default Slidershow;
