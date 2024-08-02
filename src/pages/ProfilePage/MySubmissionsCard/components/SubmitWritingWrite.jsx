import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SuccessModal from "./modal/SuccessModal";

const SubmitWritingWrite = ({ onBackClick }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    onBackClick(false);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };
  return (
    <div className="bg-white shadow-xl lg:p-10 p-5 md:p-10 rounded-xl lg:w-[973px]  w-[90vw]">
      <div className="flex flex-col gap-y-[48px] md:w-3/6">
        <div className="flex flex-col space-x-3">
          <div
            onClick={handleClick}
            className="flex items-center hover:cursor-pointer"
          >
            <IoIosArrowBack size={30} />
            <h1 className="md:text-[36px] text-[26px] font-Bold">
              Submit your writing
            </h1>
          </div>
        </div>

        <div className="font-VarelaRegular flex flex-col gap-y-[10px]">
          <p className=" text-[14px]">Enter the title of your submission</p>
          <input
            type="text"
            placeholder="Title goes here"
            className="outline-none placeholder:text-[#CECECE] h-[50px] bg-[#F4F5F7] rounded-[10px] px-[20px]   "
          />
        </div>
        <div className="font-VarelaRegular flex flex-col gap-y-[10px]">
          <p className=" text-[14px]">Type content</p>
          <textarea
            type="text"
            placeholder="Start typing"
            cols={150}
            className="outline-none placeholder:text-[#CECECE] h-[224px] bg-[#F4F5F7] rounded-[10px] p-[20px]   "
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={
            "bg-[#DF327B] text-VarelaRegular rounded-[50px] h-[54px] font-Bold text-white w-full"
          }
        >
          Submit
        </button>
      </div>
      {showModal && <SuccessModal onClose={setShowModal} />}
    </div>
  );
};

export default SubmitWritingWrite;
