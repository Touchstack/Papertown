import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { useForm } from 'react-hook-form';
import { setFormData } from "../../context/actions/formAction";
import { useDispatch, useSelector  } from 'react-redux';

const SchoolInformation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formReducer.formData);

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
    dispatch(setFormData({  //on go back reset from in redux state
      email: "",
      password: "",
      confirm_password: "",
      studentDetails: {
        first_name: "",
        last_name: "",
        date_of_birth: "", // required
        phone_number: "",  // not required if HAS_GUARDIAN  === true
        personal_address: "", // not required if HAS_GUARDIAN  === true
        school: "", // required
        school_address: "", // required
        grade: "", // required
      },
      guardianDetails: {
        first_name: "", // required
        last_name: "", // required
        phone_number: "",// required
        personal_address: "", // required if HAS_GUARDIAN  === true
        relationship: "", // required if HAS_GUARDIAN  === true
        email: "",
      },
    }))
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate('/signup/guardian-info')
    dispatch(setFormData({
      ...formData, // Change formData to state.formData
      studentDetails: {
       school: data.school,
       school_address: data.school_address,
       grade: data.grade
      }
    }));
  };

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
            TELL US ABOUT YOUR SCHOOL
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          <form onSubmit={handleSubmit(onSubmit)} name="contact" method="post">
            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="school-name"
                placeholder="School name"
                {...register("school", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.school && <span className="text-red-500">School name is required</span>}
            </div>

            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="school-address"
                placeholder="School address"
                {...register("schoolAddress", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.school_address && <span className="text-red-500">School address is required</span>}
            </div>

            <div className="relative z-0 w-full mb-1 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="class-grade"
                placeholder="Class / Grade"
                {...register("grade", { required: true })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.grade && <span className="text-red-500">Class / Grade is required</span>}
            </div>

            <button
              type="submit"
              className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
            >
              Continue (2/4)
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
export default SchoolInformation;
