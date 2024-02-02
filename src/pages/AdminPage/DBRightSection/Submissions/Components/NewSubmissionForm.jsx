import Modal from "./Modal";
import { useState } from "react";

const NewSubmissionForm = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleClick = () => {
    // Show the modal on button click
    setModalVisibility(true);
  }

  const handleCloseModal = () => {
    // Hide the modal when closed
    setModalVisibility(false);
  }

  return (
    <div className="bg-[#FFFFFF] rounded-[25px] mt-10 h-screen">
      <main className=" flex items-center justify-center lg:ml-[15%] ">
        <form className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div>
              <label className="block text-sm pb-2 mt-2" htmlFor="Firstname">
                Create a new category here
              </label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-full h-[50px]"
                type="text"
                name="Firstname"
                placeholder="Category Name"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm pb-2 mt-5" htmlFor="email">
              Description
            </label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-full h-[150px] "
              type="text"
              name="Description"
              placeholder=""
            />
          </div>
          <br />
          <div className="">
            <label className="block text-sm pb-2">Submission Guidelines</label>
            <input
              className="border-gray-500 bg-[#F4F5F7] w-full rounded-md p-2  h-[155px]"
              type="text"
              name="Guidlines"
              placeholder=""
            />
          </div>
          <br />
          <br />
          <button
             type="button"
            className="bg-[#DB2E78] font-Bold text-white rounded-full p-2 w-full h-[55px]"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </main>
      {/* Conditional rendering of the modal */}
      {isModalVisible && <Modal isVisible={isModalVisible} onClose={handleCloseModal} text="New Category Added" />}
    </div>
  );
}

export default NewSubmissionForm;
