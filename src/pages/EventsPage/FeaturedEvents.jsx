import Featured1 from "../../assets/Images/Featured1.jpeg"
import Featured2 from "../../assets/Images/Featured2.jpeg"
import Featured3 from "../../assets/Images/Featured3.jpeg"
import Featured4 from "../../assets/Images/Featured4.jpeg"
import Featured5 from "../../assets/Images/Featured5.jpeg"
import Featured6 from "../../assets/Images/Featured6.jpeg"
import Featured7 from "../../assets/Images/Featured7.jpeg"
import Featured8 from "../../assets/Images/Featured8.jpeg"
import Featured9 from "../../assets/Images/Featured9.jpeg"
import Featured10 from "../../assets/Images/Featured10.jpeg"
import Featured11 from "../../assets/Images/Featured11.jpeg"
import EventsSlider from "./EventsSlider"

const FeaturedEvents = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
    <h1 className="font-Bold lg:px-24 md:px-16 text-[42px]"> Featured Events </h1>
    {/* Sliding Text Component*/}
    <span className="flex-right text-right mr-5"><EventsSlider /></span>
  </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-24 md:px-16">
        {/* Featured Events Cards */}
        {/* Card1 */}
        <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured1} alt="Featured Event" />
        </div>
         {/* Card2 */}
        <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured2} alt="Featured Event" />
        </div>
         {/* Card3 */}
         <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured3} alt="Featured Event" />
        </div>
    
    </div>
    <br/>
    <p className="font-Bold text-left text-[42px] lg:px-24 md:px-16">Other upcoming events</p>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-8 lg:px-24 md:px-16">
    {/* Other Upcoming Events Cards row 1*/}
     {/* Card4 */}
    <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured4} alt="Featured Event" />
        </div>
     {/* Card5 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured5} alt="Featured Event" />
        </div>
     {/* Card6 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured6} alt="Featured Event" />
        </div>
    {/* Other Upcoming Events Cards row 2*/}
     {/* Card7 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured7} alt="Featured Event" />
        </div>
     {/* Card8 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured8} alt="Featured Event" />
        </div>
     {/* Card9 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured9} alt="Featured Event" />
        </div>
    {/* Other Upcoming Events Cards row 3*/}
     {/* Card10 */}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured10} alt="Featured Event" />
        </div>
     {/* Card11*/}
     <div className="w-full lg:w-[401px] h-[392.01px] py-[30.21px] sm:h-auto px-[2.8%] sm:w-1/4 mt-10 bg-white rounded-[15.11px] border border-neutral-200 flex-col justify-start items-start gap-[24.17px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15.11px] flex">
            <div className="w-full text-black text-3xl font-Bold leading-[33.23px]">UNICEF to initiate Grade 7 spelling Bee</div>
            <div className="w-full text-neutral-700 text-[15.11px] font-Regular ">It has survived not only five centuries, but also the leap into electronic </div>
          </div>
          <img className="self-stretch w-full h-[70%] sm:h-[187.31px] rounded-[9.06px]" src={Featured11} alt="Featured Event" />
        </div>
    </div>
    {/* Load more button*/}
    
    <div className="flex items-center justify-center mt-10 mb-10">
  <button className="px-6 py-3 rounded-[30px] border border-emerald-400 text-emerald-400 text-xl font-SemiBold">
    Load more
  </button>
</div>
    </div>

   
  )
}

export default FeaturedEvents
