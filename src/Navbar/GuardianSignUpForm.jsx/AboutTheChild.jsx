import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Component/Modal/Modal";
import Student from "../../assets/Images/Girl.svg";
import AppLogo from "../../assets/Images/Logo.svg";
import Tick from "../../assets/Images/Tick.svg";
import Arrow from "../../assets/Images/arrow-left.svg";

const AboutTheChild = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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

  return (
    <div className="py-18 px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
        {/* Left Col */}
        <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
          <img src={AppLogo} style={{ height: "auto" }} className="mb-8" />
          <button
            onClick={goBack}
            className="font-Bold inline-flex gap-2 items-center justify-center
            w-[150px] py-2 border-2 [#D0D5DD] rounded-full lg:text-lg md:text-lg
            sm:text-base text-[#344054] leading-7 text-sm tracking-wider text-13
            leading-26 text-start"
          >
            <img src={Arrow} style={{ height: "auto" }} className="" /> GO BACK
          </button>
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#040A1D] text-3xl mt-12 text-left">
            TELL US ABOUT YOURSELF
          </h3>
          <div className="font-Medium lg:text-lg md:text-lg sm:text-base pt-10 text-[#393939] leading-7 text-sm tracking-wider text-13 leading-26 text-start">
            <form name="contact" method="post">
              <div className="relative w-full group text-md mb-4 font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Child’s first name"
                  name="childsfirstname"
                  required
                  className="block w-[430px] p-4 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative w-full group text-md mb-4 font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Child’s last name"
                  name="childslastname"
                  required
                  className="block w-[430px] p-4 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative w-full group text-md mb-4 font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Child's date of birth"
                  name="childsdateofbirth"
                  required
                  className="block w-[430px] p-4 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative z-0 w-full mb-4 group text-md font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Relationship with child"
                  name="relationshipwithchild"
                  required
                  className="block w-[430px] p-4 mt-2 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative z-0 w-full mb-8 group text-md font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Child's school"
                  name="childsschool"
                  required
                  className="block w-[430px] p-4 mt-2 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative z-0 w-full mb-4 group text-md font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="School address"
                  name="schooladdress"
                  required
                  className="block w-[430px] p-4 mt-2 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="relative z-0 w-full mb-4 group text-md font-Regular text-[#F4F5F7]">
                <input
                  type="text"
                  id="large-input"
                  placeholder="Child’s class / grade"
                  name="childsclass/grade"
                  required
                  className="block w-[430px] p-4 mt-2 text-[#666] font-Regular tracking-wider rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <button
                type="submit"
                className="font-Bold inline-flex text-[#FFFFFF] rounded-full w-[430px] py-4 bg-[#DB2E78] focus:ring-1 focus:outline-none
                focus:ring-amber-100 justify-center items-center mt-12"
                onClick={() => setShowModal(true)}
              >
                Done
              </button>
            </form>
          </div>
          <Modal isVisible={showModal} onClose={() => closeModal(1)}>
            <div className="flex justify-center items-center pb-5">
              <img src={Tick} alt="Tick.svg" />
            </div>
            <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex justify-center items-center max-w-[350px] ml-5 text-center mb-6 font-Bold text-[#040A1D]">
              Account Setup Complete
            </div>
            <p className="flex text-center m-5 max-w-[350px] mb-14 font-Medium text-[#4C536A] text-lg">
              Start submitting your writeups. You can join pressclubs close to
              you or available in your account.
            </p>
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
