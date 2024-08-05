import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { DatePicker } from "antd";
import { getToKnowYouSchema } from "@/schemas";
import { useFormik } from "formik";
import {
  CLEAR_GET_TO_KNOW_YOU,
  SET_GET_TO_KNOW_YOU,
} from "@/redux/features/getToKnowYouSlice";
import { formatDateISO } from "@/utils/dateFormatting";

const GetToKnowYou = () => {
  const [date, setDate] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(CLEAR_GET_TO_KNOW_YOU());
    navigate(-1);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    personal_address: "",
  };

  const OnSubmit = (values) => {
    dispatch(
      SET_GET_TO_KNOW_YOU({
        first_name: values.first_name,
        last_name: values.last_name,
        date_of_birth: formatDateISO(values.date_of_birth.toISOString()),
        phone_number: values.phone_number,
        personal_address: values.personal_address,
      })
    );
    navigate("/signup/school-info");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getToKnowYouSchema,
    onSubmit: OnSubmit,
  });

  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    touched,
    errors,
  } = formik;

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
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-3xl mt-12 text-left">
            Tell Us About Yourself
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            <form onSubmit={handleSubmit} name="contact" method="post">
              <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  placeholder="First name"
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.first_name && touched.first_name && (
                  <span className="text-red-500">{errors.first_name}</span>
                )}
              </div>

              <div className="relative z-0 w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="last_name"
                  placeholder="Last name"
                  name="last_name"
                  onChange={handleChange}
                  value={values.last_name}
                  onBlur={handleBlur}
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.last_name && touched.last_name && (
                  <span className="text-red-500">{errors.last_name}</span>
                )}
              </div>

              <div className="relative  w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <DatePicker
                  id="date_of_birth"
                  placeholder="Date of birth"
                  name="date_of_birth"
                  selected={date} // Set the selected date
                  onChange={(date) => {
                    setDate(date);
                    setFieldValue("date_of_birth", date);
                  }}
                  value={values.date_of_birth}
                  onBlur={handleBlur} // Update the form data
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.date_of_birth && touched.date_of_birth && (
                  <span className="text-red-500">{errors.date_of_birth}</span>
                )}
              </div>

              <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="tel"
                  id="phone_number"
                  placeholder="Phone number"
                  name="phone_number"
                  onChange={handleChange}
                  value={values.phone_number}
                  onBlur={handleBlur}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.phone_number && touched.phone_number && (
                  <span className="text-red-500">{errors.phone_number}</span>
                )}
              </div>

              <div className="relative z-0 w-full mb-1 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="home_address"
                  placeholder="Address"
                  name="personal_address"
                  onChange={handleChange}
                  value={values.personal_address}
                  onBlur={handleBlur}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.personal_address && touched.personal_address && (
                  <span className="text-red-500">
                    {errors.personal_address}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
              focus:ring-amber-100 justify-center items-center mt-12"
              >
                Continue (1/2)
              </button>
            </form>
          </div>
        </div>

        <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
          <img src={Student} style={{ height: "auto" }} className="" />
        </div>
      </div>
    </div>
  );
};

export default GetToKnowYou;
