import React from "react";
import Modal from "components/common/modal";
import TabsStack from "components/common/tabs-stack";
function DisclaimerModal(props) {
  const { handleClickOpen, open, handleClose, onClose } = props;

  return (
    <Modal
      IconBottom="hidden"
      body={
        <div className="rounded-2xl w-full p-5 pt-2 relative bg-white">
          <TabsStack onClose={() => onClose()} />
        </div>
      }
      onClick={() => handleClickOpen()}
      open={open}
      onClose={() => onClose()}
    />
  );
}

export default DisclaimerModal;
