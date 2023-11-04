import React, { useState } from "react";
import "../../Style/Slidershow.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { sliderData } from "../../../Component/sliderData";
import "../../Style/Slidershow.css";
import iamgeBD from "../..//assets/Images/image.png";
import Text from "../../../Component/Text";
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
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                // <img src={slide.image} alt="image" className="slider__image" />
                <img src={iamgeBD} alt="" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Slidershow;
