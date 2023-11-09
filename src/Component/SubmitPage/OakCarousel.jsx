import React, { useState } from 'react';
import Carousel from './Carousel';

const OakCarousel = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : texts.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < texts.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="text-carousel flex flex-col items-center p-4">
      <div className="text text-xl text-center mb-4">
        {texts[currentIndex]}
      </div>
      <div className="controls flex gap-4">
        <button onClick={showPrevious} className="left-icon cursor-pointer">
          <img src="src/assets/Images/arrow.png" className="w-1/2 h-1/2"/>
        </button>
        <button onClick={showNext} className="right-icon cursor-pointer">
        <img src="src/assets/Images/arrowRight.png" className="w-1/2 h-1/2"/>
        </button>
      </div>
    </div>
  );
};

export default OakCarousel;

