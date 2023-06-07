import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };
  return (
    <div
      style={modalStyle}
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          //  onClick={onClose}
          className="fixed inset-0 transition-opacity bg-[#29292980] "
          aria-hidden="true"
        >
          {" "}
        </div>
        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {children}
        <div className="absolute w-full   bottom-[100px] z-[1000]">
          <p className="text-center text-[14px] mx-auto">
            Powered by{" "}
            <span className="font-bold cursor-pointer text-white">Paylode</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
