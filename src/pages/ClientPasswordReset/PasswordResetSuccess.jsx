import Common from "@/Component/Common";
import React from "react";
import success from "@/assets/Images/successCheck.png";
import { useNavigate } from "react-router-dom";

const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Common>
      <div className="bg-white md:px-[56px] md:py-[50px] flex flex-col gap-y-[50px] md:rounded-[25px]">
        <div className=" text-center flex flex-col gap-y-[22px]">
          <img
            src={success}
            alt="success vector"
            className="w-[86px] h-[86px] m-auto"
          />
          <header className=" lg:text-3xl md:text-2xl sm:text-xl text-xl font-Bold text-[#000] break-words ">
            Successful Password Reset
          </header>
          <p>
            You can now use your new password to <br /> log in to your account
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={goToHome}
            className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356]  font-Regular rounded-full p-3 w-full min-w-[300px]"
          >
            <p className="text-center font-bold text-xl">Continue to login </p>
          </button>
        </div>
      </div>
    </Common>
  );
};

export default PasswordResetSuccess;
