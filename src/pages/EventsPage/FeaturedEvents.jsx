import FeaturedEventsCards from './FeaturedEventsCards';
import EventsSlider from './EventsSlider';
import FeaturedEvents1 from './FeaturedEvents1';
 
 
const FeaturedEvents = () => {
  return (
    <div className='z-1'>
      <div className="flex items-center justify-between lg:text-[42px] md:text-[60px] mb-5 text-[30px] font-Bold">
        <h1 className="font-Bold lg:px-24 md:px-16 text-[42px]"> Featured Events </h1>
        {/* <span className="flex-right text-right mr-5"><EventsSlider /></span> */}
      </div>
 
      <FeaturedEventsCards />
 
      <p className="font-Bold text-left text-[42px] lg:px-24 md:px-16">Other upcoming events</p>
      <FeaturedEvents1 />
 
      <div className="flex items-center justify-center mt-10 mb-10">
        <button className="px-6 py-3 rounded-[30px] border border-emerald-400 text-emerald-400 text-xl font-SemiBold">
          Load more
        </button>
      </div>
    </div>
  );
};
 
export default FeaturedEvents; 