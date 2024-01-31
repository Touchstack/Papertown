import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";

const AccountSetupJourney = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
      // If the checkbox is checked, navigate to the parent page
      navigate("/guardianaccountsetup");
    } else {
      // If the checkbox is not checked, navigate to the setup account page
      navigate("/setupaccount");
    }
  };

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };
  return (
    <div className="py-18 px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
        {/* Left Col */}
        <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
          <img src={AppLogo} style={{ height: "auto" }} className="mb-6" />
          <button
            onClick={goBack}
            className="font-Bold inline-flex gap-2 items-center justify-center
            w-[150px] py-2 border-2 [#D0D5DD] rounded-full lg:text-lg md:text-lg
            sm:text-base text-[#344054] leading-7 text-sm tracking-wider text-13
            leading-26 text-start"
          >
            <img src={Arrow} style={{ height: "auto" }} className="" /> GO BACK
          </button>
          <h3 className="font-Bold lg:text-5xl md:text-4xl sm:text-4xl text-[#040A1D] text-4xl mt-12 text-left">
            Before you continue
          </h3>
          <p className="font-Medium lg:text-lg md:text-lg sm:text-base pt-8 text-[#393939] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.
          </p>
          <p className="font-Medium lg:text-lg md:text-lg sm:text-base pt-8 text-[#393939] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.
          </p>
          {/* <div className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9 break-normal md:break-allfont-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9 break-normal md:break-al"> */}

          {/* <div className="font-Medium inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-10 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="helper-checkbox"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                isChecked ? "bg-white" : "bg-[#942D99]"
              }`}
              onClick={handleCheckboxClick}
            ></label>
            <span
              id="helper-checkbox-text"
              className="font-Medium gap-4 ml-3 justify-start items-start lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start"
            >
              I am 14 years and over
            </span>
          </div>

          <div className="font-Medium inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-5 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="helper-checkbox"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                isChecked ? "bg-white" : "bg-[#942D99]"
              }`}
              onClick={handleCheckboxClick}
            ></label>
            <span
              id="helper-checkbox-text"
              className="font-Medium gap-4 ml-3 justify-start items-start lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start"
            >
              I am a parent / guardian
            </span>
          </div> */}
          <div className="font-Medium inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-10 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="helper-checkbox"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                isChecked ? "bg-white" : "bg-[#942D99]"
              }`}
            ></label>
            <span
              id="helper-checkbox-text"
              className="font-Medium gap-4 ml-3 justify-start items-start lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start"
            >
              I am 14 years and over
            </span>
          </div>

          <div className="font-Medium inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-5 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <input
              id="parent-checkbox"
              aria-describedby="parent-checkbox-text"
              type="checkbox"
              checked={!isChecked}
              onChange={handleCheckboxChange}
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="parent-checkbox"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                isChecked ? "bg-[#942D99]" : "bg-white"
              }`}
            ></label>
            <span
              id="parent-checkbox-text"
              className="font-Medium gap-4 ml-3 justify-start items-start lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm tracking-wider text-13 leading-26 text-start"
            >
              I am a parent / guardian
            </span>
          </div>

          <button
            className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] justify-center items-center mt-12"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>

        {/* Right Col with Linear Gradient Background */}
        <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
          <img src={Student} style={{ height: "auto" }} className="" />
        </div>
      </div>
    </div>
  );
};

export default AccountSetupJourney;
