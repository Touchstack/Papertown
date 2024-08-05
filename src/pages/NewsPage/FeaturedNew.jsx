import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import NewOtherCard from "./NewOtherCard";
import OtherCard from "../NewsDetails/OtherCard";

function FeaturedNew() {
  return (
    <div>
      <div className="">
        {/* Featured news text with slider start  */}
        <div className="flex items-center justify-between">
          <h5 className="lg:text-[42px] md:text-[60px] mb-10  text-[30px] font-Bold">
            Here’s what’s happening at the moment…
          </h5>
          {/* slider icons section start */}
          <div className="md:flex lg:mr-20 md:mr-10 mr-3 hidden lg:inline-flex">
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
        <div className="lg:mr-20 m-2 mr-10 mb-20">
          <OtherCard />
        </div>
        <div className="lg:mr-20 m-2 mr-10 mb-20 ">
          {/* <h5 className="lg:text-[42px] md:text-[60px] mb-5  text-[30px] font-Bold">
            Other news items
          </h5>
          <NewOtherCard /> */}
          {/* Button section start  */}
          <div className="flex md:ml-[50px] justify-center m-[50px]">
            <button className="border-[1px] leading-8 border-[#52B4AE] text-[#52B4AE] font-bold rounded-3xl text-[20px] w-[145px] h-[50px]">
              Load More
            </button>
          </div>
          {/* Button section end  */}
        </div>

        {/* cards section end  */}

        {/* Featured news text with slider end  */}
      </div>
    </div>
  );
}

export default FeaturedNew;
