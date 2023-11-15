import React, { useState } from 'react';
import LeftArrow from "../assets/Images/icons8-back-to-50.png"
import RightArrow from "../assets/Images/icons8-next-page-50.png"
import Image1 from "../assets/Images/unsplash_4LunKr1gTd8.png"

const ImageGallery = () => {
  const images = [{Image1}, 'src/assets/unsplash_4LunKr1gTd8.png', 'image3.jpg']; // Replace with images
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="relative">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full" />

      <div className="absolute bottom-1 right-1 flex space-x-2">
        <button onClick={handlePrev} className="bg-gray-400 text-white p-2 rounded-full">
          <img src={LeftArrow} alt="Previous image"/>;
        </button>
        <button onClick={handleNext} className="bg-gray-400 text-white p-2 rounded-full">
        <img src={RightArrow} alt="Next image"/>;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
