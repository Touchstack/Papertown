import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../assets/Images/Ellipse 27.png";

function TeamHeader() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between md:p-10 p-6">
        <h1 className="md:text-[42px] text-[22px] font-[700]">Team</h1>

        <div className="flex flex-row items-center md:gap-5 gap-3">
          <HiBell className="md:text-[30px] text-[25px]  text-[#BDBDBD]" />

          <div>
            <img
              src={AppLogo}
              alt=""
              className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
            />
          </div>

          <div className="flex flex-row items-center gap-2">
            <p>Amaka Ndubisi</p>
            <HiChevronDown className="text-[15px]" />
          </div>
        </div>
      </div>
      <div className=" flex justify-end lg:mr-8 mr-5 gap-5">
        <button className="bg-[#F2F2F2] text-[#BDBDBD] rounded-full w-[111px] py-2">
          Remove
        </button>
        <button className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2">
          + Add team member
        </button>
        <button className="bg-[#DF327B]  lg:hidden inline-block text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
          + Add
        </button>
      </div>
    </div>
  );
}

export default TeamHeader;
