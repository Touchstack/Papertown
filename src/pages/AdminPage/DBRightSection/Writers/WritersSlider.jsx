import PreviousSlider from "../../../../assets/Images/Previous.svg";
import NextSlider from "../../../../assets/Images/Next.svg";
const handleButtonClick = () => {
  // Navigate to another page
  window.location.href = "/admin";
};

const Slider = () => {
  return (
    <div className="relative mt-[50px]">
      <div>
        <div>
          <div className="m-10">
            1 <span className="text-[#C5C5C5]">0f 10</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex">
        <div className="inline-flex gap-8">
          <img
            src={PreviousSlider}
            alt="Previous.svg"
            className="flex w-34.644 px-0 py-18 justify-center items-center"
          />
          <button className="bg-[#B44DB8] text-[#FFFFFF] w-[25px] rounded-sm">
            1
          </button>
          <span className="text-[#C5C5C5]">
            2 3
            
            <span onClick={handleButtonClick}> 4</span>5 6 .... 10
          </span>
          <img src={NextSlider} alt="Next.svg" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
