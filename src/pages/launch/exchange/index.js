import { React, useState } from "react";
import { LandingTemplate } from "layout";
import { Button } from "@material-ui/core";
import banner1 from "images/newWsum6.jpg";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { ChevronDownIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import {
  CurrencyRupeeIcon,
  ShareIcon,
  CogIcon,
  SunIcon,
} from "@heroicons/react/solid";
import Chart from "components/common/chart";
import { RadioGroup } from "@headlessui/react";
import RadioField from "components/common/radio-field";
import Searchs from "../../../components/common/serch";

import coins from "images/coins.png";
import dollr from "images/$.png";
import { RefreshIcon } from "@heroicons/react/solid";
import InviteFriendModal from "components/common/invite-friend-modal";
import ConnectWalletModal from "components/common/connect-wallet-modal";
import SettingSearch from "components/common/settingSerch";
function Exchange() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [ProfileType, setProfileType] = useState(null);
  const data = [
    {
      value: "24H",
    },
    {
      value: "1W",
    },
    {
      value: "1M",
    },
  ];
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen(false);
  };
  return (
      
    <LandingTemplate>
      <InviteFriendModal onClick={handleClickOpen2} open={open2} onClose={handleClose2}/>
      <ConnectWalletModal
        onClick={handleClickOpen}
        open={open}
        onClose={handleClose}
      />
      
      <div className="bg-gray-200">
      <div className="grid xl:w-11/12 mx-auto xl:px-8 md:px-7 px-4 py-10 lg:grid-cols-8 grid-cols-1 items-start gap-10 lg:gap-x-24">
        <div className="lg:col-span-5 w-full py-6 text-white"> 
            <iframe src="https://ramlogics.com/create-token/chart.php" title="Ramlogics" height='650' width="100%"/> 
        </div>

        <div className="lg:col-span-3 text-white h-full"> 
            <iframe src="http://199.250.203.175:3000/swap" title="Ramlogics" height='700px' width="100%"/>  
        </div>
      </div>
      </div>
    </LandingTemplate>
  );
}

export default Exchange;
