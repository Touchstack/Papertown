import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";

const AccountSetupJourney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };
  return (
    <div className="py-18 px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
        {/* Left Col */}
        <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
          <img src={AppLogo} style={{ height: "auto" }} className="mb-8" />
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
            SET UP ACCOUNT
          </h3>
          <div className="font-Medium lg:text-lg md:text-lg sm:text-base pt-10 text-[#393939] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <form name="contact" method="post">
              <div className="relative w-full group text-md mb-4 font-Regular text-[#858585]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Email address"
                  name="emailaddress"
                  required
                  className="block w-[430px] p-4 text-[#858585] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>

              <div className="relative z-0 w-full group text-md mb-3 font-Regular text-[#858585]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Create password"
                  name="password"
                  required
                  className="block w-[430px] p-4 text-[#858585] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="text-[#4C536A] text-sm font-Regular leading-4 tracking-normal text-left">
                <span className="p-1"> • </span>Use at least 8 characters.{" "}
                <br /> <span className="p-1"> • </span>Besides letters, include
                at least a number or symbol (!@#$%^&*-_+=). <br />{" "}
                <span className="p-1"> • </span>Password is case sensitive.
              </div>
              <div className="relative z-0 w-full mb-1 group text-md font-Regular text-[#858585]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Re-enter password"
                  name="password"
                  required
                  className="block w-[430px] p-4 mt-2 text-[#858585] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="text-[#858585] text-sm mt-8">
                <p className="flex items-center">
                  <label>
                    <input
                      type="checkbox"
                      className="accent-pink-400 w-10 h-10"
                    />
                  </label>
                  <span className="ml-2">
                    I confirm that this account has been created with the
                    consent of a parent or guardian
                  </span>
                </p>
                <p className="mt-4 flex items-center">
                  <label>
                    <input
                      type="checkbox"
                      className="accent-pink-400 w-10 h-10"
                    />
                  </label>
                  <span className="ml-2">
                    Please send me Papertown Imaginarium newsletters
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
                onClick={() => navigate("/gettoknowyou")}
              >
                Get Started
              </button>

              <div className="flex items justify-center text-sm mt-10 font-Regular text-[#828282]">
                Already have an account?
                <a
                  href="#"
                  className="text-[#942D99] font-Regular  hover:underline ml-1"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>
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
