import { useState } from "react";
import { BiError } from "react-icons/bi";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={toggleModal}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <div className="flex justify-center">
              <button className=" bg-[#fef08a] rounded-full p-4">
                <BiError className="text-[#E1B300] text-5xl " />
              </button>
            </div>
            <div className="mb-5">
              <h3 className="mb-5 text-3xl font-normal text-[#040A1D] dark:text-gray-400 font-Bold">
                You’re about to remove 2 members from your team
              </h3>
              <p className="">
                They will no longer be able to log in to Papertown
                <br /> admin panel
              </p>
            </div>
            <div className="mb-5">
              <button
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
  );
}

export default Modal;
