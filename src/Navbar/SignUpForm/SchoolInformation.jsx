import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { useForm } from 'react-hook-form';

const SchoolInformation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate('/guardianinformationn')
  };

  return (
    <div className="py-18 px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
        {/* Left Col */}
        <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
          <img src={AppLogo} style={{ height: "auto" }} className="mb-8" />
          <button
            onClick={goBack}
            className="font-Bold inline-flex gap-2 items-center justify-center w-[150px] py-2 border-2 [#D0D5DD] rounded-full ring-1 ring-[#1018280D] lg:text-lg md:text-lg
            sm:text-base text-[#344054] leading-7 text-sm text-13 leading-26 text-start"
          >
            <img src={Arrow} style={{ height: "auto" }} className="" /> GO BACK
          </button>
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-3xl mt-12 text-left">
            TELL US ABOUT YOUR SCHOOL
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          <form onSubmit={handleSubmit(onSubmit)} name="contact" method="post">
            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="school-name"
                placeholder="School name"
                {...register("schoolName", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.schoolName && <span className="text-red-500">School name is required</span>}
            </div>

            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="school-address"
                placeholder="School address"
                {...register("schoolAddress", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.schoolAddress && <span className="text-red-500">School address is required</span>}
            </div>

            <div className="relative z-0 w-full mb-1 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="class-grade"
                placeholder="Class / Grade"
                {...register("class", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.class && <span className="text-red-500">Class / Grade is required</span>}
            </div>

            <button
              type="submit"
              className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
            >
              Continue (2/3)
            </button>
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
export default SchoolInformation;
