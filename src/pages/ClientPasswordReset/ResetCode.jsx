import { ClipLoader } from "react-spinners";
import { useFormik } from "formik";
import { useResetCode } from "@/hooks/api/useResetCode";
import Common from "@/Component/Common";
import { forgotPasswordSchema, resetCodeSchema } from "@/schemas";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { shortenEmail } from "@/utils/shortenEmail";
import { useSelector } from "react-redux";
import { selectResetPasswordEmail } from "@/redux/features/resetPasswordEmailSlice";

const ResetCode = () => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const email = useSelector(selectResetPasswordEmail);
  const onSuccess = (success) => {
    console.log(success);
    navigate("/new-password");
    setError("");
  };

  const onError = (error) => {
    const object = JSON.parse(error.message);
    console.log(object);
    setError(object?.message || "Something went wrong");
  };

  const { mutate, isPending, isError } = useResetCode(onSuccess, onError);

  const initialValues = {
    code: "",
  };

  const OnSubmit = (values) => {
    console.log(values.code);
    const body = {
      code: values.code,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: resetCodeSchema,
    onSubmit: OnSubmit,
  });

  const {
    setFieldValue,
    handleSubmit,
    handleBlur,
    touched,
    errors,
  } = formik;

  return (
    <Common>
      <div className="bg-white md:px-[56px] md:py-[50px] flex flex-col gap-y-[40px] md:rounded-[25px]">
        <div className="flex flex-col gap-y-[20px]">
          <header className=" lg:text-3xl md:text-2xl sm:text-xl text-xl font-Bold text-[#000] break-words ">
            Verify Your Email
          </header>
          <p className="font-VarelaRegular">
            We’ve sent a code to {shortenEmail(email)}
          </p>
          {isError && (
            <div className="text-red-500 text-sm text-center mt-2">{error}</div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          className="flex flex-col gap-y-[32px]"
        >
            <div>
            <InputOTP
            maxLength={4}
            value={value}
            onChange={(value) => {
              setValue(value);
              setFieldValue("code", value);
            }}
            name="code"
            onBlur={handleBlur}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          {errors.code && touched.code && (
            <p className="text-red-500 text-sm mt-2">{errors.code}</p>
          )}
            </div>
        
          <div className="flex justify-center items-center">
            <button
              disabled={isPending}
              type="submit"
              className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356]  font-Regular rounded-full p-3 w-full min-w-[300px]"
            >
              {isPending ? (
                <ClipLoader color="#FFF" size={20} />
              ) : (
                <p className="text-center font-bold text-xl">Verify</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </Common>
  );
};

export default ResetCode;
