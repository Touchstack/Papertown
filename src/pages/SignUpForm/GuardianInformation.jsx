import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFormData } from "../../context/actions/formAction";

const GuardianInformation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);


  const dispatch = useDispatch();

  const openModal = (modalNumber) => {
    // Close all modals first
    setShowModal(false);
    setShowModal2(false);

    // Open the desired modal
    switch (modalNumber) {
      case 1:
        setShowModal(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      default:
        break;
    }
  };
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
     navigate('/signup/setupaccount')
     dispatch(setFormData({ 
      guardianDetails: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        personal_address: "",
        relationship: ""
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
            Guardian info
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          <form onSubmit={handleSubmit(onSubmit)} name="contact" method="post">
            <div className="relative z-0 w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="first-name"
                placeholder="Parent/Guardian's first name"
                {...register("first_name", { required: true })}
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.first_name && <span  className="text-red-500">Parent/Guardian's full name is required</span>}
            </div>

            <div className="relative z-0 w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="full-name"
                placeholder="Parent/Guardian's last name"
                {...register("last_name", { required: true })}
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.last_name && <span  className="text-red-500">Parent/Guardian's full name is required</span>}
            </div>

            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="email"
                id="email-address"
                placeholder="Parent/Guardian's email address"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.email && <span  className="text-red-500">Valid email address is required</span>}
            </div>

            <div className="relative z-0 w-full mb-4 group text-md font-VarelaRegular text-[#F4F5F7]">
              <input
                type="tel"
                id="phone-number"
                placeholder="Parent/Guardian's phone number"
                {...register("phone_number", { required: true, pattern: /^[0-9]{10}$/ })}
                className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.phone_Number && <span className="text-red-500">Valid phone number is required (10 digits)</span>}
            </div>

            <button
              type="submit"
              className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
            >
             Continue (3/4)

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
GuardianInformation.propTypes = {
  showModal: PropTypes.bool,
};
export default GuardianInformation;
