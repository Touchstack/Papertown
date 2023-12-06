import { useState } from 'react';
import {FaXmark} from 'react-icons/fa6'
import {FaChevronDown} from "react-icons/fa";
import { motion } from 'framer-motion';
import { textPop, slideIn , slideTop } from '../Animations';
import PropTypes from 'prop-types';




const SideNav = ({ onLoginClick, onCloseClick, onJoinClick }) => {
 
  SideNav.propTypes = {
    onLoginClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    onJoinClick: PropTypes.func,
  }

  const [showWriteSubMenu, setShowWriteSubMenu] = useState(false);
  const [showNewsSubMenu, setShowNewsSubMenu] = useState(false);

  //Context
  
  const handleWriteClick = () => {
    setShowWriteSubMenu(!showWriteSubMenu);
    setShowNewsSubMenu(false)
  };

  const handleNewsClick = () => {
    setShowNewsSubMenu(!showNewsSubMenu);
    setShowWriteSubMenu(false)
  };
  
 
  
  return (
    <motion.div style={{ 
      backgroundColor: '#9650fb', 
      height: '100vh', // viewport height
      width: '100vw', // viewport width
      position: 'fixed', // fixed position
      top: 0, // start from the top
      left: 0, // start from the left
      zIndex: 1000, // high z-index to overlay other content
    }}
     {...slideIn}
    >
       <div className="w-screen h-[57px] bg-[#ffffff33] flex justify-end items-center">
           <div className='w-[30px] h-[30px] rounded-[8px] border border-white flex items-center justify-center mr-5'  onClick={onCloseClick}>
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
                  <motion.div className='bg-[#ffffff33] w-[250px] h-[100px] rounded-[20px] mt-3' {...slideTop}>
                     <ul className='p-5'>
                       <li><a href="/tips">Tips</a></li>
                       <li><a href="/prompt">Prompts</a></li>
                     </ul>
                  </motion.div>
                }
              </li>

              <li><a href="/submit">Submit</a></li>
              <li><a href="/read">Read</a></li>
              <li><a href="/pressclub">Press Club</a></li>
              <li><a href="/publication">Publications</a></li>
              <li>
                <div className='flex items-center gap-1' onClick={handleNewsClick}>
                  News 
                  <FaChevronDown className='text-[20px] pt-2'/>
                </div>
                { showNewsSubMenu && 
                <motion.div className='bg-[#ffffff33] w-[250px] h-[100px] rounded-[20px] mt-3' {...slideTop} >
                  <ul className='p-5'>
                    <li><a href="">News</a></li>
                    <li><a href="">Event</a></li>
                  </ul>
                </motion.div>
               }
              </li>
            </ul>
          </div>

        {/*Buttons*/}
        <div className='flex flex-col gap-[24px] justify-center items-center '>
              <motion.button {...textPop}
                className="w-[280px] h-[50px] border border-white rounded-[30px] text-white"
                onClick={onLoginClick} 
              >
                Login
              </motion.button>

            <motion.button {...textPop}
              className="w-[280px] h-[50px] bg-[#52B4AE] rounded-[30px] text-white"
              onClick={onJoinClick}
            >
              Join Papertown
            </motion.button>
      </div>
   </motion.div>
  );
};





export default SideNav;
