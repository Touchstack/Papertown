import { useState } from 'react';
import {FaXmark} from 'react-icons/fa6'
import {FaChevronDown} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SideNav = () => {

  const [showWriteSubMenu, setShowWriteSubMenu] = useState(false);
  const [showNewsSubMenu, setShowNewsSubMenu] = useState(false);

  const handleWriteClick = () => {
    setShowWriteSubMenu(!showWriteSubMenu);
  };

  const handleNewsClick = () => {
    setShowNewsSubMenu(!showNewsSubMenu);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // This will take the user back to the previous page
  };
  
  return (
    <div style={{ backgroundColor: '#9650fb', height: '110vh', width: '100vw'}}>
       <div className="w-screen h-[57px] bg-[#ffffff33] flex justify-end items-center">
           <div className='w-[30px] h-[30px] rounded-[8px] border border-white flex items-center justify-center mr-5' onClick={handleClose}>
              <FaXmark className='text-white'/>
           </div>
       </div>
        
      {/*UL Elements*/}
       
          <div className='p-10'>
            <ul className='list-none p-0 text-white space-y-5 text-[20px]'>
              <li className='' >
                <div className='flex items-center gap-1' onClick={handleWriteClick}>
                 Write 
                <FaChevronDown className='text-[20px] pt-2'/>
                </div>
                { showWriteSubMenu && 
                <ul className='p-3'>
                  <li>Tips</li>
                  <li>Prompts</li>
                </ul>
                }
              </li>

              <li>Submit</li>
              <li>Read</li>
              <li>Press Club</li>
              <li>Publications</li>
              <li>
                <div className='flex items-center gap-1' onClick={handleNewsClick}>
                  News 
                  <FaChevronDown className='text-[20px] pt-2'/>
                </div>
                { showNewsSubMenu && 
                <ul className='p-3'>
                  <li>News</li>
                  <li>Event</li>
                </ul>
               }
              </li>
            </ul>
          </div>

        {/*Buttons*/}
        <div className='flex flex-col gap-[24px] justify-center items-center '>
              <button
                className="w-[280px] h-[50px] border border-white rounded-[30px] text-white"
              >
                Login
              </button>

            <button
              className="w-[280px] h-[50px] bg-[#52B4AE] rounded-[30px] text-white"
            >
              Join Papertown
            </button>
      </div>
   </div>
  );
};

export default SideNav;
