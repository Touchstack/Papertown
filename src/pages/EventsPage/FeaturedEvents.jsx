import Featured1 from "../../assets/Images/Featured1.jpeg"
import Featured2 from "../../assets/Images/Featured2.jpeg"
import Featured3 from "../../assets/Images/Featured3.jpeg"
import EventsSlider from "./EventsSlider"
import FeaturedEvents1 from "./FeaturedEvents1"

const FeaturedEvents = () => {
  return (
    <div>
        <div className="flex items-center justify-between lg:text-[42px] md:text-[60px] mb-5  text-[30px] font-Bold">
    <h1 className="font-Bold lg:px-24 md:px-16 text-[42px]"> Featured Events </h1>
    {/* Sliding Text Component*/}
    <span className="flex-right text-right mr-5"><EventsSlider /></span>
  </div>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 py-8 lg:px-24 md:px-16 ">
        {/* Featured Events Cards */}
        {/* Card1 */}
        <a href="/eventsdet">
        <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5  ">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
            UNICEF to initiate Grade 7 spelling Bee
          </h5>
          <span className="md:text-[16px] text-[15px]">
            It has survived not only five centuries, but also the leap into
            electronic
          </span>
          <div className="mt-2">
            <img src={Featured1} alt="" className="w-[355.68px] h-[187.31px] rounded-xl" />
          </div>
        </div>
      </a>
         {/* Card2 */}
         <a href="/eventsdet">
        <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5  ">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
            UNICEF to initiate Grade 7 spelling Bee
          </h5>
          <span className="md:text-[16px] text-[15px]">
            It has survived not only five centuries, but also the leap into
            electronic
          </span>
          <div className="mt-2">
            <img src={Featured2} alt="" className="w-[355.68px] h-[187.31px] rounded-xl" />
          </div>
        </div>
      </a>
         {/* Card3 */}
         <div>
         <a href="/eventsdet">
        <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5  ">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
            UNICEF to initiate Grade 7 spelling Bee
          </h5>
          <span className="md:text-[16px] text-[15px]">
            It has survived not only five centuries, but also the leap into
            electronic
          </span>
          <div className="mt-2">
            <img src={Featured3} alt="" className="w-[355.68px] h-[187.31px] rounded-xl" />
          </div>
        </div>
      </a>
        </div>
        </div>
        <p className="font-Bold text-left text-[42px] lg:px-24 md:px-16">Other upcoming events</p>
        <FeaturedEvents1 />
        <div className="flex items-center justify-center mt-10 mb-10">
  <button className="px-6 py-3 rounded-[30px] border border-emerald-400 text-emerald-400 text-xl font-SemiBold">
    Load more
  </button>
</div>
    </div>
    
    
  )
}

export default FeaturedEvents
