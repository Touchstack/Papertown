import Marquee from "react-fast-marquee";
import OverLay from "./OverLay";
const PatnersComponent = () => {
  return (
    <div className="flex justify-center mb-10">
      {/*MArquee Div*/}
      <div className="absolute gap-10  z-10">
        <Marquee>
          <p className="marqueeText text-[50px] text-[#F2F2F2] md:text-[128px] font-Bold text-left font-[800] opacity-[0.20]">
            SOME OF OUR WRITING SAMPLES
          </p>
        </Marquee>
      </div>

      <OverLay />
    </div>
  );
};

export default PatnersComponent;
