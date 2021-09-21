import React from "react";
import PropTypes from "prop-types";
import { IconButton, Dialog } from "@material-ui/core";
import { XIcon } from "@heroicons/react/outline";
export default function SimpleDialog(props) {
  const { onClose, open, IconBottom, body, handleClose } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="pt-7 md:px-5 ">{body}</div>
      <div className={`${IconBottom} flex items-center justify-center mt-6`}>
        <IconButton
          onClick={onClose}
          color="primary"
          className="hover:bg-white bg-gray-200 transition-all"
          aria-label="delete"
        >
          <XIcon className="h-4.5 text-gray-100" />
        </IconButton>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
