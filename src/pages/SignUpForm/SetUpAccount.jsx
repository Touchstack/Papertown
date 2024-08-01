import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student_Boy from "../../assets/Images/Boy.svg";
import Student_Girl from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import LogInModal from "../../Component/Modal/LogInModal";
import Modal from "../../Component/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import Tick from "../../assets/Images/Tick.svg";
import { setUpAccountSchema } from "@/schemas";
import { useFormik } from "formik";
import {
  CLEAR_SET_UP_ACCOUNT,
  SET_UP_ACCOUNT,
} from "@/redux/features/setUpAccountSlice";
import {
  CLEAR_GUARDIAN_CHECKED,
  selectGuardianChecked,
} from "@/redux/features/guardianCheckedSlice";

const SetUpAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isGuardianChecked = useSelector(selectGuardianChecked);

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
    dispatch(CLEAR_GUARDIAN_CHECKED());
    dispatch(CLEAR_SET_UP_ACCOUNT());
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };

  const OnSubmit = (values) => {
    dispatch(
      SET_UP_ACCOUNT({
        email: values.email,
        password: values.password,
      })
    );
    if (isGuardianChecked) {
      navigate("/signup/guardian-info");
    } else {
      navigate("/signup/gettoknowyou");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: setUpAccountSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

  return (
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
        <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-43l text-[#040A1D] text-4xl mt-12 text-left">
          SET UP ACCOUNT
        </h3>
        <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          <form onSubmit={handleSubmit}>
            <div className="relative w-full group text-md  mb-4 font-VarelaRegular text-[#858585]">
              <input
                type="text"
                id="email-address"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
                className="block w-[430px] sm:w-[395px]  p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.email && touched.email && (
                <span className="text-red-500">Email address is required</span>
              )}
            </div>

            <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] group text-md mb-3 font-VarelaRegular text-[#858585]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
                className="block w-[430px] sm:w-[395px]  p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              <span
                className="absolute right-6 mt-0 top-1/2 transform -translate-y-1/2 inline-block cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <div
              className={`${
                errors.password && touched.password && "text-red-500"
              } text-[#4C536A] text-sm font-Regular leading-4 tracking-normal text-left`}
            >
              <span className="p-1"> • </span>Use at least 8 characters. <br />
              <span className="p-1"> • </span>Besides letters, include at least
              a number <br />
              &nbsp; &nbsp; &nbsp; or symbol (!@#$%^&*-_+=). <br />
              <span className="p-1"> • </span>Password is case sensitive.
            </div>

            <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] mb-3 group text-md font-VarelaRegular text-[#858585]">
              <input
                type={showRePassword ? "text" : "password"}
                id="re-enter-password"
                placeholder="Re-enter password"
                name="confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.confirm_password}
                className="block w-[430px] sm:w-[390px] p-4 mt-2 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              <span
                className={`absolute right-6 ${
                  errors.confirm_password ? "-mt-3" : "mt-0"
                }  top-1/2 transform -translate-y-1/2 inline-block cursor-pointer`}
                onClick={() => setReShowPassword(!showRePassword)}
              >
                {showRePassword ? "HIDE" : "SHOW"}
              </span>
              {errors.confirm_password && touched.confirm_password && (
                <span className="text-red-500">{errors.confirm_password}</span>
              )}
            </div>

            <div className="text-[#858585] text-sm mt-8">
              <p className="mt-4 flex items-center">
                <label>
                  <input
                    type="checkbox"
                    className="accent-pink-400 w-10 h-10"
                  />
                </label>
                <span className="ml-1">
                  Please send me Papertown Imaginarium newsletters
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] sm:w-[390px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none focus:ring-amber-100 justify-center items-center mt-12"
            >
              Get started
            </button>

            <div className="lg:text-center text-left w-[430px] sm:w-[390px] mt-10 font-VarelaRegular text-[#828282]">
              Already have an account?
              <button
                onClick={() => setShowLogInModal(true)}
                type="button"
                className="text-[#942D99] font-VarelaRegular hover:underline ml-1"
              >
                Log in
              </button>
            </div>
          </form>

          {showLogInModal && (
            <LogInModal
              isVisible={showLogInModal}
              onClose={() => setShowLogInModal(false)}
            />
          )}

          <Modal isVisible={showSuccessModal} onClose={() => closeModal(1)}>
            <div className="flex justify-center items-center pb-5">
              <img src={Tick} alt="Tick.svg" />
            </div>
            <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex flex-col justify-center items-center max-w-[350px] ml-5 text-center mb-6 font-Bold text-[#040A1D]">
              Account Setup Complete
              <ClipLoader size={25} color="#DB2E78" className="mt-5" />
            </div>
          </Modal>
        </div>
      </div>

      {/* Right Col with Linear Gradient Background */}
      <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
        <img
          src={isGuardianChecked ? Student_Girl : Student_Boy}
          style={{ height: "auto" }}
          className=""
        />
      </div>
    </div>
  );
};

export default SetUpAccount;
