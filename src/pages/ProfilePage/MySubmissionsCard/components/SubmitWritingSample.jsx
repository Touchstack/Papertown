import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SubmitWritingWrite from "./modal/SubmitWritingWrite";
import SubmitWritingUpload from "./modal/SubmitWritingUpload";

const SubmitWritingSample = ({ onBackClick }) => {
  const [onNext, setOnNext] = useState(false);
  const [submissionType, setSubmissionType] = useState();

  const handleClick = () => {
    onBackClick(false);
  };

  const handleOnNext = () => {
    if (!submissionType) return;
    setOnNext(true);
  };

  const handleOptionChange = (e) => {
    setSubmissionType(e.target.value);
  };

  return (
    <>
      {!onNext ? (
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

          <div className="font-VarelaRegular flex flex-col gap-y-[13px]">
            <p className=" text-[14px]">
              How would you like to submit your writing?
            </p>
            <form>
              <fieldset
                id="submissionType"
                className="flex flex-col gap-y-[13px]"
              >
                <div className="text-[14px] flex items-center gap-x-[10px]">
                  <input
                    type="radio"
                    onChange={handleOptionChange}
                    value="upload"
                    checked={submissionType === "upload"}
                    name="submissionType"
                    className="h-[16px] w-[16px] bg-[#FFF5FF] border-green-500 accent-[#DF327B] border-2"
                  />
                  <label> I want to upload the document</label>
                </div>

                <div className="text-[14px] flex items-center gap-x-[10px]">
                  <input
                    type="radio"
                    onChange={handleOptionChange}
                    checked={submissionType === "text"}
                    value="text"
                    name="submissionType"
                    className="h-[16px] w-[16px] bg-[#FFF5FF] border-green-500 accent-[#DF327B] border-2"
                  />
                  <label> I want to type the content</label>
                </div>
              </fieldset>
            </form>
          </div>
          <button
            onClick={handleOnNext}
            className={
              "bg-[#DF327B] text-VarelaRegular rounded-[50px] h-[54px] font-Bold text-white w-full"
            }
          >
            Next
          </button>
        </div>
      ) : submissionType === "text" ? (
        <SubmitWritingWrite onBackClick={setOnNext} />
      ) : (
        <SubmitWritingUpload onBackClick={setOnNext} />
      )}
    </>
  );
};

export default SubmitWritingSample;
