import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import CheckMark from '../../../../assets/Images/CheckMark.svg'
 
const Modal = ({ isVisible, onClose, text, paragraph }) => {
  if (!isVisible) return null;
 
  const handleClose = () => {
    onClose();
  };
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center">
      <div className="relative bg-white rounded-[30px] w-[350px] h-[250px] z-40">
        <div className="absolute top-4 right-4">
          <FaTimes className="text-black cursor-pointer" onClick={handleClose} />
        </div>
 
        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center space-y-4 p-5">
          <img src={CheckMark} alt="" className="h-16 w-16" />
 
          <h1 className="text-[#2A2A2A] lg:text-[36px] md:text-[26px] text-center sm:text-[20px] font-[700]">
            {text}
          </h1>
          <p>
         {paragraph}
          </p>
        </div>
               
      </div>
    </div>
  );
};
 
Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
  paragraph: PropTypes.string
};
 
export default Modal;