import Marquee from "react-fast-marquee";
import OverLay from "./OverLay";

const PatnersComponent = () => {
  return (
    <div className="relative flex justify-center mb-10 overflow-hidden">
      {/* Marquee Div */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Marquee className="w-full">
          <p className="marqueeText text-[50px] text-[#F2F2F2] md:text-[128px] font-bold opacity-20">
            SOME OF OUR WRITING SAMPLES
          </p>
        </Marquee>
      </div>
      <div className="relative z-10">
        <OverLay />
      </div>
    </div>
  );
};

export default PatnersComponent;
