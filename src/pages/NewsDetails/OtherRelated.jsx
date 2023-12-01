import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import OtherCard from "./OtherCard";
function OtherRelated() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h5 className="lg:text-[42px] md:text-[60px] lg:text-[38px] text-[30px] font-Bold lg:ml-0 ml-10">
          Other related stories
        </h5>
        {/* slider icons section start */}
        <div className="flex items-center md:mr-10 lg:mr-20">
          <a href="/news" className="mr-3 text-[#52B4AE]">
            View all
          </a>
          <a
            href="#"
            className="mr-3 border-[#52B4AE] border-2 lg:p-2 p-1 rounded-full text-[#52B4AE] hover:bg-green-100 hover:ring-green-200 hidden  lg:inline-flex "
          >
            <FaAngleLeft />
          </a>
          <a
            href="#"
            className="mr-3 border-[#52B4AE] border-2 lg:p-2 p-1 rounded-full text-[#52B4AE] hover:bg-green-100 hover:ring-green-200 hidden lg:inline-flex"
          >
            <FaAngleRight />
          </a>
        </div>
        {/* slider icons section end */}
      </div>

      {/* Card section start  */}
      <div className="lg:mr-20 lg:m-0 m-10 lg:mt-10">
        <OtherCard />
      </div>
      {/* Card section end  */}
    </div>
  );
}

export default OtherRelated;
