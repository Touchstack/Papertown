import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInModal from "../../Component/Modal/LogInModal";
import Modal from "../../Component/Modal/Modal";
import Student from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFormData } from "../../context/actions/formAction";

const GuardianAccountSetup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    navigate("/signup/about-yourself");
    dispatch(setFormData({ 
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password
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
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-43l text-[#040A1D] text-4xl mt-12 text-left">
            SET UP ACCOUNT
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#858585]">
                <input
                  type="text"
                  placeholder="Email address"
                  name="email_address"
                  {...register("email", { required: true })}
                  className="block w-[430px] sm:w-[395px]  p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.email && <span className="text-red-500">Email address is required</span>}
              </div>
              <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] group text-md mb-3 font-VarelaRegular text-[#858585]">
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create password"
                  name="password"
                  {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*-_+=]{8,}$/ })}
                  className="block w-[430px] sm:w-[395px] p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                <span className="absolute right-6 mt-0 top-1/2 transform -translate-y-1/2 inline-block cursor-pointer" onClick={togglePasswordVisibility}>
                 {showPassword ? "HIDE" : "SHOW"} {/* Toggle the text based on password visibility */}
                </span>
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="text-[#4C536A] text-sm font-Regular leading-4 tracking-normal text-left">
                <span className="p-1"> • </span>Use at least 8 characters.{" "}
                <br /> <span className="p-1"> • </span>Besides letters, include
                at least a number or symbol (!@#$%^&*-_+=). <br />{" "}
                <span className="p-1"> • </span>Password is case sensitive.
              </div>
              <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] mb-1 group text-md font-VarelaRegular text-[#858585]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Re-enter password"
                  name="confirm_password"
                  {...register("confirm_password", { required: true, validate: value => value === getValues("password") || "Passwords must match" })}
                  className="block w-[430px] sm:w-[390px] p-4 mt-2 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {/* <span className="absolute right-6 mt-0 top-1/2 transform -translate-y-1/2 inline-block">
                  SHOW
                </span> */}
                {errors.password && <span className="text-red-500">{errors.confirm_password.message}</span>}
              </div>
              <div className="text-[#858585] text-sm mt-8">
                <p className="flex items-center">
                  <label>
                    <input
                      type="checkbox"
                      className="accent-pink-400 w-10 h-10"
                      required
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
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] sm:w-[390px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
              >
                Get started
              </button>
              <div className="lg:text-center text-left w-[430px] sm:w-[390px] mt-10 font-VarelaRegular text-[#828282]">
                Already have an account?
                <button
                  onClick={openLoginModal}
                  className="text-[#942D99] font-VarelaRegular hover:underline ml-1"
                >
                  Log in
                </button>
              </div>
            </form>
            <Modal isVisible={showModal} onClose={closeLoginModal}>
              <LogInModal isVisible={showModal} onClose={closeLoginModal} />
            </Modal>
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

export default GuardianAccountSetup;
