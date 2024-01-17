import { useState } from "react";

import Profile from "../../../../assets/Images/child5.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";

// import NewMember from "./NewMember";

function MemberPage() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleNewmember = () => {
    navigate("/admin/team/new-member");
  };

  return (
    <div>
      {/* button start  */}
      <div className=" flex justify-end lg:mr-8 mr-5 gap-5 mt-0">
        <button
          type="button"
          className="bg-[#F2F2F2] text-[#BDBDBD] rounded-full w-[111px] py-2"
          //onClick={handleRemoveClick}
        >
          Remove
        </button>
        <button
          onClick={handleNewmember}
          className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2"
        >
          + Add team member
        </button>
      </div>
      {/* button end  */}
      <div className="flex justify-between lg:ml-10 mt-10">
        <ul className="flex ml-3 md:ml-7 lg:ml-10">
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Name</li>
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Email</li>
          <li className="lg:mr-[130%] mr-16 md:mr-[140%]">Contact</li>
          <li className="">Role</li>
        </ul>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
      <div className="mt-10 lg:ml-10 ml-4">
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Admin</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex lg:gap-3  bg-[#F9F9F9]  text-center items-center mb-5 lg:mx-auto">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Contributor</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Editor</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Admin</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Contributor</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Editor</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Admin</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
      </div>
      {/* Modal start */}
      <Modal
        isOpen={isModalOpen} //onClose={closeModal}
      />

      {/* Modal end */}
    </div>
  );
}

export default MemberPage;
