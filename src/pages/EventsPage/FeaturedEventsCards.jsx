import { featuredEvents } from "../../../ConstantData"
const FeaturedEventsCards = () => {
  return (
    <div>
       {/* Cards */}
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 lg:px-24 md:px-16 ">
        {featuredEvents.map((event) => (
          <a key={event.id} href="/eventsdetails">
          <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5   ">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold  mt-2 md:mb-3">
              {event.title}
            </h5>
            <span className="md:text-[16px] text-[15px]">
              {event.msg}
            </span>
            <div className="mt-2">
              <img src={event.img} alt="" className="w-[355.68px] h-[187.31px] rounded-xl"/>
            </div>
          </div>
        </a>
        ))}
      </div>
      {/* Cards */}
    </div>
  )
}
 
export default FeaturedEventsCards
 