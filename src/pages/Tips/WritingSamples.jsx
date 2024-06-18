import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import LessonsAndNotesCard from "./LessonsAndNotesCard";

function WritingSamples() {
  return (
    <div>
      <div className="flex justify-between p-10">
        <h6 className="text-[#000000] lg:text-5xl md:text-5xl text-2xl font-Bold">
          Other writing Lessons
        </h6>
        <div className="flex lg:mr-20 mr-10 md:mr-10 gap-5">
          <button className="lg:border-[2px] border-[1px]  border-[#52B4AE] lg:p-3 px-1 md:px-3 py-0 rounded-full hover:bg-[#2dd4bf]">
            <FaChevronLeft className="lg:text-lg  text-[#52B4AE]  " />
          </button>
          <button className="lg:border-[2px] border-[1px]  border-[#52B4AE] lg:p-3 px-1 md:px-3 py-0 rounded-full hover:bg-[#2dd4bf]">
            <FaChevronRight className="lg:text-lg  text-[#52B4AE] " />
          </button>
        </div>
      </div>
      <div className="p-10">
        <LessonsAndNotesCard />
      </div>
    </div>
  );
}

export default WritingSamples;
