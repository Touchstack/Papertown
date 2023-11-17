import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import AppLogo from "../assets/Images/Logo.svg";
import {FaChevronDown} from "react-icons/fa";
import { NavBarDropdown } from "./NavBarDropdown";
import { NewsDropdown } from "./NewsDropdown";
import LogInModal from '../Component/Modal/LogInModal';
import JoinUSModal from '../Component/Modal/JoinUSModal';
import { useNavigate } from 'react-router-dom'

const GeneralNav = ({ color, btnColor, bgColor, bgShadow }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/nav')
  }
  
  // Define prop types
  GeneralNav.propTypes = {
    color: PropTypes.string.isRequired,
    btnColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    bgShadow: PropTypes.string,
  };


  // Define a mapping of color classes
  const txtcolorClasses = {
    white: "text-white",
    red: "text-red-500",
    green: "text-green-500",
    // Add more colors as needed
  };

  const btncolorClasses = {
    black: "border-black",
    white: "border-white"
  }

  const bgcolorClasses = {
      transparent: "bg-white-transparent",
      white: 'bg-white',
  }

  const shadowClasses = {
    shadow: "shadow-custom backdrop-blur-custom"
  }

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
    setDropdown(false); // Close the other dropdown
  };
  
  const handleDropdown = () => {
    setDropdown(!Dropdown);
    setShowDropdown(false); // Close the other dropdown
  };
  
  // Determine the appropriate class to apply
  const txColorClass = txtcolorClasses[color] || "text-gray-500"; // Default color
  const btColorClass = btncolorClasses[btnColor] || "border-white"; // Default button color
  const bgColorClass = bgcolorClasses[bgColor] || "bg-white"; // Default BG color
  const shadowClass = shadowClasses[bgShadow] || ""; // Default Shadow

  return (
    <>
    <nav className={`flex container mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-3 ${bgColorClass} ${shadowClass}`}>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="30" viewBox="0 0 25 25" fill="none" onClick={handleClick} className='md:hidden'>
        <path d="M3.83301 12.6248H21.833M3.83301 6.62476H21.833M9.83301 18.6248H21.833" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </div>
  </nav>
 
   {showLogInModal && <LogInModal isVisible={showLogInModal} onClose={() => setShowLogInModal(false)} />}
   {showJoinUsModal && <JoinUSModal isVisible={showJoinUsModal} onClose={() => setShowJoinUsModal(false)} />}
   </>
  );
};

export default GeneralNav;
