import icon1 from "../../assets/Images/mingcute.svg";
import icon2 from "../../assets/Images/mingcute2.svg";
import icon3 from "../../assets/Images/mingcute3.svg";

const Hero = () => {
  return (
    <div className="py-16 px-14 text-[#000] bg-[#FFF] font-Medium text-center">
      <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-center ">
        Why we exist and delight in what we do
      </h3>

      <div className="py-4">
        <div className="my-3 container mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:mt-5 md:mt-4 sm:mt-1 mt-1 gap-y-12 gap-x-4">
            <div className="">
              <div className="mt-8">
                <img src={icon1} alt="mingcute.svg" />
              </div>

              <h3 className="font-Bold text-[#000] lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                USP 1
              </h3>
              <p className="font-Medium leading-7 text-sm tracking-wider text-13 leading-26 text-start mt-2 max-w-[350px]">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            <div className="">
              <div className="mt-8">
                <img src={icon2} alt="mingcute2.svg" />
              </div>
              <h3 className="font-Bold lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                USP 2
              </h3>

              <p className="font-Medium leading-7 text-sm tracking-wider text-13 leading-26 text-start mt-2 max-w-[350px]">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            <div className="">
              <div className="mt-8">
                <img src={icon3} alt="mingcute3.svg" />
              </div>

              <h3 className="font-Bold lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                USP 3
              </h3>
              <p className="font-Medium leading-7 text-sm tracking-wider text-13 leading-26 text-start mt-2 max-w-[350px]">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
