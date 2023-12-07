// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//const passwordRules =
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  password: yup
    .string()
    // .min(5)
    //.matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is Required"),
});
