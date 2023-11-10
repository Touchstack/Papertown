import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="lg:fixed top-[80px] left-[900px] w-full h-[500px]  z-50 flex items justify-center"
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
        <div className="bg-[#FFF] p-2 rounded-2xl">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
