import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Logo.svg"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-10">
        <h1 className="text-[42px] font-[700]">Dashboard</h1>

        <div className="flex flex-row items-center gap-5">
            <HiBell className="text-[30px] text-[#BDBDBD]"/>

            <div>
            <img src={AppLogo} alt="" className="w-[50px] h-[50px]" />
            </div>

            <div className="flex flex-row items-center gap-2">
            <p>Amaka Ndubisi</p>
            <HiChevronDown className="text-[15px]"/>
            </div>
        </div>
     </div>
  )
}

export default Header
