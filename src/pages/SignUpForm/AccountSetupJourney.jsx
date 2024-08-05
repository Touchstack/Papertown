import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import {
  CLEAR_GUARDIAN_CHECKED,
  SET_GUARDIAN_CHECKED,
} from "@/redux/features/guardianCheckedSlice";

const AccountSetupJourney = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  const handleContinue = () => {
    if (isChecked) {
      dispatch(SET_GUARDIAN_CHECKED(true));
    }
    navigate("/signup/setupaccount");
  };

  const goBack = () => {
    dispatch(CLEAR_GUARDIAN_CHECKED());
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
            This website and its content and materials have been designed for
            and are intended to be used by young people - aged 10 to 19.
          </p>
          <p className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-8 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            We, however, understand that we are dealing with a sensitive age
            group whose access to and use of the internet should be controlled,
            and may even be restricted by law in some jurisdictions/country.
          </p>
          <p className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-8 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            It is for this reason that minors (persons below 18years) are not
            allowed to create accounts on this website by themselves. We ask
            that parents be responsible for creating accounts for, and
            supervising, their minor children’s use of this website. 
            <br /> Thank you for your understanding and cooperation.  
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
              I am 18 years and over
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
          <img
            src={Student}
            style={{ height: "auto" }}
            className=""
            alt="Student"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSetupJourney;
