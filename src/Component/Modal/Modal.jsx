import PropTypes from 'prop-types';
import {FaXmark} from 'react-icons/fa6'

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  
  return (
    <div
      className="lg:fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[400px] flex flex-col bg-white  rounded-2xl z-40">
        <div className="flex justify-end p-5">
          <FaXmark className="text-black text-2xl cursor-pointer" onClick={() => onClose()} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Correct way to define PropTypes
Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};


export default Modal;

