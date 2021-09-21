import { React, useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { CurrencyRupeeIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { LandingTemplate } from "layout";
import ConnectWalletModal from "components/common/connect-wallet-modal";
function PoolCreate() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [sactive, setsactive] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClick = (e) => {
    setActive(e);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <LandingTemplate>
      <ConnectWalletModal
        onClick={handleClickOpen}
        open={open}
        onClose={handleClose}
      />
      <div class="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-4 xl:px-18 p-4 md:px-7 lg:px-9 lg:py-16">
        <div class="md:p-8 p-5 rounded-2xl bg-gray-200 lg:order-2 lg:col-span-2 xl:col-span-1">
          <p className="mb-3 text-lg text-primary">Create a Pool</p>
          <p className="mb-1 text-xs text-gray-700">01 Choose Pool Type</p>
          <div className="flex justify-between mb-3 bg-primary p-2 rounded-2xl">
            <div
              onClick={() => handleClick(0)}
              className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                active === 0 ? "bg-secondary" : ""
              }`}
            >
              Public Pool
            </div>
            <div
              onClick={() => handleClick(1)}
              className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                active === 1 ? "bg-secondary" : ""
              }`}
            >
              Privite Pool
            </div>
            <div
              onClick={() => handleClick(2)}
              className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                active === 2 ? "bg-secondary" : ""
              }`}
            >
              Pregged Pool
            </div>
          </div>
          {active !== 2 ? (
            <>
              {" "}
              <p className="text-xs text-gray-700 pb-1">02 Choose Pool Type</p>
              <div className="flex justify-between bg-primary p-2 rounded-2xl">
                <div
                  onClick={() => setsactive(0)}
                  className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                    sactive === 0 ? "bg-secondary" : ""
                  }`}
                >
                  Standard
                </div>
                <div
                  onClick={() => setsactive(1)}
                  className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                    sactive === 1 ? "bg-secondary" : ""
                  }`}
                >
                  Single Tokken
                </div>
                <div
                  onClick={() => setsactive(2)}
                  className={`p-3 text-white rounded-lg md:text-sm text-xs whitespace-nowrap hover:bg-secondary cursor-pointer ${
                    sactive === 2 ? "bg-secondary" : ""
                  }`}
                >
                  Customize
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="flex justify-between mb-2 mt-5">
            <p className="text-xs text-gray-700">03 Supply initail token</p>
            <p className="mt-4 text-xs">
              Available 0{" "}
              <span className="bg-primary text-white p-1 text-xs"> MAX</span>
            </p>
          </div>
          <div className="bg-white rounded-xl mt-2 mb-3">
            <TextField
              type="text"
              inputProps={{
                className:
                  "text-right text-gray-100 tracking-wide font-light text-sm py-4 px-2 bg-white",
              }}
              classes={{
                root: "py-0 w-full text-gray-100 rounded-2xl overflow-hidden",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <p className="cursor-pointer text-gray-100 flex items-center pl-2 w-24 justify-between">
                      <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                      <p className="text-xs font-medium ">ETH</p>
                      <ChevronDownIcon className="ml-2 h-3.5 " />
                    </p>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex w-full mb-2 mt-5 ">
            <p className="text-right w-full">+</p>
            <p className="text-xs text-right w-full ">
              Available 0{" "}
              <span className="bg-primary text-white p-1 text-xs"> MAX</span>
            </p>
          </div>
          <div className="bg-white rounded-xl mt-2 mb-3">
            <TextField
              type="text"
              inputProps={{
                className:
                  "text-right text-gray-100 tracking-wide font-light text-sm py-4 px-2 bg-white",
              }}
              classes={{
                root: "py-0 w-full text-gray-100 rounded-2xl overflow-hidden",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className="bg-white">
                    <p className="cursor-pointer text-gray-100 flex items-center pl-2 w-24 justify-between ">
                      <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                      <p className="text-xs font-medium ">ETH</p>
                      <ChevronDownIcon className="ml-2 h-3.5 " />
                    </p>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <p className="text-xs text-gray-700">04 Parameter</p>
          {active === 2 ? (
            <>
              <div className="grid grid-cols-2 md:flex items-center md:space-x-2">
                <p className="md:w-5/6 text-xs">*Pegged Exchange Rate ?</p>
                <div className="bg-white rounded-xl mt-2 mb-3 w-full">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-right text-gray-100 tracking-wide font-light text-sm py-4 px-2 ",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-2xl overflow-hidden",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:flex items-center md:space-x-2">
                <p className="md:w-2/3 text-xs">Slippage Coefficient ?</p>
                <div className="bg-white rounded-xl mt-2 mb-3 w-full">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-right text-gray-100 tracking-wide font-light text-sm py-4 px-2 ",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-2xl overflow-hidden",
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="grid grid-cols-2 md:flex items-center md:space-x-2">
            <p className="md:w-1/2 text-xs">*Free Rate (%) ?</p>
            <div className="bg-white rounded-xl mt-2 mb-3 w-full">
              <TextField
                type="text"
                inputProps={{
                  className:
                    " bg-white text-right text-gray-100 tracking-wide font-light text-sm py-4 px-2 ",
                }}
                classes={{
                  root: "py-0 w-full text-gray-100 rounded-2xl overflow-hidden",
                }}
              />
            </div>
          </div>

          <Button
            onClick={handleClickOpen}
            variant="contained"
            classes={{
              root: "mt-5 rounded-xl tracking-normal tracking-wider py-4 md:text-base text-xs w-full",
            }}
            color="secondary"
          >
            Connect Wallet
          </Button>
        </div>
        <div class="lg:col-span-2 bg-gray-200 rounded-2xl md:p-10 p-5 lg:order-1 ">
          <p className="text-primary text-2xl"> Depth Chart View </p>
          <div className="flex flex-col justify-center md:items-center xl:h-65vh h-full py-10">
            <div>
              <div>
                <p className="text-primary md:text-xl text-lg pb-2">
                  {active === 0
                    ? "Public Pool"
                    : active === 1
                    ? "Private Pool"
                    : active === 2
                    ? "Pegged Pool"
                    : ""}
                </p>
                <ul>
                  <li className="text-md pb-1 text-gray-700 flex items-center">
                    <div className="h-1 w-1 rounded-full bg-primary mr-2"></div>
                    {active === 0
                      ? " Anyone Can Add Liquidity"
                      : active === 1
                      ? " Only you (the pool creator) can add  liquidity"
                      : active === 2
                      ? "Anyone can add liquidity to this pool. Pool parameters cannot be modified after pool creation."
                      : ""}
                  </li>
                  <li className="text-md pb-4 text-gray-700 flex items-center">
                    <div className="h-1 w-1 rounded-full bg-primary mr-2"></div>
                    {active === 0
                      ? "  Parameters cannot be modified after creation  "
                      : active === 1
                      ? " Parameters can be modified after creation"
                      : active === 2
                      ? "The pricing curve is similar to Curve Finance's. It's suitable for synthetic assets."
                      : ""}
                  </li>
                </ul>
              </div>
              {active !== 2 ? (
                <div>
                  <p className="text-primary md:text-xl text-lg pb-2">
                  {sactive === 0
                    ? "Standerd"
                    : sactive === 1
                    ? "Single Tokken"
                    : sactive === 2
                    ? "Customize"
                    : ""}
                  </p>
                  <ul>
                    <li className="text-md pb-1 text-gray-700 flex items-center">
                      <div className="h-1 w-1 rounded-full bg-primary mr-2"></div>
                      {sactive === 0
                        ? "50/50 value liquidity provision (same as Uniswap)"
                        : sactive === 1
                        ? "You are looking to sell tokens and make ask-side liquidity available"
                        : sactive === 2
                        ? "You can configure the transaction fee rate, slippage coefficient, and minimum price"
                        : ""}
                    </li>
                    {sactive !== 2 ? (
                      <li className="text-md pb-1 text-gray-700 flex items-center">
                        <div className="h-1 w-1 rounded-full bg-primary mr-2"></div>
                        {sactive === 0
                          ? "More parameters can be set"
                          : sactive === 1
                          ? "Supports initial single-token supply"
                          : sactive === 2
                          ? ""
                          : ""}
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
}
export default PoolCreate;
