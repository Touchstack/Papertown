import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
function FeaturedNew() {
  return (
    <div>
      <div className="">
        {/* Featured news text with slider start  */}
        <div className="flex items-center justify-between">
          <h5 className="lg:text-[72px] md:text-[60px] lg:text-[38px] text-[30px] font-Bold">
            Featured news
          </h5>
          {/* slider icons section start */}
          <div className="flex lg:mr-20 md:mr-10 mr-3">
            {/* Adjust the margin as needed */}
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

        {/* cards section start  */}

        {/* cards section end  */}

        {/* Featured news text with slider end  */}
      </div>
    </div>
  );
}

export default FeaturedNew;
