import React from "react";
import Modal from "components/common/modal";
import Logo from "images/logo-lg.png";
function DodoDetailModal(props) {
  const { handleClickOpen, open, onClose } = props;
  return (
    <Modal
      body={
        <div className="rounded-2xl md:w-96 xs:w-78 w-full px-6 py-5 relative bg-gray-200">
          <div className="right-5 absolute md:-top-6 -top-5 md:h-14 h-10 md:w-14 w-10 ring-2 ring-primary rounded-full overflow-hidden">
            <img src={Logo} alt="" className="md:h-14 h-10 md:w-14 w-10" />
          </div>
          <h1 className="text-gray-100 text-xl font-bold tracking-wide">
            Your DODO Details
          </h1>
          <div className="flex flex-col items-center justify-center border-b border-gray-640 pb-4 mb-4 pt-3 text-center">
            <p className="text-gray-100 tracking-tight text-3xl pb-1 font-bold">
              0
            </p>
            <p className="text-gray-100 tracking-tight text-sm font-medium">
              Total DODO
            </p>
          </div>
          <p className="text-gray-100 text-base h-64">No Claimable Rewards</p>
        </div>
      }
      onClick={handleClickOpen}
      open={open}
      onClose={onClose}
    />
  );
}

export default DodoDetailModal;
