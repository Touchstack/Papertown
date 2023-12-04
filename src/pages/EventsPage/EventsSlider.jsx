
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const EventsSlider = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          {/* slider icons section start */}
          <div className="flex items-center lg:mr-20 md:mr-10 mr-3">
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
    </div>
  )
}

export default EventsSlider

