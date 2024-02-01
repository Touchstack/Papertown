import PreviousSlider from "../../../../assets/Images/Previous.svg";
import NextSlider from "../../../../assets/Images/Next.svg";
const handleButtonClick = () => {
  // Navigate to another page
  window.location.href = "/admin";
};

const Slider = () => {
  return (
    <div className="flex justify-between items-center mt-[50px] px-5">
      <div>
        <div className="m-10">
          1 <span className="text-[#C5C5C5]">0f 10</span>
        </div>
      </div>
      <div className="flex gap-4 self-end m-10">
        <img
          src={PreviousSlider}
          alt="Previous.svg"
          className="w-34.644 px-0 py-18 justify-center items-center"
        />
        <button className="bg-[#B44DB8] text-[#FFFFFF] lg:w-[20px] w-1/6 rounded-sm">
          1
        </button>
        <span className="text-[#C5C5C5]">
          2 3
          <span onClick={handleButtonClick}> 4 </span> 5  .... 10
        </span>
        <img src={NextSlider} alt="Next.svg" />
      </div>
    </div>
  );
};

export default Slider;
