import ChildRightImage from "../../assets/Images/ChildRightImage.png";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

const NewCTA = () => {
  return (
    <div className="mt-[6rem] flex flex-col items-center">
      <a className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white  border border-gray-200 rounded-[50px] shadow md:flex-row xl:w-8/12 lg:w-9/12 md:w-10/12 sm:w-10/12 w-10/12">
        <div className="flex flex-col justify-between leading-normal lg:px-[60px] xl:px-[100px] px-[20px] lg:py-20 md:py-12 sm:p-8 py-8 lg:rounded-l-[50px] lg:rounded-tr-none  md:rounded-t-[50px] sm:rounded-t-[50px] rounded-t-[50px]">
          <h5 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-Bold tracking-tight text-gray-900  lg:mb-10">
            Technovation announces finalists
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software.
          </p>
          <button
            className="bg-[#099B96] hover:bg-[#099B96] cursor-pointer place-self-start mt-8 font-Bold lg:mb-16 mb-4 space-y-4 sm:flex-row sm:justify-center 
          sm:space-y-0 sm:space-x-4 transition-transform duration-700 ease-in-out transform hover:scale-110 justify-center items-center py-3 lg:px-8 md:px-6
           px-4 text-white rounded-full w-30 h-13"
          >
            Read more
          </button>
        </div>
        <div
          className="bg-green-500 lg:p-0 md:pt-48 sm:pt-48 pt-48 flex justify-end align-baseline lg:rounded-r-[50px] lg:rounded-bl-none md:rounded-b-[50px] sm:rounded-b-[50px] rounded-b-[50px]"
          style={{
            backgroundImage: `url(${ChildRightImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="gap-4 flex self-end mr-5 mb-5">
            <button className="text-white hover:bg-slate-50 hover:rounded-full hover:text-black lg:text-[40px] text-[30px]">
              <TfiArrowCircleLeft />
            </button>
            <button className="text-white hover:bg-slate-50 hover:rounded-full hover:text-black lg:text-[40px] text-[30px]">
              <TfiArrowCircleRight />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewCTA;
