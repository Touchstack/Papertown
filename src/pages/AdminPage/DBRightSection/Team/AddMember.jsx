import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../assets/Images/Ellipse 27.png";

import { MdArrowBackIosNew } from "react-icons/md";
function AddMember() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between md:p-10 p-6">
        <a href="/team" className="flex items-center gap-3">
          <MdArrowBackIosNew className="text-[22px]" />
          <h1 className="md:text-[42px] text-[22px] font-Bold">New Member</h1>
        </a>

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
    </div>
  );
}

export default AddMember;
