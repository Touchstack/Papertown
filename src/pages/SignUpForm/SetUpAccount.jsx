import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../../assets/Images/Boy.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import LogInModal from "../../Component/Modal/LogInModal";
import Modal from "../../Component/Modal/Modal";
import { useForm } from 'react-hook-form';
import { useSelector  } from 'react-redux';
import { ClipLoader } from "react-spinners";
import Tick from "../../assets/Images/Tick.svg";
import { createUser } from "../../api";



const SetUpAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [showSuccessModal, setshowSuccessModal] = useState(false)

  const navigate = useNavigate();
  const formData = useSelector(state => state.formReducer.formData);

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit, formState: { errors, isSubmitting }, getValues } = useForm();

  // const onSubmit = (data) => {
  //   navigate('/signup/gettoknowyou')
  //   dispatch(setFormData({ 
  //     email: data.email,
  //     password: data.password,
  //     confirm_password: data.confirm_password
  //   }));
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeModal = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setshowSuccessModal(false);
        break;
      // case 2:
      //   setShowModal2(false);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (data) => {
    //make api call pass data in redux store and clear store state
      
    const payLoad = {
      has_guardian: formData.has_guardian,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
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
        first_name: formData.guardianDetails.first_name,
        last_name: formData.guardianDetails.last_name,
        email: formData.guardianDetails.email, // alert Eugene its not in structure
        phone_number: formData.guardianDetails.phone_number,
        personal_address: "",
        relationship: ""
       }
    }

    try {
      const res = await createUser(payLoad)
      //console.log(res);
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setshowSuccessModal(true)
        setTimeout(() => {
          navigate('/profile');
        }, 3000);
      } else {
        const errorMessage = res?.response?.data?.message || "Couldn't SignUp. Please try again.";
        alert(errorMessage);
        setShowModal(false)
      }
    } catch (error) {
      console.error("Login failed. Error:", error);
    }
  };


  return (
    // <div className="py-18">
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
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-43l text-[#040A1D] text-4xl mt-12 text-left">
            SET UP ACCOUNT
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative w-full group text-md  mb-4 font-VarelaRegular text-[#858585]">
              <input
                type="text"
                id="email-address"
                name="email"
                placeholder="Email address"
                {...register("email", { required: true })}
                className="block w-[430px] sm:w-[395px]  p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
              {errors.email && <span className="text-red-500">Email address is required</span>}
            </div>
            
            <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] group text-md mb-3 font-VarelaRegular text-[#858585]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create password"
                {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*-_+=]{8,}$/ })}
                className="block w-[430px] sm:w-[395px]  p-4 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
               <span className="absolute right-6 mt-0 top-1/2 transform -translate-y-1/2 inline-block cursor-pointer" onClick={togglePasswordVisibility}>
                 {showPassword ? "HIDE" : "SHOW"} {/* Toggle the text based on password visibility */}
               </span>
              {errors.password && <span className="text-red-500">Password must be at least 8 characters long and contain at least one letter and one number or symbol</span>}
            </div>
            
            <div className="relative z-0 md:w-[400px] sm:w-[370px] w-[370px] mb-3 group text-md font-VarelaRegular text-[#858585]">
              <input
                type={showRePassword ? "text" : "password"}
                id="re-enter-password"
                placeholder="Re-enter password"
                name="confirm_password"
                {...register("confirm_password", { required: true, validate: value => value === getValues("password") || "Passwords must match" })}
                className="block w-[430px] sm:w-[390px] p-4 mt-2 text-[#858585] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
               <span className="absolute right-6 mt-0 top-1/2 transform -translate-y-1/2 inline-block cursor-pointer" onClick={() => setReShowPassword(!showRePassword)}>
                 {showRePassword ? "HIDE" : "SHOW"}
               </span>
              {errors.confirm_password && <span className="text-red-500">{errors.confirm_password.message}</span>}
            </div>
            
            <div className="text-[#4C536A] text-sm font-Regular leading-4 tracking-normal text-left">
              <span className="p-1"> • </span>Use at least 8 characters. <br /> 
              <span className="p-1"> • </span>Besides letters, include at least a number or symbol (!@#$%^&*-_+=). <br /> 
              <span className="p-1"> • </span>Password is case sensitive.
            </div>
            
            <div className="text-[#858585] text-sm mt-8">
              {/* <p className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    className="accent-pink-400 w-10 h-10"
                    required
                  />
                </label>
                <span className="ml-2">
                  I confirm that this account has been created with the consent of a parent or guardian
                </span>
              </p> */}
              <p className="mt-4 flex items-center">
                <label>
                  <input
                    type="checkbox"
                    className="accent-pink-400 w-10 h-10"
                  />
                </label>
                <span className="ml-1">
                  Please send me Papertown Imaginarium newsletters
                </span>
              </p>
            </div>
            
            <button
              type="submit"
              className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] sm:w-[390px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none focus:ring-amber-100 justify-center items-center mt-12"
            >
               {isSubmitting ? (
                <ClipLoader size={15} color="#FFFFFF"/>
              ) : (
                "Done"
              )}
            </button>
            
            <div className="lg:text-center text-left w-[430px] sm:w-[390px] mt-10 font-VarelaRegular text-[#828282]">
              Already have an account?
              <button
                onClick={openLoginModal}
                className="text-[#942D99] font-VarelaRegular hover:underline ml-1"
              >
                Log in
              </button>
            </div>
          </form>


            <Modal isVisible={showModal} onClose={closeLoginModal}>
              <LogInModal isVisible={showModal} onClose={closeLoginModal} />
            </Modal>

            <Modal isVisible={showSuccessModal} onClose={() => closeModal(1)}>
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
        </div>

        {/* Right Col with Linear Gradient Background */}
        <div className="min-h-screen flex justify-center items-center pb-5 bg-gradient-to-r from-blue-500 to-pink-500">
          <img src={Student} style={{ height: "auto" }} className="" />
         </div>
      </div>
    // </div>
  );
};

export default SetUpAccount;
