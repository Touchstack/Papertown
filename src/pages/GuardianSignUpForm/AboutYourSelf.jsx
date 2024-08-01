import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector  } from 'react-redux';
import { setFormData } from "../../context/actions/formAction";


const AboutYourself = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const goBack = () => {
    navigate(-1); 
 
  };

  const onSubmit = (data) => {
    navigate("/signup/about-child");
    dispatch(setFormData({
      ...formData, 
      guardianDetails: {
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        personal_address: data.personal_address
      }
    }));
  };

  return (
    <div className="py-18">
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
            TELL US ABOUT YOURSELF
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            <form name="contact" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="first name"
                  placeholder="First name"
                  name="fullname"
                  {...register("first_name", { required: true })}
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.first_name && <span className="text-red-500">First name is required</span>}
              </div>

              <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="last name"
                  placeholder="Last name"
                  name="last_name"
                  {...register("last_name", { required: true })}
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.last_name && <span className="text-red-500">last name is required</span>}
              </div>

              <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="phonenumber"
                  placeholder="Phone number"
                  name="phonenumber"
                  {...register("phone_number", { required: true })}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.phone_number && <span className="text-red-500">Phone number is required</span>}
              </div>
              <div className="relative z-0 w-full mb-1 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="personaladdress"
                  placeholder="Home Address"
                  name="personaladdress"
                  {...register("personal_address", { required: true })}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.personal_address && <span className="text-red-500">Personal Address is required</span>}
              </div>

              <button
                type="submit"
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
              >
                1/2
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

export default AboutYourself;
