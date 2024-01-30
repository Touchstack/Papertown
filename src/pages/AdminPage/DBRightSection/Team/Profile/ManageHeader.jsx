import { HiBell, HiChevronDown } from "react-icons/hi2";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import AppLogo from "../../../../../assets/Images/Ellipse 27.png";

function ManageHeader() {
  return (
    <div>
      <div className="flex flex-row items-center lg:justify-between md:p-10 p-6">
        <Link to="/admin/team">
          <div className="flex items-center lg:gap-3  cursor-pointer">
            <MdArrowBackIosNew className="text-[22px]" />
            <h1 className="md:text-[42px] text-[22px] font-Bold">
              Manage Profile
            </h1>
          </div>
        </Link>

        <div className="flex flex-row items-center md:gap-3 gap-3 ml-5">
          <HiBell className="md:text-[28px] text-[25px]  text-[#BDBDBD]" />

          <div>
            <img
              src={AppLogo}
              alt=""
              className="md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
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

export default ManageHeader;
