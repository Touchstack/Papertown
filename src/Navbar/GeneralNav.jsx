import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import AppLogo from "../assets/Images/Logo.svg";
import {FaChevronDown, FaBars} from "react-icons/fa";
import { NavBarDropdown } from "./NavBarDropdown";
import { NewsDropdown } from "./NewsDropdown";
import LogInModal from '../Component/Modal/LogInModal';
import JoinUSModal from '../Component/Modal/JoinUSModal';
import SideNav from '../Component/SideNav';
import "../Style/Style.css"


const GeneralNav = ({ color, btnColor, bgColor, bgShadow }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [sideNav, setSideNav] = useState(false);
 

  
  // Define prop types
  GeneralNav.propTypes = {
    color: PropTypes.string.isRequired,
    btnColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    bgShadow: PropTypes.string.isRequired,
  };


  // Define a mapping of color classes
  const txtcolorClasses = {
    white: "text-white",
    black: "text-black"
  };

  const btncolorClasses = {
    black: "border-black",
    white: "border-white"
  }

  const bgcolorClasses = {
    white: "bg-white",
    transparent: "bg-white-transparent",
    black: "bg-black",
  }

  const bgShadowClasses = {
    shadow: "custom-shadow"
  }

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
    setDropdown(false); // Close the other dropdown
  };
  
  const handleDropdown = () => {
    setDropdown(!Dropdown);
    setShowDropdown(false); // Close the other dropdown
  };

  const toggleLoginModal = () => {
    setShowLogInModal(!showLogInModal);
    setSideNav(false); // Close SideNav when opening LoginModal
  };

  const toggleJoinModal = () => {
    setShowJoinUsModal(!showJoinUsModal);
    setSideNav(false); // Close SideNav when opening LoginModal
  };

  const toggleCloseNav = () => {
    setSideNav(false);
  }
  
  // Determine the appropriate class to apply
  const txColorClass = txtcolorClasses[color] || "text-gray-500"; // Default color
  const btColorClass = btncolorClasses[btnColor] || "border-white"; // Default button color
  const bgColorClass =  bgcolorClasses[bgColor] || "bg-white-transparent";
  const bgShadowClass = bgShadowClasses[bgShadow] || " "

  return (
    <>
    <nav className={`flex container mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-3 ${bgColorClass} ${bgShadowClass}`}>
    <div className="container md:pl-25 flex justify-between items-center m-auto">
      <a
        href="/"
        className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
      >
        <img
          src={AppLogo}
          alt="Logo"
          className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px]"
        />
      </a>
      <div
        className={`lg:flex justify-between w-full md:w-auto`}
        id="navbar-cta"
      >
        <ul className="md:flex flex-col text-lg p-4 md:p-0 mt-4 border text-center rounded-lg md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 hidden">
        <li className="relative">
          <div className={`list-none flex gap-1 items-center ${txColorClass} cursor-pointer`} onClick={handleDropdown}>
            Write <FaChevronDown className='text-[20px] pt-2'/>
          </div>
          {Dropdown && 
            <div className="absolute top-full left-0">
              <NavBarDropdown />
            </div>
          }
        </li>
          <li
            className={`list-none inline-block  ${
              location.pathname === "/tips"
                ? "font-Regular"
                : `${txColorClass}`
            }`} >
            <a href="/submit" className="">
              Submit
            </a>
          </li>
          <li
            className={`list-none inline-block  ${
              location.pathname === "/tips"
                ? "font-Regular"
                : `${txColorClass}`
            }`}
          >
            <a href="/read" className="">
              Read
            </a>
          </li>
          <li
            className={`list-none inline-block  ${
              location.pathname === "/tips"
                ? "font-Regular"
                : `${txColorClass}`
            }`}
          >
            <a href="/pressclub" className="">
              Press Club
            </a>
          </li>
          <li
            className={`list-none inline-block  ${
              location.pathname === "/tips"
                ? "font-SemiBold"
                : `${txColorClass}`
            }`}
          >
            <a href="/" className="">
              Publications
            </a>
          </li>
          <li className="relative">
          <div className={`list-none flex gap-1 items-center ${txColorClass} cursor-pointer`} onClick={handleShowDropdown}>
            News <FaChevronDown className='text-[20px] pt-2'/>
          </div>
          {showDropdown && 
            <div className="absolute top-full left-0">
              <NewsDropdown />
            </div>
          }
        </li>
        </ul>
      </div>
      <div
        className={`w-full lg:flex md:w-auto`}
        id="navbar-buttons"
      >
        <ul className="md:flex items-center py-2 font-Regular text-lg hidden">
          <button
            className={`border-[1px] ${btColorClass} ${txColorClass} px-7 p-3 mr-4 rounded-full`}
            onClick={() => setShowLogInModal(true)} 
          >
            login
          </button>
          <button
            className="bg-[#52B4AE] text-[#FFF] px-9 p-3 rounded-full"
            onClick={() => setShowJoinUsModal(true)}
          >
            Join Papertown
          </button>
        </ul>
      </div>
      
       {/*Humberg button*/}
       <FaBars className={`md:hidden w-[70px] h-[30px] ${txColorClass}`} onClick={() => setSideNav(!sideNav)}/>
       
    </div>
  </nav>
   {sideNav && <SideNav onLoginClick={toggleLoginModal} onJoinClick={toggleJoinModal} onCloseClick={toggleCloseNav} />}
   {showLogInModal && <LogInModal isVisible={showLogInModal} onClose={() => setShowLogInModal(false)} />}
   {showJoinUsModal && <JoinUSModal isVisible={showJoinUsModal} onClose={() => setShowJoinUsModal(false)} />}
   </>
  );
};

export default GeneralNav;
