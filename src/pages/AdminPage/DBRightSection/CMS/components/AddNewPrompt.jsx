import PropTypes from 'prop-types';
import { IoCloseSharp } from "react-icons/io5";

const AddNewPrompt = ({ isVisible, onClose }) => {
    
    if (!isVisible) return null;
    const handleClose = () => {
        onClose();
      };

  return (
    <div
     className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center px-5"
     
    >
       <div className='w-[500px] h-[750px] bg-[#fff] rounded-[24px] flex flex-col p-5'>
          <div className='flex justify-between items-center'>
              <p className='text-[#040A1D] text-[36px] font-[700]'>New writing prompt</p>
              <IoCloseSharp color='#000' onClick={handleClose} cursor={'pointer'} />
          </div>

          {/* Input fields here */}
       </div>
    </div>
  )
}

AddNewPrompt.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default AddNewPrompt