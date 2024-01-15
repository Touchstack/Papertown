import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Logo.svg";

const SingleSubmission = () => {
  return (
    <div className="flex flex-row items-center justify-between md:p-10 p-6">
      <h2 className="md:text-[32px] text-[12px] font-[700]">Repetitive sounds of the echo</h2>

      <div className="flex flex-row items-center md:gap-5 gap-3">
        <HiBell className="md:text-[30px] text-[25px] text-[#BDBDBD]" />

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
  )
}

export default SingleSubmission