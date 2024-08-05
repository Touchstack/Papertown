import { useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";
import { useLogin } from "@/hooks/api/useLogin";
import { useDispatch } from "react-redux";
import { SET_USER } from "@/redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/schemas";

const LogInModal = ({ isVisible, onClose }) => {
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  const gotToForgotPassword = () => {
    navigate("/forgot-password");
  };

  if (!isVisible) {
    return null;
  }
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
    onClose();
    navigate("/");
    setError("");
  };

  const onError = (error) => {
    const object = JSON.parse(error.message);

    setError(object?.message || "Something went wrong");
  };

  const { mutate, isPending, isError } = useLogin(onSuccess, onError);

  const initialValues = {
    email: "",
    password: "",
  };

  const OnSubmit = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Log in
      </header>
      {isError && (
        <div className="text-red-500 text-sm text-center py-2">{error}</div>
      )}

      <form onSubmit={handleSubmit} name="contact" method="post">
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              error ? "border border-red-500" : ""
            } block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300`}
          />
          {errors.email && touched.email && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              error ? "border border-red-500" : ""
            } block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300`}
          />
          {errors.password && touched.password && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.password}
            </p>
          )}
        </div>
        <p
          onClick={gotToForgotPassword}
          className="text-sm font-Regular cursor-pointer text-[#942D99] flex items justify-end m-4 hover:underline"
        >
          Forgot Password?
        </p>
        <div className="flex justify-center items-center">
          <button
            disabled={isPending}
            type="submit"
            className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
          >
            {isPending ? (
              <ClipLoader color="#FFF" size={20} />
            ) : (
              <p className="text-center font-bold text-xl">Log in</p>
            )}
          </button>
        </div>
        <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
          Need an account?
          <p
            onClick={goToSignUp}
            className="text-[#942D99] cursor-pointer hover:underline ml-1"
          >
            Sign up
          </p>
        </div>
      </form>
    </Modal>
  );
};

LogInModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LogInModal;
