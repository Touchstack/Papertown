import React from 'react'
import Modal from '../Modal/Modal';
import { useFormik } from "formik";
import { pressClubSchema } from "../../schemas";
import { ClipLoader } from 'react-spinners';

const PressClubModal = ({ isVisible, onClose }) => {
    const formik = useFormik({
        initialValues: {
            full_name: '',
            phone_number: '',
            email: '',
            role: '',
            address: '',
        },
        validationSchema: pressClubSchema,
        onSubmit: async (values, actions) => {
          console.log(values);
        },
      })
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6  ml-5 font-Bold text-[#000] break-normal md:break-all">
        Request press club
      </header>

      <form onSubmit={formik.handleSubmit} name="contact" method="post">
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="name"
            id="name"
            name="full_name"
            placeholder="Full Name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px]  p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.full_name}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="phone"
            id="phone_number"
            name="phone_number"
            placeholder="Phone Number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[50px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.phone_number && formik.touched.phone_number && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.phone_number}
            </p>
          )}
        </div>

        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[50px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="role"
            id="role"
            name="role"
            placeholder="Role/Position in school"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[50px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.role && formik.touched.role && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.role}
            </p>
          )}
        </div>

        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="address"
            id="address"
            name="address"
            placeholder="School’s address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[50px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.address && formik.touched.address && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.address}
            </p>
          )}
        </div>
        
        <div className="flex justify-center mb-3 items-center">
        <button
          disabled={formik.isSubmitting}
          type="button"
          onClick={formik.handleSubmit}
          className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
        >
          {formik.isSubmitting ? (
            <ClipLoader color="#FFF" size={20} />
          ) : (
            <p className="text-center font-bold text-xl">Request Press Club</p>
          )}
        </button>
        </div>
      </form>
    </Modal>
  )
}

export default PressClubModal