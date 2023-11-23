import { useState } from 'react';
import LeftArrow from "../../assets/Images/iconLeft.png"
import RightArrow from "../../assets/Images/iconRight.png"
import Image1 from "../../assets/Images/unsplash_4LunKr1gTd8.png"
import Image2 from "../../assets/Images/image.png"

const ImageGallery = () => {
  const images = [{Image1}, {Image2}, 'image3.jpg']; // Replace with images
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

      <div className="absolute right-1 flex space-x-2">
        <button onClick={handlePrev} className="bg-gray-400 text-white p-2 rounded-lg">
          <img src={LeftArrow} alt="Previous image"/>;
        </button>
        <button onClick={handleNext} className="bg-gray-400 text-white p-2 rounded-lg">
        <img src={RightArrow} alt="Next image"/>;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
