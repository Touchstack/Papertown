import React from 'react';


const MarqueeText = () => {
  return (
    <div className="flex text-left">
    <div className="marquee font-Bold text-5xl ">
      <span>WRITE<span className="text-cyan-600">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-cyan-600">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-cyan-600">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-cyan-600">SUBMIT</span> READ  .</span>
      <div className="marquee font-Bold text-5xl">
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      <span>WRITE<span className="text-yellow-500">SUBMIT</span> READ  .</span>
      </div>
    </div>
   </div>
  
  );
};

const MarqueeApp = () => {
  return (
    <div className="">
      <MarqueeText />
    </div>
  );
};

export default MarqueeApp;


