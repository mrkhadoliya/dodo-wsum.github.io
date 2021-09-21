import { React, useState } from "react";
import {
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  VolumeUpIcon,
  ChevronUpIcon,
  ChatIcon,
  ChevronDownIcon,
  MenuAlt3Icon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Dropdown from "components/common/dropdown";
import GasPrice from "components/common/gas-price";
// import DodoDetailModal from "components/common/dodo-detail-modal";
import ConnectWalletModal from "components/common/connect-wallet-modal";
function NavRight() {
  const dropOptionsChild = [
    {
      value: "dropOptionsChild",
    },
    {
      value: "dropOptionsChild",
    },
    {
      value: "dropOptionsChild",
    },
  ];
  const endpoint = [
    {
      value: "Global",
    },
    {
      value: "APAC",
    },
    {
      value: "N.American",
    },
  ];
  const language = [
    {
      value: "English",
    },
    
  ];
  const network = [
    {
      value: "ETH",
    },
    {
      value: "BSC",
    },
  ];
  const dropOptions = [
    {
      name: "Gas Price",
      detail: "Gas Price",
    },
    {
      name: "Endpoint",
      detail: "Endpoint",
    },
    {
      name: `Language`,
      detail: `Language`,
    },
    {
      name: `Network`,
      detail: `Network`,
    },
  ];
  const bell = [
    {
      id: "1",
      to: "",
      name: "Help",
      icon: QuestionMarkCircleIcon,
    },
    {
      id: "2",
      to: "",
      name: "Announcement",
      icon: VolumeUpIcon,
    },
    // {
    //   id: "3",
    //   to: "",
    //   name: `Forum`,
    //   icon: ChatIcon,
    // },
    // {
    //   id: "4",
    //   to: "",
    //   name: `Docs`,
    //   icon: DocumentTextIcon,
    // },
  ];
  const [active, setActive] = useState();
  const [show, setShow] = useState(false);
  const showToggle = (key) => {
    setActive(key);
    setShow(!show);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <DodoDetailModal
        onClick={handleClickOpen}
        open={open}
        onClose={handleClose}
      /> */}
      <ConnectWalletModal
        onClick={handleClickOpen}
        open={open}
        onClose={handleClose}
      />
      <Button
      onClick={handleClickOpen}
        variant="contained"
        classes={{
          root: "rounded-full tracking-normal xl:px-6 py-2 pb-2.5 xl:text-md text-sm",
        }}
        color="primary"
      >
        Connect to a wallet
      </Button>
      <Dropdown
        mainMenuClass="w-72 py-2 -mr-3 mt-10"
        menuItem={
          <>
            <MenuAlt3Icon className="cursor-pointer text-gray-100 h-5" />
          </>
        }
        options={
          <div className="divide-y divide-gray-640 space-y-2">
            <div>
              {dropOptions.map((item, key) => (
                <>
                  <div
                    className="flex items-center justify-between py-3 px-4 space-x-3 cursor-pointer"
                    onClick={() => showToggle(key)}
                  >
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-base flex items-center text-gray-650 font-medium">
                      {item.detail}
                      {show === true ? (
                        <ChevronUpIcon className="w-3 ml-2 cursor-pointer" />
                      ) : (
                        <>
                          <ChevronDownIcon className="w-3 ml-2 cursor-pointer" />
                        </>
                      )}
                    </p>
                  </div>
                  {show === true ? (
                    <div className="px-4">
                      {active === 0 && key === active ? (
                        <GasPrice dropOptionsChild={dropOptionsChild} />
                      ) : active === 1 && key === active ? (
                        <GasPrice
                          inputClass="hidden"
                          dropOptionsChild={endpoint}
                        />
                      ) : active === 2 && key === active ? (
                        <GasPrice
                          containerClass="grid grid-cols-3 gap-3 py-2"
                          inputClass="hidden"
                          dropOptionsChild={language}
                        />
                      ) : active === 3 && key === active ? (
                        <GasPrice
                          containerClass="grid grid-cols-3 gap-3 py-2"
                          inputClass="hidden"
                          dropOptionsChild={network}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <div className="pt-2">
              {bell.map((item, k) => (
                <Link key={k} to={item.to}>
                  <div className="flex items-center py-3 px-4 space-x-2 hover:bg-gray-920 text-gray-650 transition-all cursor-pointer">
                    <item.icon
                      className="flex-shrink-0 h-4.5 w-4.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
}

export default NavRight;
