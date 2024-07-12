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
      
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 font-Bold">
        {pressClubs.map((data, index) => (
            <div key={index} onClick={handleNavigation} >
              <img src={data?.mainIMG} />
            <div>
              <p className="text-[#000] lg:text-xl text-lg my-2">
                  {data?.title}
                </p>
                <span className="inline-flex font-VarelaRegular text-[#393939] text-lg">
                  {data?.numMembers} members
                </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPressClubs;
