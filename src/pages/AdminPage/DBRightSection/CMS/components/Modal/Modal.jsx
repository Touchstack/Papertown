import PropTypes from 'prop-types';
// import { FaTimes } from 'react-icons/fa';
import CheckMark from '../../../../../../assets/Images/CheckMark.svg';

const Modal = ({ isVisible, onClose, text }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-[30px] w-[350px] h-[200px] z-40 ">
      {/* <div className="flex justify-end py-5 px-5">
          <FaTimes
            className="text-black cursor-pointer"
            onClick={() => onClose()}
          />
        </div> */}

        {/* Modal Content */}
    
          <img src={CheckMark} alt="" />

          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[#2A2A2A] lg:text-[36px] md:text-[26px] text-center sm:text-[20px] font-[700]'>
              {text}
            </h1>
          </div>

          {/* Button (if needed) */}
          {/* <button
            className='m-[3rem] w-[100px] h-[72px] bg-[#063231] rounded-[50px] text-[#fff]'
            onClick={() => onClose()}
          > 
            Done 
          </button> */}
        </div>
      </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Modal;
