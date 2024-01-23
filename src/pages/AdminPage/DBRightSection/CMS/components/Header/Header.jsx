import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../../assets/Images/Ellipse 27.png";


const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between md:p-10 p-6">
      <h1 className="lg::text-[42px] md:text-[22px] sm:text-[15px] font-[700]">Web CMS</h1>

      <div className="flex flex-row items-center md:gap-5 gap-3">
        <HiBell className="lg:text-[30px] md:text-[25px] text-[15px] text-[#BDBDBD]" />

        <div>
          <img
            src={AppLogo}
            alt=""
            className="lg:w-[40px] md:w-[40px] md:h-[40px] h-[40px]"
          />
        </div>

        <div className="flex flex-row items-center gap-2">
          <p>Amaka Ndubisi</p>
          <HiChevronDown className="text-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;