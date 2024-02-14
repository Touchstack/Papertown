import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setFormData } from "../../context/actions/formAction";

import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";

const AccountSetupJourney = () => {
  const [isChecked, setIsChecked] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  const handleContinue = () => {
    if (isChecked) {
      navigate("/signup/guardian-account");
    } else {
      navigate("/signup/setupaccount");
    }

    dispatch(setFormData({ has_guardian: isChecked }));
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-18">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
        {/* Left Col */}
        <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
          <a href="/">
            <img src={AppLogo} style={{ height: "auto" }} className="mb-8" />
          </a>
          <button
            onClick={goBack}
            className="font-Bold inline-flex gap-2 items-center justify-center w-[150px] py-2 border-2 [#D0D5DD] rounded-full ring-1 ring-[#1018280D] lg:text-lg md:text-lg
            sm:text-base text-[#344054] leading-7 text-sm text-13 leading-26 text-start"
          >
            <img src={Arrow} style={{ height: "auto" }} className="" /> GO BACK
          </button>
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-4xl mt-12 text-left">
            Before you continue
          </h3>
          <p className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-8 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.
          </p>
          <p className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-8 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.
          </p>


          {/* First Checkbox */}
          <div className="font-VarelaRegular inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-10 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm text-13 leading-26 text-start">
            <input
              id="helper-checkbox1"
              aria-describedby="helper-checkbox-text1"
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(false)} // Pass false for first checkbox
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="helper-checkbox1"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                isChecked ? "bg-white" : "bg-[#942D99]"
              }`}
            ></label>
            <span
              id="helper-checkbox-text1"
              className="font-VarelaRegular gap-4 ml-3 justify-start items-start lg:text-md md:text-md sm:text-base text-[#000000] leading-7 text-sm text-13 leading-26 text-start"
            >
              I am 14 years and over
            </span>
          </div>

          {/* Second Checkbox */}
          <div className="font-VarelaRegular inline-flex w-[430px] py-4 border border-gray-300 rounded-md mt-10 lg:text-lg md:text-lg sm:text-base text-[#000000] leading-7 text-sm text-13 leading-26 text-start">
            <input
              id="helper-checkbox2"
              aria-describedby="helper-checkbox-text2"
              type="checkbox"
              checked={!isChecked}
              onChange={() => handleCheckboxChange(true)} // Pass true for second checkbox
              className="hidden" // Hide the default checkbox
            />
            <label
              htmlFor="helper-checkbox2"
              className={`font-Bold inline-flex text-[#FFFFFF] rounded-full w-[20px] h-[20px] ml-8 mt-1 transition-all border-2 ${
                !isChecked ? "bg-white" : "bg-[#942D99]"
              }`}
            ></label>
            <span
              id="helper-checkbox-text2"
              className="font-VarelaRegular gap-4 ml-3 justify-start items-start lg:text-md md:text-md sm:text-base text-[#000000] leading-7 text-sm text-13 leading-26 text-start"
            >
              I am a parent / guardian
            </span>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] justify-center items-center mt-12"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>

        {/* Right Col with Linear Gradient Background */}
        <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
          <img src={Student} style={{ height: "auto" }} className="" alt="Student" />
        </div>
      </div>
    </div>
  );
};

export default AccountSetupJourney;
