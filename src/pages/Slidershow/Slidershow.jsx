import React, { useState } from "react";
import "../../Style/Slidershow.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { sliderData } from "../../../Component/sliderData";
import "../../Style/Slidershow.css";
import iamgeBD from "../..//assets/Images/image.png";
import Text from "../../../Component/Text";
import Icon1 from "../..//assets/Images/icon1.png";

function Slidershow({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <Text />
      <section className="slider">
        <HiChevronLeft className="slider__leftArrow" onClick={prevSlider} />
        <HiChevronRight className="slider__rightArrow" onClick={nextSlider} />
        <div>
          <div className="text-left">
            <h1
              className="text-red-500 
				text-3xl font-bold"
            >
              Our Partners
            </h1>
          </div>
          <div className="">
            {/* box section start */}
            <div className="py-4 flex justify-center">
              <div
                className="block p-6 max-w-sm 
					bg-white 
					rounded-lg border 
					border-gray-200 shadow-md"
              >
                <img src={Icon1} alt="" />
                <h1
                  className="mb-2 text-3xl
					font-bold 
					text-black 
					dark:text-white"
                >
                  Android
                </h1>
                <p class="font-normal text-black">
                  A short description of how the Papertown Imaginarium partners
                  with this compnay
                </p>
              </div>
            </div>
            {/* box section end */}
          </div>
        </div>
        {/* <img src={iamgeBD} alt="" className="slider__image" /> */}
      </section>
    </div>
  );
}

export default Slidershow;
