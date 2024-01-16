import child1 from "../../../../../assets/child1.png"

const ProfileCard = () => {

    const cards = Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="flex-shrink-0 w-[180px] h-[155px] rounded-[16px] border-[1px] border-[#E8E8E8] bg-white p-5">
        <div className="flex flex-row gap-2 text-[6.99px]">
          <div className="w-[47px] h-[19px] text-[#000] bg-white rounded-[26px] border-[1px] border-[#000] flex items-center justify-center">
            Fiction
          </div>
        </div>
  
        <h1 className="text-[#000000] text-[19.356px] font-[700] w-[145px] leading-5 pt-2">
          Repetitive sounds of the echo
        </h1>
  
        <p className="text-[#000000] text-[10.603px] w-[145px] pt-2">
          Enoch Charway
        </p>
  
        <div className="flex items-center">
          <img
            src={child1}
            alt="Enoch Charway"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-[10.603px] text-[#B44DB8]">23rd January, 2023</span>
        </div>
      </div>
    ));
  
    return (
      <div className="grid grid-cols-3 gap-3 md:overflow-x-auto overflow-y-auto md:ml-[9rem] mt-3 max-h-[400px]">
        {cards}
      </div>
    );
  };
  
  export default ProfileCard;