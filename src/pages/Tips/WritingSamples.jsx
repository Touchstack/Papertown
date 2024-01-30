import ReadCard from "./ReadCard";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

function WritingSamples() {
  return (
    <div>
      <div className="flex justify-between">
        <h6 className="text-[#000000] lg:text-5xl md:text-5xl text-4xl font-Bold">
          Other writing samples
        </h6>
        <div className="flex lg:mr-20 mr-10 md:mr-20 gap-5">
          <button className="border-[2px] border-[#52B4AE] p-3 rounded-full hover:bg-[#2dd4bf]">
            <FaChevronLeft className="text-lg  text-[#52B4AE]  " />
          </button>
          <button className="border-[2px] border-[#52B4AE] p-3 rounded-full hover:bg-[#2dd4bf]">
            <FaChevronRight className="text-lg  text-[#52B4AE] " />
          </button>
        </div>
      </div>
      <div>
        <ReadCard />
      </div>
    </div>
  );
}

export default WritingSamples;
