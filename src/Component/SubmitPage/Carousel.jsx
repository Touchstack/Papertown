import React from 'react';
import OakCarousel from './OakCarousel';

const Carousel = () => {
  const texts = ["Don’t take our word for it. Hear what our past and current writers have to say", "Text2", "Text 3", "Text 4"];

  return (
    <div className="">
      <OakCarousel texts={texts} />
    </div>
  );
};

export default Carousel;
