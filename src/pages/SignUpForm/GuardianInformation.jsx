import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Component/Modal/Modal";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import Tick from "../../assets/Images/Tick.svg";
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { useSelector  } from 'react-redux';
import { createUser } from "../../api";
import { ClipLoader } from "react-spinners";

const GuardianInformation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const formData = useSelector(state => state.formReducer.formData);


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
  const closeModal = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      default:
        break;
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    //make api call pass data in redux store and clear store state
      
    const payLoad = {
      has_guardian: formData.has_guardian,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password,
      studentDetails: {
        first_name: formData.studentDetails.first_name,
        last_name: formData.studentDetails.last_name,
        date_of_birth: formData.studentDetails.date_of_birth, // required
        phone_number: formData.studentDetails.phone_number,  // not required if HAS_GUARDIAN  === true
        personal_address: formData.studentDetails.personal_address, // not required if HAS_GUARDIAN  === true
        school: formData.studentDetails.school, // required
        school_address: formData.studentDetails.school_address, // required
        grade: formData.studentDetails.grade, // required
      },
      guardianDetails: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email, // alert Eugene its not in structure
        phone_number: data.phone_number,
        personal_address: "",
        relationship: ""
       }
    }

    try {
      const res = await createUser(payLoad)
      //console.log(res);
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setShowModal(true)
        setTimeout(() => {
          navigate('/profile');
        }, 3000);
      } else {
        alert("Login failed. Unexpected status:" + res.data.message);
        setShowModal(false)
      }
    } catch (error) {
      console.error("Login failed. Error:", error);
    }
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
            {isSubmitting ? (
                <ClipLoader size={15} color="#FFFFFF"/>
              ) : (
                "Done"
              )}

            </button>
          </form>
          </div>
          <Modal isVisible={showModal} onClose={() => closeModal(1)}>
            <div className="flex justify-center items-center pb-5">
              <img src={Tick} alt="Tick.svg" />
            </div>
            <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex flex-col justify-center items-center max-w-[350px] ml-5 text-center mb-6 font-Bold text-[#040A1D]">
              Account Setup Complete

              <ClipLoader size={25} color="#DB2E78" className="mt-5"/>
            </div>
            {/* <p className="flex text-center m-5 max-w-[350px] mb-14 font-VarelaRegular text-[#4C536A] text-lg">
              You"ll receive an email notification when your parent or guardian
              has completed the consent form
            </p> */}
           
          </Modal>
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
