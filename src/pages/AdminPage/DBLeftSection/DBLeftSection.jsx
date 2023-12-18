import { NavLink } from "react-router-dom";
import AppLogo from "../../../assets/Images/Logo.svg";
import { isActiveStyles, isNotActiveStyles } from "../../../utils/styles";
import { HiUserGroup, HiMiniRectangleGroup } from "react-icons/hi2";
import { BsSuitClubFill } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { MdBubbleChart } from "react-icons/md";
import { MdCenterFocusStrong } from "react-icons/md";

const DBLeftSection = () => {
  return (
    <div className="h-full py-12 hidden md:hidden lg:inline-block md:flex flex-col items-center min-w-210 w-[250px] gap-3">
      <NavLink to={"/"} className="flex items-center justify-start px-6 gap-4 ">
        <img
          src={AppLogo}
          alt="Logo"
          className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px]"
        />
      </NavLink>

      <ul className="flex flex-col gap-4 ml-5 mt-10">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            isActive ? `${isActiveStyles}` : isNotActiveStyles
          }
        >
          <MdBubbleChart />
          Dashboard
        </NavLink>

        <NavLink
          to={"/admin/writers"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <TbWriting />
          Writers
        </NavLink>

        <NavLink
          to={"/admin/clubs"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <BsSuitClubFill />
          Clubs
        </NavLink>

        <NavLink
          to={"/admin/submissions"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <MdCenterFocusStrong />
          Submissions
        </NavLink>

        <NavLink
          to={"/admin/team"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <HiUserGroup />
          Team
        </NavLink>

        <NavLink
          to={"/admin/cms"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <HiMiniRectangleGroup />
          CMS
        </NavLink>
      </ul>

      <div className="">{/*Log out section*/}</div>
    </div>
  );
};

export default DBLeftSection;
