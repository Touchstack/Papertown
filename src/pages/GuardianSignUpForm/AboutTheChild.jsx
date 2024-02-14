import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Component/Modal/Modal";
import Student from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Tick from "../../assets/Images/Tick.svg";
import Arrow from "../../assets/Images/arrow-left.svg";
import { useForm } from 'react-hook-form';
import { useSelector  } from 'react-redux';
import { createUser } from '../../api/index';
import { ClipLoader } from "react-spinners";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AboutTheChild = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [date, setDate] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  const goBack = () => {
    navigate(-1); // Navigates back one step in the history stack
  };


  const onSubmit = async (data) => {
    
    const payLoad = {
      has_guardian: formData.has_guardian,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password,
      studentDetails: {
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: date.toISOString(), // required
        phone_number: "",  // not required if HAS_GUARDIAN  === true
        personal_address: "", // not required if HAS_GUARDIAN  === true
        school: data.school, // required
        school_address: data.school_address, // required
        grade: data.grade, // required
      },
      guardianDetails: {
        first_name: formData.guardianDetails.first_name, // required
        last_name: formData.guardianDetails.last_name, // required
        phone_number: formData.guardianDetails.phone_number,// required
        personal_address: formData.guardianDetails.personal_address, // required if HAS_GUARDIAN  === true
        relationship: data.relationship, // required if HAS_GUARDIAN  === true
        email: "",
      },
    }
    
   // console.log("data", payLoad)
   
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
            TELL US ABOUT THE CHILD
          </h3>
          <div className="font-VarelaRegular lg:text-md md:text-md sm:text-base pt-10 text-[#393939] leading-7 text-sm text-13 leading-26 text-start">
          <form name="contact" method="post" onSubmit={handleSubmit(onSubmit)}>
            {/* Child's first name */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="Child’s first name"
                name="childsfirstname"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && <span className="text-red-500">Child's first name is required</span>}
            </div>
            {/* Child's last name */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="Child’s last name"
                name="child_last_name"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("last_name", { required: true })}
              />
              {errors.last_name && <span className="text-red-500">Child's last name is required</span>}
            </div>
            {/* Child's date of birth */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
                <DatePicker
                  id="date-of-birth"
                  placeholderText="MM/DD/YYYY"
                  name="date_of_birth"
                  selected={date} // Set the selected date
                  onChange={(date) => setDate(date)} // Update the form data
                  required={true}
                  className="block w-[430px] p-4 mt-2 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              {errors.date_of_birth && <span className="text-red-500">Child's date of birth is required</span>}
            </div>
            {/* Relationship with child */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="Relationship with child"
                name="relationship"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("relationship", { required: true })}
              />
              {errors.relationship && <span className="text-red-500">Relationship with child is required</span>}
            </div>
            {/* Child's school */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="Child's school"
                name="school"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("school", { required: true })}
              />
              {errors.school && <span className="text-red-500">Child's school is required</span>}
            </div>
            {/* School address */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="School address"
                name="school_address"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("school_address", { required: true })}
              />
              {errors.school_address && <span className="text-red-500">School address is required</span>}
            </div>
            {/* Child's class / grade */}
            <div className="relative w-full group text-md mb-4 font-VarelaRegular text-[#F4F5F7]">
              <input
                type="text"
                id="large-input"
                placeholder="Child’s class / grade"
                name="grade"
                className="block w-[430px] p-4 text-[#666] font-VarelaRegular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                {...register("grade", { required: true })}
              />
              {errors.grade && <span className="text-red-500">Child's class / grade is required</span>}
            </div>
            {/* Submit button */}
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
              Start submitting your writeups. You can join pressclubs close to
              you or available in your account.
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

export default AboutTheChild;
