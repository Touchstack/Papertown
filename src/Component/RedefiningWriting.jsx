import BackgroundImg from "../assets/Images/Background.png";
import Rectangle from "../assets/Images/Rectangle.png";
import Circle from "../Component/Circle";

const RedefiningWriting = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
      {/* Left Col */}
      <div className="lg:w-[590px] md:w-[380px] lg:mt-[120px] md:mt-20 lg:ml-20 md:ml-10 ml-5 mt-10 z-10">
        <h5 className="lg:w-[599px] md:w-[400px] lg:text-[72px] font-Bold md:text-5xl text-5xl text-white ">
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
          <button className="leading-8 lg:mb-20 md:mb-10 mt-10 bg-[#52B4AE] text-white font-Bold hover:bg-[#099B96] cursor-pointer ease-in-out transform hover:scale-110 transition-transform duration-700 rounded-3xl md:text-[20px] text-[16px] md:w-[222px]  h-[50px] w-[190px]">
            Join Papertown
          </button>
        </a>
      </div>
      {/* Right Col */}
      <div className="relative flex justify-center items-center">
        <img
          src={Rectangle}
          alt="Rectangle.png"
          className="absolute lg:top-12  md:top-12 top-10 w-full h-full"
        />
        <img
          src={BackgroundImg}
          alt="Background.png"
          className="absolute lg:top-5 md:top-5 top-[21px] w-full h-full"
        />
      </div>
      <Circle /> 
    </div>
  );
};

export default RedefiningWriting;
