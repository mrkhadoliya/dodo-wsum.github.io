import React from "react";
import { LandingTemplate } from "layout";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import {
  ChevronDoubleRightIcon,
  CurrencyRupeeIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function LaunchCrowdpooling() {
  const [show, setShow] = React.useState(true);
  const showToggle = (key) => {
    setShow(!show);
  };
  return (
    <LandingTemplate>
      <div className="flex text-base tracking-normal xl:px-18 p-4 md:px-7 lg:px-9 lg:pt-16">
        <Link to="/create-cp" className="text-primary pr-1">
          Create
        </Link>
        <p className="text-gray-700">/ Launch a Crowdpooling Campaign</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-4 xl:px-18 p-4 md:px-7 lg:px-9 pb-18">
        <div class="md:p-8 p-5 rounded-2xl bg-gray-200 shadow-full lg:order-2 lg:col-span-2 xl:col-span-1">
          <p className="text-xl font-medium font-sans text-primary pb-2">
            Configurations
          </p>
          <p className="mb-1 text-xs text-gray-700">01 Set CP Type</p>
          <div className="flex space-x-3 justify-between mb-3 bg-primary p-2 rounded-2xl">
            <div
              onClick={() => setShow(true)}
              className={`text-center p-2 flex-1 text-white rounded-xl py-2.5 md:text-sm text-xs whitespace-nowrap focus:bg-secondary hover:bg-secondary cursor-pointer ${
                show ? "bg-secondary" : ""
              }`}
            >
              Fixed Price Cp
            </div>
            <div
              onClick={() => setShow(false)}
              className={`text-center p-2 flex-1 text-white rounded-xl py-2.5 md:text-sm text-xs whitespace-nowrap focus:bg-secondary hover:bg-secondary cursor-pointer ${
                !show ? "bg-secondary" : ""
              }`}
            >
              Variable Price
            </div>
          </div>
          <p className="text-xs text-gray-700 pb-1 pt-3">
            02 Total Number of Tokens Supplied
          </p>
          <div className="flex justify-between rounded-2xl">
            <div className="bg-white rounded-xl mt-2 mb-2">
              <TextField
                placeholder="0.0"
                type="text"
                inputProps={{
                  className:
                    "bg-white text-right text-gray-100 tracking-wide font-light text-sm py-3 px-2 rounded-xl",
                }}
                classes={{
                  root: "py-0 w-full text-gray-100 rounded-xl overflow-hidden",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <p className="text-xs pl-3 text-gray-700">
                        Enter a Tokken symbol or addressss
                      </p>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          {show === true ? (
            <></>
          ) : (
            <>
              <div className="grid grid-cols-2 md:flex items-center justify-between md:space-x-2 py-1">
                <p className=" text-xs text-gray-700 whitespace-nowrap">
                  * Initial price ?
                </p>
                <div className="w-full md:w-1/2">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-gray-100 tracking-wide font-light text-sm py-3 px-2 rounded-xl",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-xl overflow-hidden",
                    }}
                  />
                </div>

                <div className=" text-gray-100 flex items-center bg-white rounded-xl p-2 cursor-pointer">
                  <CurrencyRupeeIcon className="text-primary mr-2 h-4" />
                  <p className=" text-md font-sm text-gray-700">ETH</p>
                  <ChevronDownIcon className="ml-2 h-4 " />
                </div>
              </div>
            </>
          )}

          {show === true ? (
            <>
              <div className="grid grid-cols-2 md:flex items-center md:space-x-2 pb-2">
                <p className="md:w-1/2 text-xs text-gray-700">
                  *% of Tokens for Sale(%) ?
                </p>
                <div className="rounded-xl w-full md:w-1/2">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-right text-gray-100 tracking-wide font-light text-sm py-3 px-2 rounded-xl",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-xl overflow-hidden",
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 md:flex items-center md:space-x-2 py-2">
                <p className="text-xs text-gray-700 whitespace-nowrap">
                  *Slippage Coefficient ?
                </p>
                <div className="rounded-xl w-full">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-gray-100 tracking-wide font-light text-sm py-1.5 px-2 rounded-lg",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-lg overflow-hidden",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:flex items-center md:space-x-2 py-2">
                <p className="text-xs text-gray-700 whitespace-nowrap">
                  *Hard Cap ?
                </p>
                <div className="rounded-xl w-full">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-gray-100 tracking-wide font-light text-sm py-3 px-2 rounded-xl",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-xl overflow-hidden",
                    }}
                  />
                </div>
              </div>
            </>
          )}

          {show === true ? (
            <>
              <div className="grid grid-cols-2 bg-primary p-3 rounded-lg text-gray-200 md:flex items-center justify-between md:space-x-2">
                <p className="md:w-1/2 text-xs">Tokens for Participants ?</p>
                <p className="text-xs">-</p>
              </div>
              <div className="grid grid-cols-2 md:flex items-center justify-between md:space-x-2">
                <p className=" text-xs text-gray-700">Price ?</p>
                <div className="mt-2 mb-3 w-full md:w-1/2">
                  <TextField
                    type="text"
                    inputProps={{
                      className:
                        " bg-white text-gray-100 tracking-wide font-light text-sm py-3 px-2 rounded-xl",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-xl overflow-hidden",
                    }}
                  />
                </div>

                <div className=" text-gray-100 flex items-center bg-white rounded-xl p-2 cursor-pointer">
                  <CurrencyRupeeIcon className="text-primary mr-2 h-4" />
                  <p className=" text-md font-sm text-gray-700">ETH</p>
                  <ChevronDownIcon className="ml-2 h-4 " />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {show === true ? (
            <div className="grid grid-cols-2 bg-primary p-3 rounded-lg text-gray-200 md:flex items-center justify-between md:space-x-2">
              <p className="md:w-1/2 text-xs">Hard Cap ?</p>
              <p className="text-xs">- ETH</p>
            </div>
          ) : (
            <div className="bg-primary p-3 rounded-lg text-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <p className="md:w-1/2 text-xs">Token Price Hard Cap</p>
                <p className="text-xs">- ETH</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="md:w-1/2 text-xs">Max # of token for sales</p>
                <p className="text-xs">-</p>
              </div>
            </div>
          )}
          <p className="text-xs text-gray-700 mt-5 pb-2">03 Other Parameters</p>
          <div className="grid grid-cols-2 md:flex items-center justify-between md:space-x-2 mb-4">
            <p className="whitespace-nowrap text-xs text-gray-700">
              * Start Time ?
            </p>
            <div className="w-full">
              <TextField
                type="date"
                inputProps={{
                  className:
                    "bg-white text-gray-100 tracking-wide font-light text-xs py-2 px-2 rounded-lg",
                }}
                classes={{
                  root: "py-0 w-full text-gray-100 rounded-lg overflow-hidden",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex items-center justify-between md:space-x-2 mb-4">
            <p className="whitespace-nowrap text-xs text-gray-700">
              * End Time ?
            </p>
            <div className="w-full">
              <TextField
                type="date"
                inputProps={{
                  className:
                    "bg-white text-gray-100 tracking-wide font-light text-xs py-2 px-2 rounded-lg",
                }}
                classes={{
                  root: "py-0 w-full text-gray-100 rounded-lg overflow-hidden",
                }}
              />
            </div>
          </div>
          {show === true ? (
            <></>
          ) : (
            <>
              <div className="grid grid-cols-2 md:flex items-center justify-between mb-4 ">
                <p className="whitespace-nowrap text-xs text-gray-700">
                  * Cooling-off Period End Time ?
                </p>
                <div className="w-full">
                  <TextField
                    type="date"
                    inputProps={{
                      className:
                        "bg-white text-gray-100 tracking-wide font-light text-xs py-2 px-2 rounded-lg",
                    }}
                    classes={{
                      root: "py-0 w-full text-gray-100 rounded-lg overflow-hidden",
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-2 md:flex items-center justify-between md:space-x-1">
            <p className="text-xs text-gray-700">* Liquidity Protection ?</p>
            <div className="grid grid-cols-3 gap-1.5">
              <p className="text-2xs bg-primary px-1.5 whitespace-nowrap rounded-lg hover:bg-secondary cursor-pointer py-2 text-white ">
                30 Days
              </p>
              <p className="text-2xs bg-primary px-1.5 whitespace-nowrap rounded-lg hover:bg-secondary cursor-pointer py-2 text-white">
                90 Days
              </p>
              <p className="text-2xs bg-primary px-1.5 whitespace-nowrap rounded-lg hover:bg-secondary cursor-pointer py-2 text-white">
                180 Days
              </p>
            </div>
          </div>
          <p className="text-white bg-primary mt-5 text-sm tracking-tight text-center mb-3 rounded-lg p-2 py-2">
            Enter an amount to see more trading details
          </p>
          <Button
            variant="contained"
            classes={{
              root: "mt-5 rounded-xl tracking-normal tracking-wider py-4 md:text-base text-xs w-full",
            }}
            color="secondary"
          >
            Create Wallet
          </Button>
        </div>
        <div className="md:p-7 p-4 py-5 rounded-2xl lg:order-1 shadow-full lg:col-span-2 bg-gray-200">
          <p className="text-xl font-medium font-sans text-primary pb-2">
            {" "}
            Target Depth Chart Preview
          </p>
          <div className="flex flex-col justify-center md:px-10 md:items-center xl:h-65vh h-full py-10">
            <div>
              <p className="text-gra-700 text-sm mb-10">
                Creating a Crowdpooling campaign can help your project create a
                trading venue with an equal opportunity token distribution to
                the community. A Crowdpooling is divided into the following
                stages
              </p>
              <div className="flex xl:flex-row flex-col space-y-5 justify-between">
                <div className="text-xs bg-primary text-gray-200 rounded-2xl p-5 xl:w-1/3 w-full shadow-full">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full">
                    1
                  </span>
                  <p className="pt-3 text-gray-200 text-sm md:txet-md font-semibold pb-2">
                    Pre-Launch
                  </p>
                  Create a Crowdpooling campaign by setting the parameters as
                  required. Once it's been created, you can share the campaign
                  link with the community to get more participants.
                </div>
                <div className="flex items-center justify-center">
                  <ChevronDoubleRightIcon className="h-5 mx-3 text-primary transform rotate-90 xl:rotate-0" />
                </div>
                <div className="text-xs bg-primary text-gray-200 rounded-2xl p-5 xl:w-1/3 w-full shadow-full">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full">
                    2
                  </span>
                  <p className="pt-3 text-gray-200 text-sm md:txet-md font-semibold pb-2">
                    Crowdpooling
                  </p>
                  When the Crowdpooling campaign has exceeded the hard cap,
                  participant allocations will be distributed based on the their
                  proportion of your investment. All excess funds will be
                  returned to participants.
                </div>
                <div className="flex items-center justify-center">
                  <ChevronDoubleRightIcon className="h-5 mx-3 text-primary transform rotate-90 xl:rotate-0" />
                </div>
                <div className="text-xs bg-primary text-gray-200 rounded-2xl p-5 xl:w-1/3 w-full shadow-full">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full">
                    3
                  </span>
                  <p className="pt-3 text-gray-200 text-sm md:txet-md font-semibold pb-2">
                    Completed
                  </p>
                  After Crowdpooling, participants receive project tokens. All
                  remaining tokens and sale proceeds will be used to establish
                  liquidity pools for spot trading. You will be able to retreive
                  the remaining funds in the pool after the Liquidity Protection
                  Period.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
}
export default LaunchCrowdpooling;
