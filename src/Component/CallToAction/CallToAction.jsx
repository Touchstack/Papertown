import ChildRightImage from "../../assets/Images/ChildRightImage.png";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

const CallToAction = () => {
  return (
    <div className="relative mt-[6rem] flex flex-col items-center z-50 lg:px-[60px] px-[40px]">
    <div className="bg-transparent md:mt-[50px] mt-8  w-full max-w-[1400px]  lg:rounded-[40px] rounded-[30px] lg:h-[500px] text-left  overflow-hidden">
      <a
        className="flex flex-col items-center bg-white border border-gray-200  rounded-2xl shadow md:flex-row relative"
      >
        <div className="flex flex-col justify-between leading-normal lg:px-[60px] xl:px-[100px] px-[20px] lg:py-[10px] ">
          <h5 className="text-6xl font-Bold tracking-tight text-gray-900 dark:text-white lg:mb-10">
            Technovation announces finalists
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
          </p>
          <button className="bg-[#099B96] hover:bg-[#099B96] cursor-pointer place-self-start mt-8 font-Bold lg:mb-16 mb-4 space-y-4 sm:flex-row sm:justify-center 
          sm:space-y-0 sm:space-x-4 transition-transform duration-700 ease-in-out transform hover:scale-110 justify-center items-center py-3 lg:px-8 md:px-6
           px-4 text-white rounded-full w-30 h-13 ">
            Read more
          </button>
        </div>
        <div className="max-w-600px">
        <img className=" md:w-full md:h-[500px] w-full rounded-r-[40px]" src={ChildRightImage} alt="" />
        <div className="absolute right-5 bottom-5 gap-4 flex">
          <button className="text-white lg:text-[40px] text-[30px]">
            <TfiArrowCircleLeft />
          </button>
          <button className="text-white lg:text-[40px] text-[30px]">
            <TfiArrowCircleRight />
          </button>
  </div>
  </div>
      </a>
    </div>
    </div>
  );
};

export default CallToAction;
