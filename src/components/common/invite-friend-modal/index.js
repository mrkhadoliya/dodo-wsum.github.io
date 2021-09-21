import React from "react";
import Modal from "components/common/modal";
import { IconButton } from "@material-ui/core";
import { XIcon, DocumentDuplicateIcon } from "@heroicons/react/outline";
import download from "images/qrcode.png";
function InviteFriendModal(props) {
  const { handleClickOpen, open, handleClose, onClose } = props;
  return (
    <Modal
      IconBottom="hidden"
      body={
        <div className="rounded-2xl md:w-80 w-full p-5 pt-4 relative bg-white">
          <h1 className="text-gray-100 text-center text-lg font-medium">
            Invite Your Friends!
          </h1>
          <IconButton
            onClick={onClose}
            color="primary"
            className="transition-all absolute right-1 top-2"
            aria-label="delete"
          >
            <XIcon className="h-4.5 text-gray-900" />
          </IconButton>
          <div className="md:px-10 my-6">
            <img src={download} alt="" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <IconButton
              color="primary"
              className="hover:bg-gray-910 mx-auto bg-gray-200 transition-all"
              aria-label="delete"
            >
              <DocumentDuplicateIcon className="h-6 text-gray-900" />
            </IconButton>
            <p className="text-gray-100 text-base pt-1">Copy link</p>
          </div>
        </div>
      }
      onClick={handleClickOpen}
      open={open}
      onClose={handleClose}
    />
  );
}

export default InviteFriendModal;
