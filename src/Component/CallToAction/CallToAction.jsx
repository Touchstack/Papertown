import LeftArrow from "../../assets/Images/iconLeft.png";
import RightArrow from "../../assets/Images/iconRight.png";
import RightImage from "../../assets/Images/unsplash_O5EMzfdxedg.png";

const CallToAction = () => {
  return (
    <div className="bg-transparent ">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 bg-white lg:mx-24 md:mx-16 mx-12 rounded-[43px] items-center mt-10">
        <div className=" translate-x-6 flex-col justify-center py-4 px-10 items-start inline-flex ">
          <h1 className=" lg:text-7xl md:text-5xl text-3xl text-black font-Bold mt-4 tracking-wider items-center ">
            Technovation
            <p>announces</p>
            <p>finalists</p>
          </h1>
          <p className="text-black text-lg mb-2 items-center text-justify font-Regular">
            <br />
            It was popularised in the 1960s with the release of Letraset sheets{" "}
            <p>containing Lorem Ipsum passages, and more recently</p>
            <p> with desktop publishing software.</p>
          </p>
          <button
            className="bg-[#099B96]
           hover:bg-[#099B96] cursor-pointer 
          place-self-start mt-8 font-Bold 
          lg:mb-16 space-y-4 sm:flex-row sm:justify-center 
          sm:space-y-0 sm:space-x-4 
          transition-transform 
          duration-700 ease-in-out
           transform hover:scale-110 
           justify-center items-center py-3 lg:px-8 md:px-6
            sm:px-4 px-4 text-white rounded-full w-30 h-13 "
          >
            Read more
          </button>
        </div>

        <div className=" relative lg:left-10 overflow-auto object-cover w-full h-auto mx-auto grid-flow-row inset-0">
        <img src={RightImage} className=" z-1 w-full h-full bg-transparent object-contain" />
        <div className="z-10 absolute right-1 bottom-5 gap-5 flex">
        <button className=" text-white rounded-full">
          <img src={LeftArrow} alt="Previous image"/>
        </button>
        <button className=" text-white rounded-full">
        <img src={RightArrow} alt="Next image"/>
        </button>
        </div>
        </div>
       
       
        
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
