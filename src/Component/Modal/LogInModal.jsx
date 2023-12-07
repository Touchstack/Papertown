import React, { useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { logInUser } from "../../Api";

const LogInModal = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isVisible) {
    return null;
  }
  const handleLogin = async () => {
    try {
      const res = await logInUser({ username, password });
      console.log("This is the response", res);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      } else {
        console.error("Login failed. Unexpected status:", res.status);
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed. Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  const onSubmit = async (values, actions) => {
    try {
      await basicSchema.validate(values, { abortEarly: false });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      // Validation successful - make API call or handle login logic here

      const res = await logInUser(JSON.stringify(values));
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      } else {
        console.error("Login failed. Unexpected status:", res.status);
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  //console.log(errors);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Log in
      </header>

      <form onSubmit={onSubmit} name="contact" method="post">
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} // validates the form when you click out of the input
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
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
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {errors.password && touched.password && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.password}
            </p>
          )}
        </div>
        <a
          href="#"
          className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
           hover:underline"
        >
          Forgot Password?
        </a>
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            type="submit"
            className="opacity-35 cursor-not-allowed text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
          >
            <p className="text-center font-bold text-xl">Log in</p>
          </button>
        </div>
        <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
          Need an account?
          <a href="#" className="text-[#942D99] hover:underline ml-1">
            Sign up
          </a>
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
