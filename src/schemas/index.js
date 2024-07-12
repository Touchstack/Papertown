import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});


export const pressClubSchema = yup.object().shape({
  full_name: yup
  .string()
  .required('full name is required'),
  phone_number: yup
  .number()
  .required('phone number is required'),
  email: yup
  .string()
  .email("Please enter a valid email")
  .required("Email is Required"),
  role: yup
  .string()
  .required('Role is Required'),
  address: yup
  .string()
  .required('Address is required')
})
