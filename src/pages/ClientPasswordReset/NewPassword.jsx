import { ClipLoader } from "react-spinners";
import { useFormik } from "formik";
import { usePasswordReset } from "@/hooks/api/usePasswordReset";
import Common from "@/Component/Common";
import { useNewPassword } from "@/hooks/api/useNewPassword";
import { useState } from "react";
import { resetPasswordSchema } from "@/schemas";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSuccess = (success) => {
    console.log(success);

    navigate("/reset-successful");
    setError("");
  };

  const onError = (error) => {
    const object = JSON.parse(error.message);
    console.log(object);
    setError(object?.message || "Something went wrong");
  };

  const { mutate, isPending, isError } = useNewPassword(onSuccess, onError);

  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const OnSubmit = (values) => {
    const body = {
      password: values.password,
      confirm_password: values.confirm_password,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <Common>
      <div className="bg-white md:px-[56px] md:py-[50px] flex flex-col gap-y-[40px] md:rounded-[25px]">
        <div className="flex flex-col gap-y-[20px]">
          <header className=" lg:text-3xl md:text-2xl sm:text-xl text-xl font-Bold text-[#000] break-normal md:break-all">
            Enter New Password
          </header>

          {isError && (
            <div className="text-red-500 text-sm text-center py-2">
              {error}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          className="flex flex-col gap-y-[32px]"
        >
          <div className="flex flex-col gap-y-[15px]">
            <div className="relative  group text-sm font-Regular text-[#858585] items-center justify-center flex">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="New password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
                className="block p-3 md:w-[350px] w-[300px] text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
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

            <div className="relative  group text-sm font-Regular text-[#858585]  flex flex-col">
              <input
                type={showRePassword ? "text" : "password"}
                id="re-enter-password"
                placeholder="Re-enter password"
                name="confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.confirm_password}
                className="block p-3 md:w-[350px] w-[300px]  text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
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
                <p className="text-center font-bold text-xl">Submit</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </Common>
  );
};

export default NewPassword;
