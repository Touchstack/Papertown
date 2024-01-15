import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Logo.svg";

const SsHeader = () => {
  return (
    <div className="flex flex-col items-start justify-between md:p-10 p-6">
      <div className="flex flex-row items-center justify-between w-full">
        <div>
          <h2 className="md:text-[32px] text-[12px] font-[700] mb-1">Repetitive sounds of the echo</h2>
          <div className="flex flex-row items-center gap-2">
            <p className="text-[14px]">Enoch Charway</p>
            <span className="text-[14px]">23rd January, 2023</span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5">
          <HiBell className="md:text-[30px] text-[25px] text-[#BDBDBD]" />
          <img src={AppLogo} alt="" className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]" />
          <div className="flex flex-row items-center gap-2">
            <p>Amaka Ndubisi</p>
            <HiChevronDown className="text-[15px]" />
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Paragraph 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Paragraph 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Paragraph 4: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="w-full border-t border-dotted mt-5"></div>
    </div>
  );
};

export default SsHeader;
