import DateLogo from "../../../../../assets/Images/DateLogo.png";

const ProfileCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 md:overflow-x-auto overflow-y-auto md:ml-9rem mt-3 mb-4 max-h-[400px] lg:px-[70px] lg:ml-[60px] px-[30px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex-shrink-0 w-full max-w-[315px] h-[198px] rounded-[26px] border-[1px] border-[#E8E8E8] bg-white p-5">
          <div className="flex flex-col gap-2 text-[6.99px]">
            <div className="w-[47px] h-[29px] text-[#000] bg-white text-[12px] font-SemiBold rounded-[26px] border-[1px] border-[#000] flex items-center justify-center">
              Fiction
            </div>
            <div className="flex items-center gap-2">
              <img src={DateLogo} className="w-4 h-4" alt="Date Logo" />
              <span className="text-[10.603px] text-black">23rd January, 2023</span>
            </div>
          </div>
          <h1 className="text-[#000000] text-3xl font-Bold w-full p-2">
            Repetitive sounds of the echo
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
