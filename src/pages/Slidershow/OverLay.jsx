import BGimage from "../../assets/Images/image.png";
// import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
// import { partners } from "../../../ConstantData";


const OverLay = () => {
  return (
  <div className="flex flex-col justify-center items-center">
    <div className="relative mt-[6rem]  flex flex-col justify-center items-center z-50 px-1">
      {/* Responsive image container */}
      <div className="w-full max-w-[1400px] rounded-[30px] overflow-hidden">
        <img
          src={BGimage}
          alt="Group of students"
          className="w-[90vw] md:h-[600px] h-[770px] rounded-[30px] object-cover"
        />
      </div>
      {/* className="w-[90vw]  md:h-[501px] h-[670px] rounded-[30px] object-cover"
        /> */}

      {/* Overlay content */}
      <div className="absolute md:bottom-[3rem]   w-full md:h-full md:p-8 py-4 px-4 flex flex-col justify-between">
        {/* Title and navigation on the same line */}
        <div className="flex justify-center items-center w-full  md:pt-8">
          <p className="text-white text-[22px] md:text-[42px] md:pb-4 font-bold">Our Current Partners</p>
          {/* <div className="md:flex hidden">
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
          </div> */}
        </div>

        {/* Partner cards container */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center w-full py-4 md:py-0 my-auto ">
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
        </div> */}


       <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full py-4 md:py-0 my-auto ">
            <div className="bg-white md:p-[30px] p-6 shadow-md rounded-[30px] md:h-[310px]">
              <p className="text-left text-[#52B4AE] text-[24px] font-bold ">
               01
              </p>
              <p className="text-left text-[#000000] font-[700] text-[20px]">
                Aylward School, Uyo
              </p>

              <p className="mb-4">
                Our partnership with Aylward School started in 2019, when we worked with the school to train
                writing instructors in the art of teaching pupils creative writing, and provided them with resources
                on creative writing.
              </p>

              <p>
                We are currently working on setting up a creative writing room for the school, to give pupils a
                dedicated space where they can go and be inspired to write, and let their imaginations soar as
                they write their own original stories, and explore all the places that their writing can take them.
              </p>
            </div>



            <div className="bg-white md:p-[30px] p-6 shadow-md rounded-[30px] md:h-[242px]">
              <p className="text-left text-[#52B4AE] text-[24px] font-bold">
               02
              </p>
              <p className="text-left text-[#000000] font-[700] text-[20px]">
                Bargain Moto
              </p>

              <p>
                Bargain Moto is an online marketplace for vehicles, operating in Ghana. Thanks to their
                understanding and appreciation of the impact that writing can have, they have provided us with all
                we need to extend our operations to Ghana.
              </p>
            </div>
        </div> 
      </div>
    </div>

      <div className="mt-10 py-[10px] transition-transform duration-700 ease-in-out transform hover:scale-110 cursor-pointer rounded-[30px] px-[30px] bg-[#52B4AE]">
        <p className="text-[#FFFFFF]">
         <a href="/our-partnership-philosophy">View Our Partnership Philosophy</a> 
        </p>
      </div>
    </div>
  );
};

export default OverLay;
