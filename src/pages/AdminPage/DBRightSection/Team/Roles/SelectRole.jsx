import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function SelectRole() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:mt-20 mt-5 ml-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">
            Dashboard
          </h6>
          <div className="flex gap-3 items-center cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View dashboard</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Writers</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View writers</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add writer</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Edit writer</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remover writer</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Club</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View clubs</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Manage club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Delete club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add witer to club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remover writer from club</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">
            Submissions
          </h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add category</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remove category</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View submissions</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Grade submissions</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Team</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add member</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Edit member details</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Reset credentials</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add/edit roles</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add/edit permissions</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">CMS</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View CMS</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />

            <p>Add/edit content</p>
          </div>
        </div>
        {/* end  */}
      </div>
      <div className="ml-20">
        <button
          onClick={toggleModal}
          className="shadow bg-[#DF327B] mt-5 text-white font-bold py-3 px-20 rounded-full"
          type="button"
        >
          Submit
        </button>

        {/* Modal section start  */}
        {isOpen && (
          <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            {/* Modal Content */}
            <div className="relative p-4 w-full max-w-md">
              {/* Content */}
              <div className="relative bg-white rounded-lg px-20 shadow dark:bg-gray-700">
                <button
                  onClick={toggleModal}
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
                      New role addedd <br /> successfully
                    </h3>
                  </div>
                  {/* Buttons */}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Modal section end  */}
      </div>
    </div>
  );
}

export default SelectRole;
