import { pressClubs } from "../../../ConstantData";


const FeaturedPressClubs = () => {
  
  const handleNavigation = () => {
    window.location.href = '/pressclub/details';
  };

  return (
    <div className="md:px-16 px-10 pb-24 bg-[#FFF]">
      <div className="flex justify-between items-center">
        <h2 className="font-Bold text-2xl md:text-5xl lg:text-5xl pb-10 text-[#000] pt-20">
          Featured press clubs
        </h2>
        <p className="font-Bold hover:underline hover:cursor-pointer text-xl md:text-2xl text-[#52B4AE] pb-10 pt-20">
          <a href="/all/pressclub">View all</a>
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 font-Bold">
       {pressClubs.map((data, index) => (
          <div key={index} onClick={handleNavigation} >
            <img src={data?.mainIMG} />
            <p className="text-[#000] lg:text-xl text-lg my-4">
               {data?.title}
            </p>
            <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img style={{ height: "auto" }} src={data?.childIMG} alt="" />
                <img style={{ height: "auto" }}  src={data?.childIMG} alt="" />
                <img style={{ height: "auto" }}  src={data?.childIMG} alt="" />
                <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                  + {data?.numMembers} members
                </span>
              </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FeaturedPressClubs;
