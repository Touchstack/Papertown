import { useState } from "react";
import Roles from "./Roles/Roles";
import Members from "./Members";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function MembersMain() {
  const tabs = ["Members", "Roles"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const navigate = useNavigate();

  const handleNewmember = () => {
    navigate("/admin/team/new-member");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [remove, setRemove] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleRemove = () => {
    setRemove(!remove);
  };

  const confirmRemove = () => {
    toggleModal(); // Hide the first modal
    toggleRemove(); // Show the second modal
  };

  return (
    <div className=" text-gray-500 dark:text-gray-400 dark:border-gray-700 ">
      {activeTab === "Members" && (
        <div>
          {/* button start  */}
          <div className=" flex justify-end lg:mr-8 mr-5 gap-5 mt-5 mb-10">
            <button
              onClick={toggleModal}
              type="button"
              className="bg-[#F2F2F2] text-[#BDBDBD] rounded-full w-[111px] py-2"
              //onClick={handleRemoveClick}
            >
              Remove
            </button>
            {/* Modal section start  */}
            {isOpen && (
              <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                {/* Modal Content */}
                <div className="relative p-4 w-full max-w-md">
                  {/* Content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Close Button */}

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
                          You’re about to remove 2 members from your team
                        </h3>
                        <p className="">
                          They will no longer be able to log in to Papertown
                          <br /> admin panel
                        </p>
                      </div>
                      {/* Buttons */}
                      <div className="mb-5">
                        <button
                          onClick={confirmRemove}
                          type="button"
                          className="text-[#BDBDBD] bg-[#F2F2F2] outline-none font-medium rounded-full text-sm inline-flex items-center px-10 py-2.5 text-center me-2"
                        >
                          Reset
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
                          <FaCheck className="text-[#83C303] text-5xl " />
                        </button>
                      </div>
                      {/* Text Content */}
                      <div className="mb-5">
                        <h3 className="mb-5 text-3xl font-normal text-[#040A1D] dark:text-gray-400 font-Bold">
                          2 members were removed from your team
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Modal section end  */}

            <button
              onClick={handleNewmember}
              className="bg-[#DF327B] inline-block lg:hidden text-[#FFFFFF] font-Bold rounded-full px-2  py-1"
            >
              + Add team
            </button>
            <button
              onClick={handleNewmember}
              className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2"
            >
              + Add team member
            </button>
          </div>
          {/* button end  */}
        </div>
      )}
      {activeTab === "Roles" && (
        <div>
          {/* button start  */}
          <div className=" flex justify-end lg:mr-20 mr-5 gap-5 mt-5 lg:mb-10 mb-5">
            <Link to="/admin/team/add-role">
              <button
                onClick={handleNewmember}
                className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2"
              >
                + Add role
              </button>
            </Link>
            <Link to="/admin/team/add-role">
              <button className="bg-[#DF327B]  lg:hidden inline-block text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
                + Add
              </button>
            </Link>
          </div>
          {/* button end  */}
        </div>
      )}
      <ul className="flex gap-10 px-10 mb-10">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer text-[16px] font-Blod ${
              activeTab === tab
                ? "border-b-[1px] border-[#B44DB8] text-[#B44DB8]"
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Render content based on the active tab */}

      {activeTab === "Members" && (
        <div>
          <Members />
        </div>
      )}
      {activeTab === "Roles" && (
        <div>
          <Roles />
        </div>
      )}
    </div>
  );
}

export default MembersMain;
