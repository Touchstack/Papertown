import BGimage from "../../assets/Images/image.png";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { partners } from "../../../ConstantData";
const OverLay = () => {
  return (
    <div className="relative mt-[6rem] flex flex-col items-center z-50 px-1">
      {/* Responsive image container */}
      <div className="w-full max-w-[1400px] rounded-[30px] overflow-hidden">
        <img
          src={BGimage}
          alt="Group of students"
          className="w-[90vw] md:h-[600px] h-[770px] rounded-[30px] object-cover"
        />
      </div>

      {/* Overlay content */}
      <div className="absolute md:bottom-[0rem] w-full h-full p-6 flex flex-col justify-between">
        {/* Title and navigation on the same line */}
        <div className="flex justify-between items-center w-full pt-4 md:pt-8">
          <p className="text-white text-[42px] font-bold">Our Partners</p>
          <div className="md:flex hidden">
            <button
              aria-label="Previous"
              className="rounded-full border border-[#EEF7F7] h-[40px] w-[40px] flex items-center justify-center"
            >
              <HiMiniChevronLeft className="text-[40px] text-white" />
            </button>
            <button
              aria-label="Next"
              className="rounded-full border border-[#EEF7F7] h-[40px] w-[40px] flex items-center justify-center ml-2"
            >
              <HiMiniChevronRight className="text-[40px] text-white" />
            </button>
          </div>
        </div>

        {/* Partner cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center w-full py-4 md:py-0 my-auto ">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white md:p-[30px] p-6 shadow-md rounded-[30px] md:h-[210px]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-5"
              />
              <p className="text-left text-[24px] font-bold pb-5">
                {partner.name}
              </p>
              <p className="text-left">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverLay;
