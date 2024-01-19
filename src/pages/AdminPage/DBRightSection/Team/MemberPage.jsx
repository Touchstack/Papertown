import { useState } from "react";

import Profile from "../../../../assets/Images/child5.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";

// import NewMember from "./NewMember";

function MemberPage() {
  const [isModalOpen] = useState(false);
  // setisModalOpen

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
          className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2"
        >
          + Add team member
        </button>
      </div>
      {/* button end  */}
      <div className="lg:flex hidden justify-between lg:ml-10 mt-10">
        <ul className="flex ml-3 md:ml-7 lg:ml-10">
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Name</li>
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Email</li>
          <li className="lg:mr-[130%] mr-16 md:mr-[140%]">Contact</li>
          <li className="">Role</li>
        </ul>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px] hidden lg:inline-block" />
      <div className="mt-10 lg:ml-10 ml-4">
        {/* start  */}
        <div className="lg:flex gap-3 lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex gap-3 items-center justify-between mr-10">
            <label>
              <input type="checkbox" className=" accent-pink-400 w-5 h-5" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <p className="font-Bold lg:inline-flex text-2xl lg:text-sm ">
            Agnes Okparolu
          </p>
          <p className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</p>
          <p className="hidden lg:inline-block lg:ml-[18%] md:ml-16">
            0200 234 567
          </p>
          <div className="lg:hidden flex justify-between mr-10">
            <p className="lg:ml-[18%] md:ml-16">0200 234 567</p>
            <button className="lg:hidden inline-block bg-[#F2F2F2] text-[#BDBDBD] px-2 py-1 rounded-full font-Bold mt-5">
              Admin
            </button>
          </div>
          <p className="hidden lg:inline-block lg:ml-[13%] md:ml-[20%]">
            Admin
          </p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:flex gap-3 lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex gap-3 items-center justify-between mr-10">
            <label>
              <input type="checkbox" className=" accent-pink-400 w-5 h-5" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <p className="font-Bold lg:inline-flex text-2xl lg:text-sm ">
            Agnes Okparolu
          </p>
          <p className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</p>
          <p className="hidden lg:inline-block lg:ml-[18%] md:ml-16">
            0200 234 567
          </p>
          <div className="lg:hidden flex justify-between mr-10">
            <p className="lg:ml-[18%] md:ml-16">0200 234 567</p>
            <button className="lg:hidden inline-block bg-[#F2F2F2] text-[#BDBDBD] px-2 py-1 rounded-full font-Bold mt-5">
              Contributor
            </button>
          </div>
          <p className="hidden lg:inline-block lg:ml-[13%] md:ml-[20%]">
            Contributor
          </p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:flex gap-3 lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex gap-3 items-center justify-between mr-10">
            <label>
              <input type="checkbox" className=" accent-pink-400 w-5 h-5" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <p className="font-Bold lg:inline-flex text-2xl lg:text-sm ">
            Agnes Okparolu
          </p>
          <p className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</p>
          <p className="hidden lg:inline-block lg:ml-[18%] md:ml-16">
            0200 234 567
          </p>
          <div className="lg:hidden flex justify-between mr-10">
            <p className="lg:ml-[18%] md:ml-16">0200 234 567</p>
            <button className="lg:hidden inline-block bg-[#F2F2F2] text-[#BDBDBD] px-2 py-1 rounded-full font-Bold mt-5">
              Contributor
            </button>
          </div>
          <p className="hidden lg:inline-block lg:ml-[13%] md:ml-[20%]">
            Contributor
          </p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:flex gap-3 lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex gap-3 items-center justify-between mr-10">
            <label>
              <input type="checkbox" className=" accent-pink-400 w-5 h-5" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <p className="font-Bold lg:inline-flex text-2xl lg:text-sm ">
            Agnes Okparolu
          </p>
          <p className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</p>
          <p className="hidden lg:inline-block lg:ml-[18%] md:ml-16">
            0200 234 567
          </p>
          <div className="lg:hidden flex justify-between mr-10">
            <p className="lg:ml-[18%] md:ml-16">0200 234 567</p>
            <button className="lg:hidden inline-block bg-[#F2F2F2] text-[#BDBDBD] px-2 py-1 rounded-full font-Bold mt-5">
              Editor
            </button>
          </div>
          <p className="hidden lg:inline-block lg:ml-[13%] md:ml-[20%]">
            Editor
          </p>
        </div>
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