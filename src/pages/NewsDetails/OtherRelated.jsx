import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import OtherCard from "./OtherCard";
function OtherRelated() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h5 className="lg:text-[42px] md:text-[60px] lg:text-[38px] text-[30px] font-Bold">
            Other related stories
          </h5>
          {/* slider icons section start */}
          <div className="flex items-center lg:mr-20 md:mr-10 mr-3">
            <a href="/news" className="mr-3 text-[#52B4AE]">
              View all
            </a>
            <a
              href="#"
              className="mr-3 border-[#52B4AE] border-2 p-2 rounded-full text-[#52B4AE] hover:bg-green-100 hover:ring-green-200 "
            >
              <FaAngleLeft />
            </a>
            <a
              href="#"
              className="mr-3 border-[#52B4AE] border-2 p-2 rounded-full text-[#52B4AE] hover:bg-green-100 hover:ring-green-200 "
            >
              <FaAngleRight />
            </a>
          </div>
          {/* slider icons section end */}
        </div>
      </div>
      {/* Card section start  */}
      <div className="mr-20 mb-20">
        <OtherCard />
      </div>
      {/* Card section end  */}
    </div>
  );
}

export default OtherRelated;
