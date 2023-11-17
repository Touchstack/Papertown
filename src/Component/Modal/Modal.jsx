import PropTypes from 'prop-types';

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
      <div className="w-[400px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-[#fff] p-2 rounded-2xl z-40">{children}</div>
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
