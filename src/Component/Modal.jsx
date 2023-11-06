import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items justify-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[400px] flex flex-col">
        <button
          className="text-[#B44DB8] text-xl place-self-end"
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
