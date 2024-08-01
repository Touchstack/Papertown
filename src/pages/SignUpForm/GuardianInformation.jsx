import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  CLEAR_GUARDIAN_INFO,
  SET_GUARDIAN_INFO,
} from "@/redux/features/guardianInfoSlice";
import { useFormik } from "formik";
import { guardianInfoSchema } from "@/schemas";

const GuardianInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    dispatch(CLEAR_GUARDIAN_INFO());
  };

  const initialValues = {
    guardian_name: "",
    g_phone: "",
    personal_address: "",
  };

  const OnSubmit = (values) => {
    dispatch(
      SET_GUARDIAN_INFO({
        guardian_name: values.guardian_name,
        g_phone: values.g_phone,
        personal_address: values.personal_address,
      })
    );
    navigate("/signup/about-child");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: guardianInfoSchema,
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
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-3xl mt-12 text-left">
            Parent/Guardian’s Information
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
            <form onSubmit={handleSubmit} name="contact" method="post">
              <div className="relative z-0 w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="full-name"
                  placeholder="Full name"
                  name="guardian_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guardian_name}
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.guardian_name && touched.guardian_name && (
                  <span className="text-red-500">{errors.guardian_name}</span>
                )}
              </div>

              <div className="relative z-0 w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Phone number"
                  name="g_phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.g_phone}
                  className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
                {errors.g_phone && touched.g_phone && (
                  <span className="text-red-500">{errors.g_phone}</span>
                )}
              </div>

              <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
                <input
                  type="text"
                  id="contact-address"
                  placeholder="Contact Address"
                  name="personal_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.personal_address}
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
                Continue (1/3)
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
GuardianInformation.propTypes = {
  showModal: PropTypes.bool,
};
export default GuardianInformation;
