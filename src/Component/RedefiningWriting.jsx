import BackgroundImg from "../assets/Images/Background.png";
import Rectangle from "../assets/Images/Rectangle.png";

const RedefiningWriting = () => {
  return (
    <div className="py-18 px-2">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-y-4">
          {/* Left Col */}

          <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
            <h5 className="font-Bold lg:text-5xl md:text-4xl sm:text-4xl text-[#FFF] text-4xl mt-6 text-left">
              Redefining writing, one
              <span className="text-[#FBCA23]"> spark</span> at a time
            </h5>

            <p className="lg:text-[20px] lg:mt-5 lg:mb-20 md:mt-5 md:mb-10 mt-5 text-white">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software.
            </p>
            <a href="">
              <button className="leading-8 lg:mb-20 md:mb-10 mt-8 bg-[#52B4AE] text-white font-Bold hover:bg-[#099B96] cursor-pointer ease-in-out transform hover:scale-110 transition-transform duration-700 rounded-3xl md:text-[20px] text-[16px] md:w-[222px] h-[50px] w-[190px]">
                Join Papertown
              </button>
            </a>
          </div>
          {/* Right Col */}
          <div className="relative">
            <div className="flex justify-center items-center">
              <img
                src={Rectangle}
                alt="Rectangle.png"
                className="absolute lg:top-24 md:top-12 top-10 w-full h-full"
              />
              <img
                src={BackgroundImg}
                alt="Background.png"
                className="absolute lg:top-16 md:top-5 top-[21px] w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RedefiningWriting;
