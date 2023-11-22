import Vector from "../../assets/Images/Vector.png";
import Vector1 from "../../assets/Images/Vector1.png";
import Vector2 from "../../assets/Images/Vector2.png";
import Vector3 from "../../assets/Images/Vector3.png";

const UIfix = () => {
  return (
    <div className="translate-x-10">
    <div className="translate-y-2 w-[139.53px] h-[34.50px] justify-start items-center gap-2 inline-flex mb-6 py-4 px-6">
      <img src={Vector} className="transform translate-x-7" />
      <div className="h-[34.50px] px-[14.21px] opacity-30 bg-white bg-opacity-5 rounded-full border border-emerald-400 justify-start items-start gap-[20.29px]  flex overflow-hidden" />
      <img src={Vector1} />
      <img src={Vector2} />
      <img src={Vector3} />
      <div className="justify-start items-start flex"></div>
      <div className="">
        <span className="inline-block transform translate-y-[-5]">
          <img
            src={Vector}
            className="rotate-180 transform translate-y-6 translate-x-2"
          />
          <div className=" h-[34.50px] px-[14.21px] bg-white bg-opacity-5 rounded-full border-2 border-emerald-400 justify-start items-start gap-[20.29px] flex overflow-hidden" />
        </span>
      </div>{" "}
    </div>
    </div>
  );
};

export default UIfix;
