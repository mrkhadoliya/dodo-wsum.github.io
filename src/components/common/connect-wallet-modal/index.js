import { React, useState } from "react";
import Modal from "components/common/modal";
import { Checkbox, IconButton } from "@material-ui/core";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import { RadioGroup } from "@headlessui/react";
import RadioField from "components/common/radio-field";
import coins from "images/coins.png";
function ConnectWalletModal(props) {
  const { handleClickOpen, open, onClose } = props;
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [ProfileType, setProfileType] = useState(null);
  const network = [
    {
      name: "Ethereum",
      img: coins,
    },
    {
      name: "Binance",
      img: coins,
    },
    {
      name: "Heco",
      img: coins,
    },
    {
      name: "Polygon",
      img: coins,
    },
  ];
  const wallet = [
    {
      name: "WalletConnect",
      img: coins,
    },
    {
      name: "Portis",
      img: coins,
    },
  ];
  return (
    <Modal
      body={
        <div className="rounded-2xl w-full px-7 py-7 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-100 text-xl font-bold tracking-wide">
              Connect Wallet
            </h1>
            <p className="flex items-center pr-2 text-gray-100">
              <div className="bg-gray-400 h-2.5 w-2.5 rounded-full flex items-center justify-center mr-1">
                <div className="rounded-full h-1 w-1 bg-white"></div>
              </div>
              Eth
            </p>
          </div>
          <div className="flex items-start bg-gray-200 my-5 p-3 rounded-lg">
            <Checkbox
              classes={{ root: "-mt-2 -ml-2" }}
              checked={checked}
              onChange={handleChange}
              color="primary"
              size="small"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p className="text-gray-100 text-md font-medium">
              I have read, understand, and agree to the{" "}
              <span className="text-primary">Terms of Service</span>.
            </p>
          </div>
          <p className="text-gray-900 tracking-tight text-sm">Select Network</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 items-center justify-center pb-4 pt-3 text-center">
            {network?.map((v, k) => {
              return (
                <RadioField
                  key={k}
                  setSelected={setProfileType}
                  selected={ProfileType}
                  mainClass=""
                  data={
                    <div className="flex items-center">
                      <RadioGroup.Option
                        className={({ active }) =>
                          classNames(
                            active
                              ? "shadow-lg bg-gray-200"
                              : "bg-gray-200 text-gray-100",
                            "rounded bg-transparent shadow-sm w-full px-4 py-3 cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div className="flex items-center justify-center space-x-2 w-full">
                              <img
                                className="h-5 w-5"
                                src={v.img}
                                alt="coins"
                              />
                              <p className="text-xs md:text-sm font-semibold text-center">
                                {v.name}
                              </p>
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    </div>
                  }
                />
              );
            })}
          </div>
          <p className="text-gray-900 tracking-tight text-sm">Select Wallet</p>
          <div className="grid md:grid-cols-4 grid-cols-3 gap-y-2 items-center justify-center pb-4 text-center">
            {wallet?.map((v, k) => {
              return (
                <RadioField
                  key={k}
                  setSelected={setProfileType}
                  selected={ProfileType}
                  mainClass=""
                  data={
                    <div className="flex items-center">
                      <RadioGroup.Option
                        className={({ active }) =>
                          classNames(
                            active ? "" : " text-gray-100",
                            "rounded bg-transparent shadow-sm w-full px-4 py-2.5 cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div className="flex items-center justify-center flex-col">
                              <IconButton
                                color="primary"
                                className="hover:bg-gray-910 mx-auto bg-gray-200 transition-all"
                                aria-label="delete"
                              >
                                <DocumentDuplicateIcon className="h-6 text-gray-900" />
                              </IconButton>
                              <p className="text-gray-100 text-sm pt-1">
                                {v.name}
                              </p>
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      }
      onClick={handleClickOpen}
      open={open}
      onClose={onClose}
    />
  );
}

export default ConnectWalletModal;
