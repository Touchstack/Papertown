import { FaAngleDown, FaCheck } from "react-icons/fa6";
import AppLogo from "../../../../../assets/Images/Profile.png";
import { IoMdCall, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { BiError } from "react-icons/bi";

function ManageBody() {
  const [isOpen, setIsOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleSave = () => {
    setIsSave(!isSave);
  };

  const toggleRemove = () => {
    setRemove(!remove);
  };

  const confirmRemove = () => {
    toggleModal();
    toggleRemove();
    // toggleSave();
  };
  return (
    <div>
      <div className="flex mt-20 lg:ml-[31%]  md:ml-8 ml-10 lg:mr-32 md:mr-36 ">
        <div className="flex items-center gap-5  ">
          <img
            src={AppLogo}
            alt=""
            className="md:w-[90px] w-[90px] md:h-[90px] h-[90px]"
          />
          <div className="cursor-pointer">
            <h6 className="text-[#000000] font-Bold text-3xl">Jimmy Jules</h6>

            <p className="flex mt-3  gap-3 text-[#A3A3A3] items-center">
              <IoMdCall /> Contact{" "}
              <span className="text-[#000000] font-Bold">0200 234 567</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:ml-[32%] ml-10 mt-10  justify-center items-center h-full">
        <form action="" className="overflow-x-hidden">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email address
              </label>
              <input
                className="appearance-none  block lg:w-[400px] w-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="name@domain.com"
              />
            </div>
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              User role
            </label>
            <div className="relative">
              <select className="appearance-none block lg:w-[400px] md:w-[300px] w-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Select role</option>
                <option>Admin</option>
                <option>Contributor</option>
                <option>Editor</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0  lg:top-4 lg:right-[47%] md:right-[40%] right-[10%] top-4 items-center px-2 text-gray-700">
                <FaAngleDown />
              </div>
            </div>
          </div>
          <div className="ml-5 lg:ml-0 md:ml-0">
            <button
              onClick={toggleModal}
              type="button"
              className=" bg-[#F2F2F2] mt-5 text-[#BDBDBD] font-bold lg:py-3 lg:px-10 px-5 py-2 rounded-full"
            >
              Reset credentials
            </button>
            {/* Modal section start  */}
            {isOpen && (
              <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                {/* Modal Content */}
                <div className="relative p-4 w-full max-w-md">
                  {/* Content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Close Button */}
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <span className="sr-only">Close modal</span>
                    </button>
                    {/* Modal Body */}
                    <div className="p-4 md:p-5 text-center">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <button className="bg-[#fef9c3] rounded-full p-4">
                          <BiError className="text-[#E1B300] text-5xl " />
                        </button>
                      </div>
                      {/* Text Content */}
                      <div className="mb-5">
                        <h3 className="mb-5 text-3xl font-normal text-[#040A1D] dark:text-gray-400 font-Bold">
                          You’re about to reset member’s credentials
                        </h3>
                        <p className="">
                          Jimmy will receive an email to reset his password
                        </p>
                      </div>
                      {/* Buttons */}
                      <div className="mb-5">
                        <button
                          onClick={confirmRemove}
                          type="button"
                          className="text-[#BDBDBD] bg-[#F2F2F2] outline-none font-medium rounded-full text-sm inline-flex items-center px-10 py-2.5 text-center me-2"
                        >
                          Remove
                        </button>
                        <button
                          onClick={toggleModal}
                          type="button"
                          className="text-white bg-[#DB2E78] outline-none rounded-full text-sm font-medium px-10 py-2.5  focus:z-10 "
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Modal section end  */}

            {/* Modal section start  */}
            {remove && (
              <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                {/* Modal Content */}
                <div className="relative p-4 w-full max-w-md">
                  {/* Content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Close Button */}
                    <button
                      onClick={toggleRemove}
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent bg-[#DF327B] rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center "
                    >
                      <IoMdClose />
                      <span className="sr-only">Close modal</span>
                    </button>
                    {/* Modal Body */}
                    <div className="p-4 md:p-5 text-center">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <button className="bg-[#d9f99d] rounded-full p-4">
                          <FaCheck className="text-[#83C303] text-2xl " />
                        </button>
                      </div>
                      {/* Text Content */}
                      <div className="mb-5">
                        <h3 className="mb-5 text-3xl font-normal text-[#040A1D] dark:text-gray-400 font-Bold">
                          Jimmy will receive an email to reset their password
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Modal section end  */}
            <button
              onClick={toggleSave}
              className="shadow bg-[#DF327B] mt-5 ml-4 text-white font-bold lg:py-3 lg:px-10 px-5 py-2 rounded-full"
              type="button"
            >
              Save Changes
            </button>

            {/* Modal section start  */}
            {isSave && (
              <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                {/* Modal Content */}
                <div className="relative p-4 w-full max-w-md">
                  {/* Content */}
                  <div className="relative bg-white px-10 rounded-lg shadow dark:bg-gray-700">
                    {/* Close Button */}
                    <button
                      onClick={toggleSave}
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent bg-[#DF327B] rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center "
                    >
                      <IoMdClose />
                      <span className="sr-only">Close modal</span>
                    </button>
                    {/* Modal Body */}
                    <div className="p-4 md:p-5 text-center">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <button className="bg-[#d9f99d] rounded-full p-4">
                          <FaCheck className="text-[#83C303] text-2xl " />
                        </button>
                      </div>
                      {/* Text Content */}
                      <div className="mb-5">
                        <h3 className="mb-5 text-3xl font-normal text-[#040A1D] dark:text-gray-400 font-Bold">
                          Profile changes saved!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Modal section end  */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageBody;
