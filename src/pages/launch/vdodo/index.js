import { React, useState } from "react";
import { LandingTemplate } from "layout";
import { Button } from "@material-ui/core";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import {
  ArrowCircleLeftIcon,
  QuestionMarkCircleIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import Icon from "images/icon09.png";
import DisclaimerModal from "components/common/disclaimer-modal";
import ConnectWalletModal from "components/common/connect-wallet-modal";

function Vdodo() {
  const [open, setOpen] = useState(false);
  const [sopen, setSopen] = useState(false);
  const handleClickNext = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSopen(true);
  };
  const handleClickSecond = () => {
    setOpen(false);
    setSopen(true);
  };
  const handleCloseSecond = () => {
    setSopen(false);
  };
  return (
    <LandingTemplate>
      <ConnectWalletModal
        onClick={handleClickNext}
        open={sopen}
        onClose={handleCloseSecond}
      />
      <DisclaimerModal
        onClick={handleClickSecond}
        open={open}
        onClose={handleClose}
      />
      <div className="pt-28 xl:px-14 md:px-9 px-4 overflow-visible bg-white">
        <h1 className="text-gray-100 font-extrabold text-5xl pb-20">
          vDODO Membership
        </h1>
        <h2 className="text-gray-100 text-3xl font-extrabold">
          Your Real-Time APY
        </h2>
        <hr className="bg-primary w-8 h-3 border-none my-10" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-full mt-32 overflow-hidden">
          <div>
            <div className="md:flex md:space-x-3">
              <div className="flex space-x-3 pb-3 p-2 md:pb-0">
                <p className="text-gray-100 shadow-full bg-gray-200 p-3 rounded-lg text-2xl font-bold">
                  3
                </p>
                <p className="text-gray-100 shadow-full bg-gray-200 p-3 rounded-lg text-2xl font-bold">
                  3
                </p>
                <p className="text-gray-100 shadow-full bg-gray-200 p-3 rounded-lg text-2xl font-bold">
                  3
                </p>
                <p className="text-gray-100 shadow-full bg-gray-200 p-3 rounded-lg text-2xl font-bold">
                  3
                </p>
              </div>
              <p className="text-gray-600 text-xl tracking-wide">
                people have already become vDODO members
              </p>
            </div>
            <div className="flex justify-between space-x-4 pt-10 md:pr-10 lg:pb-20 pb-10">
              <Button
                onClick={handleClickNext}
                startIcon={
                  <div className="w-6">
                    <ArrowCircleRightIcon />
                  </div>
                }
                variant="contained"
                classes={{
                  root: "rounded-xl w-full tracking-wide py-4 md:text-xl text-lg",
                }}
                color="primary"
              >
                Mint vDODO
              </Button>
              <Button
                onClick={handleClickSecond}
                startIcon={
                  <div className="w-5">
                    <ArrowCircleLeftIcon />
                  </div>
                }
                variant="outlined"
                classes={{
                  root: "rounded-xl md:w-80 w-48 tracking-normal text-primary py-4 md:text-base text-md",
                }}
              >
                Redeem
              </Button>
            </div>
          </div>
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0 pb-16 p-2">
            <div className="bg-gray-200 shadow-full p-6 py-8 w-full rounded-lg flex flex-col justify-between h-64">
              <img src={Icon} className="w-16" alt="Icon" />
              <div>
                <p className="text-gray-100 pb-3 font-sans text-xl font-semibold flex items-center">
                  - <QuestionMarkCircleIcon className="h-3 ml-1" />
                </p>
                <p className="text-gray-100 font-sans text-xl font-semibold">
                  My vDODO
                </p>
              </div>
            </div>
            <div className="bg-gray-200 shadow-full p-6 py-8 w-full rounded-lg flex flex-col justify-between h-64">
              <img src={Icon} className="w-16" alt="Icon" />
              <div>
                <p className="text-gray-100 pb-3 font-sans text-xl font-semibold flex items-center">
                  - <QuestionMarkCircleIcon className="h-3 ml-1" />
                </p>
                <p className="text-gray-100 font-sans text-xl font-semibold">
                  Membership Rewards · vDODO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full xl:px-14 md:px-9 px-4 md:pt-32 py-10">
        <div className="rounded-full shadow-full flex items-center w-72 mb-6 px-3 py-1 space-x-3 bg-gray-200">
          <div>
            <ArrowCircleRightIcon className="w-10 text-primary cursor-pointer" />
          </div>
          <p className="text-gray-100 text-xs leading-5">
            If your referees stake 100k WSUM,you get per month{" "}
            <span className="text-red-600">0.00vDODO</span>≈
            <span className="text-red-600">0DODO</span>
          </p>
          <div>
            <ArrowCircleRightIcon
              onClick={handleClickSecond}
              className="w-10 text-primary cursor-pointer"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pb-3 md:gap-10">
          <div className="flex justify-between">
            <p className="text-gray-100 h-6 -ml-1.5 flex items-center font-medium text-lg font-sans">
              <DotsVerticalIcon className="w-5 mr-1" />
              Referrals
            </p>
            <div className="text-right">
              <p className="text-primary font-bold">+0</p>
              <p className="text-gray-100 font-medium">vDODO/month</p>
            </div>
          </div>
          <div className="space-y-2 pb-3">
            <p className="text-gray-100 h-6 -ml-1.5 mb-4 flex items-center font-medium text-lg font-sans">
              <DotsVerticalIcon className="w-5 mr-1" />
              vDODO Stats
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-100 text-md font-normal">
                Number of WSUM Staked
              </p>
              <p className="text-gray-100 text-md font-normal">-</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-100 text-md font-normal">vDODO Minted</p>
              <p className="text-gray-100 text-md font-normal">-</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-100 text-md font-normal">
                Current Exit Fee Rate
              </p>
              <p className="text-gray-100 text-md font-normal">-%</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-100 text-md font-normal">
                Total vDODO Exit Fee Burned
              </p>
              <p className="text-gray-100 text-md font-normal">-</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-100 text-md font-normal">
                Exit membership fee income(vDODO)
              </p>
              <div className="text-right text-md">
                <p className="text-primary font-semibold">9,806.11</p>
                <p className="text-primary font-medium">
                  * Already distributed to vDODO holders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
}

export default Vdodo;
