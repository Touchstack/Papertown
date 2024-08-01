import { ClipLoader } from "react-spinners";
import { useFormik } from "formik";
import { usePasswordReset } from "@/hooks/api/usePasswordReset";
import Common from "@/Component/Common";
import { forgotPasswordSchema } from "@/schemas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SET_RESET_PASSWORD_EMAIL } from "@/redux/features/resetPasswordEmailSlice";
import { useDispatch } from "react-redux";

const PasswordReset = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSuccess = (success) => {
    console.log(success);
    setSuccess(success?.message);
    setTimeout(() => {
      navigate("/reset-code");
    }, 5000);

    setError("");
  };

  const onError = (error) => {
    const object = JSON.parse(error.message);
    console.log(object);
    setError(object?.message || "Something went wrong");
  };

  const { mutate, isPending, isError } = usePasswordReset(onSuccess, onError);

  const initialValues = {
    email: "",
  };

  const OnSubmit = (values) => {
    const body = {
      email: values.email,
    };

    dispatch(SET_RESET_PASSWORD_EMAIL(values.email));

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <Common>
      <div className="bg-white md:px-[56px] md:py-[50px] flex flex-col gap-y-[40px] md:rounded-[25px]">
        <div className="flex flex-col gap-y-[20px]">
          {success && (
            <p className="text-green-700 font-VarelaRegular text-center">
              {success}
            </p>
          )}
          <header className=" lg:text-3xl md:text-2xl sm:text-xl text-xl font-Bold text-[#000] break-normal md:break-all">
            Forgot your password?
          </header>
          <p className="font-VarelaRegular">
            Don’t worry, it happens to the best of us!
          </p>
          {isError && (
            <div className="text-red-500 text-sm text-center py-2">{error}</div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          className="flex flex-col gap-y-[32px]"
        >
          <div className="relative  group text-sm font-Regular text-[#858585] items-center justify-center flex">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.email ? "border border-red-500" : ""
              } block p-3 md:w-[350px] w-[300px] h-[55px] font-VarelaRegular  text-[#666]  rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300`}
            />
            {errors.email && touched.email && (
              <p className="error absolute bottom-0 left-0  mb-[-19px] text-red-500 text-xs">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              disabled={isPending}
              type="submit"
              className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356]  font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
            >
              {isPending ? (
                <ClipLoader color="#FFF" size={20} />
              ) : (
                <p className="text-center font-bold text-xl">Continue</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </Common>
  );
};

export default PasswordReset;
