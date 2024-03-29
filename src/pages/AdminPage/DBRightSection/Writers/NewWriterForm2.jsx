import { useState } from 'react';
import Modal from './WriterModal';

const NewWriterForm2 = () => {
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
      <main className="flex items-center justify-center lg:ml-[5%]">
        <form className="w-full sm:w-11/12 md:w-10/12 lg:w-6/12 xl:w-6/12 rounded-lg p-6">
          <div className="">
            <div>
              <label className="block text-sm pb-2 mt-2" htmlFor="Firstname">
                Bio
              </label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-full h-[150px] "
                type="text"
                name="Firstname"
                placeholder="About the writer"
              />
            </div>
          </div>
          <div >
            <label className="block text-sm pb-2 mt-5" htmlFor="email">
              Age
            </label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-full h-[55px] "
              type="text"
              name="ConactNumber"
              placeholder="0"
            />
          </div>
          <br />
          <div >
            <label className="block text-sm pb-2">School</label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md w-full p-2 h-[55px]"
              type="text"
              name="email"
              placeholder="Montessori"
            />
          </div>
          <br />
          <div >
            <label className="block text-sm pb-2">Grade</label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-full h-[55px]"
              type="text"
              name="text"
              placeholder="Grade 1"
            />
          </div>
          <br />
          <button
            type="button" // Change to type="button" to prevent form submission
            className="bg-[#DB2E78] font-Bold text-white rounded-full p-2 w-full  h-[55px]"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </main>
      {/* Conditional rendering of the modal */}
{isModalVisible && <Modal isVisible={isModalVisible} onClose={handleCloseModal} text="New Writer Added" paragraph="Writer will receive a verification email to login"/>}

    </div>
  );
};

export default NewWriterForm2;
