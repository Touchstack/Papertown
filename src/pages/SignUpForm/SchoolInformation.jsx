import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";
import { useRegistration } from "@/hooks/api/useRegistration";

import Student_Boy from "../../assets/Images/Boy.svg";
import Student_Girl from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";

import {
  CLEAR_GET_TO_KNOW_YOU,
  selectGetToKnowYouState,
} from "@/redux/features/getToKnowYouSlice";
import {
  CLEAR_SET_UP_ACCOUNT,
  selectSetUpAccountState,
} from "@/redux/features/setUpAccountSlice";
import {
  CLEAR_GUARDIAN_CHECKED,
  selectGuardianChecked,
} from "@/redux/features/guardianCheckedSlice";
import {
  CLEAR_YOUR_CHILD_INFO,
  selectYourChildInfoState,
} from "@/redux/features/yourChildInfoSlice";
import {
  CLEAR_GUARDIAN_INFO,
  selectGuardianInfoState,
} from "@/redux/features/guardianInfoSlice";
import { schoolInfoSchema } from "@/schemas";
import { useState } from "react";
import { SET_USER } from "@/redux/features/userSlice";
const SchoolInformation = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const guardianChecked = useSelector(selectGuardianChecked);

  const setUpAccountData = useSelector(selectSetUpAccountState);
  const getToKnowYouData = useSelector(selectGetToKnowYouState);
  const guardianInfoData = useSelector(selectGuardianInfoState);
  const yourChildInfoData = useSelector(selectYourChildInfoState);

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };

  const onSuccess = (success) => {
    dispatch(
      SET_USER({
        status: success?.status,
        access_token: success?.access_token,
        token_type: success?.token_type,
        user: success?.user,
        writer: success?.writer,
      })
    );
    dispatch(CLEAR_GET_TO_KNOW_YOU());
    dispatch(CLEAR_GUARDIAN_CHECKED());
    dispatch(CLEAR_GUARDIAN_INFO());
    dispatch(CLEAR_SET_UP_ACCOUNT());
    dispatch(CLEAR_YOUR_CHILD_INFO());
    navigate("/");
  };

  const onError = (error) => {
    const object = JSON.parse(error.message);

    setError(object?.message || "Something went wrong");
  };

  const { mutate, isPending, isError } = useRegistration(onSuccess, onError);

  const initialValues = {
    school: "",
    school_address: "",
    grade: "",
  };

  const OnSubmit = (values) => {
    const body = guardianChecked
      ? {
          g_email: setUpAccountData.email,
          password: setUpAccountData.password,
          ...guardianInfoData,
          ...yourChildInfoData,
          school: values.school,
          school_address: values.school_address,
          grade: values.grade,
        }
      : {
          ...setUpAccountData,
          ...getToKnowYouData,
          school: values.school,
          school_address: values.school_address,
          grade: values.grade,
        };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schoolInfoSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

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
          {isError && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-3xl mt-12 text-left">
            {guardianChecked ? (
              <p>
                Tell Us About Your Child’s <br /> School
              </p>
            ) : (
              <p>
                TELL US ABOUT YOUR <br /> SCHOOL{" "}
              </p>
            )}
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            <form onSubmit={handleSubmit} name="contact" method="post">
              <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="school_name"
                  placeholder={
                    guardianChecked ? "Name of School" : "School name"
                  }
                  name="school"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.school}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.school && touched.school && (
                  <span className="text-red-500">{errors.school}</span>
                )}
              </div>

              <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="school_address"
                  placeholder={
                    guardianChecked
                      ? "School’s Address"
                      : "School address/location"
                  }
                  name="school_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.school_address}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.school_address && touched.school_address && (
                  <span className="text-red-500">{errors.school_address}</span>
                )}
              </div>

              <div className="relative z-0 w-full mb-1 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="class_grade"
                  placeholder={
                    guardianChecked ? "Child’s Class/Grade" : "Class /Year"
                  }
                  name="grade"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.grade}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.grade && touched.grade && (
                  <span className="text-red-500">{errors.grade}</span>
                )}
              </div>

              <button
                type="submit"
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
              >
                {isPending ? (
                  <ClipLoader color="#FFF" size={20} />
                ) : (
                  <p>Done</p>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
          <img
            src={guardianChecked ? Student_Girl : Student_Boy}
            style={{ height: "auto" }}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default SchoolInformation;
