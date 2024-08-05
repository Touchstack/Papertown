import * as yup from "yup";

const passwordRegex =
 /^(?=.*[A-Za-z])(?=.*[0-9\W_])[A-Za-z0-9\W_]{8,}$/



export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
});

export const resetCodeSchema = yup.object().shape({
  code: yup
    .string()
    .min(4, "Code must be 4 digits")
    .required("Code is Required"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRegex)
    .required("Password is Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const setUpAccountSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  password: yup
    .string()
    .matches(passwordRegex)
    .required("Password is Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const getToKnowYouSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  phone_number: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  personal_address: yup.string().required("Personal address is required"),
});

export const guardianInfoSchema = yup.object().shape({
  guardian_name: yup.string().required("Guardian name is required"),
  g_phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be 10 digits")
    .required("Guardian phone number is required"),
  personal_address: yup.string().required("Personal address is required"),
});

export const yourChildInfoSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  relationship: yup.string().required("Relationship is required"),
});

export const schoolInfoSchema = yup.object().shape({
  school: yup.string().required("School name is required"),
  school_address: yup.string().required("School address is required"),
  grade: yup.string().required("Grade is required"),
});

export const pressClubSchema = yup.object().shape({
  full_name: yup.string().required("full name is required"),
  phone_number: yup.number().required("phone number is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  role: yup.string().required("Role is Required"),
  address: yup.string().required("Address is required"),
});
