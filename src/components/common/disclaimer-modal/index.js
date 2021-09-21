import React from "react";
import Modal from "components/common/modal";
import { Button, Checkbox } from "@material-ui/core";
function DisclaimerModal(props) {
  const { handleClickOpen, open, handleClose, onClose } = props;
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Modal
      IconBottom="hidden"
      body={
        <div className="rounded-2xl md:w-80 w-full p-5 pt-4 relative bg-white">
          <h1 className="text-gray-100 text-center text-lg font-medium">
            Risk Disclaimer
          </h1>
          <div className="md:px-5 px-4 md:py-4 py-3 my-4 h-56 overflow-y-auto bg-gray-200 rounded-lg">
            <p className="text-gray-100 tracking-tight text-sm font-medium">
              1. You have to pay an exit fee when you redeem vDODO tokens back
              to DODO. This exit fee will be distributed to all remaining vDODO
              holders.
            </p>
            <p className="text-gray-100 tracking-tight text-sm font-medium">
              2. You will be entering the wallet address of your referrer, who
              will receive rewards for inviting you to mint vDODO. Please ensure
              that the address entered is correct, because you will not be able
              to change it.
            </p>
            <p className="text-gray-100 tracking-tight text-sm font-medium">
              3. Your referrer must already hold vDODO.
            </p>
          </div>
          <div className="flex items-start pb-12">
            <Checkbox
              classes={{ root: "-mt-2.5 -ml-2" }}
              checked={checked}
              onChange={handleChange}
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p className="text-gray-100 text-xs">
              I have read, understand, and agree to the{" "}
              <span className="underline">Terms of Service</span>.
            </p>
          </div>
          <Button
            onClick={onClose}
            variant="contained"
            classes={{
              root: "rounded-lg w-full tracking-wide py-4 md:text-base text-md",
            }}
            color="primary"
          >
            Continue
          </Button>
        </div>
      }
      onClick={handleClickOpen}
      open={open}
      onClose={handleClose}
    />
  );
}

export default DisclaimerModal;
