import React from "react";
import Marquee from "react-fast-marquee";
import "../Style/Slidershow.css";

function Text() {
  return (
    <Marquee>
      <div className="gap-[10px] top-[2505px] left-[-194px] w-[1866px] flex p-[0 20px] overflow-hidden opacity-[0.10]">
        <span className="text-[128px] font-Bold text-left font-[800] leading-loose">
          <span>SOME OF OUR WRITING SAMPLES</span>
        </span>
      </div>
    </Marquee>
  );
}

export default Text;
