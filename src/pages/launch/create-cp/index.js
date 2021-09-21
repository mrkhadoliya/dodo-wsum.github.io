import React from "react";
import { LandingTemplate } from "layout";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import Search from "images/search.svg";
import img from "images/menu.svg";
import Table from "components/common/tabel-cp";
import { Link } from "react-router-dom";
function CreateCp() {
  return (
    <LandingTemplate>
      <div className="md:pt-16 pt-22 pb-10 xl:px-14 md:px-9 px-4 md:space-y-8 space-y-4 bg-gray-200 min-h-screen">
      <iframe src="https://ramlogics.com/wsum_dodojson/create-pool.html" title="Buy GAJ" height='1130px' width="100%"/>
        {/*<div className="bg-white shadow-full rounded-3xl p-7">
          <div className="md:flex space-y-3 md:space-y-0 items-center justify-between">
            <h2 className="text-gray-100 text-lg font-medium tracking-wide">
              My Crowdpooling List
            </h2>
             <Button
              variant="contained"
              classes={{
                root: "rounded-xl tracking-normal px-6 pb-2 pt-1.5 md:text-base text-md",
              }}
              color="primary"
            >
              Launch a Crowdpooling Campaign
            </Button>  
          </div>
          <div className="w-full bg-transparent mt-4 rounded-none overflow-hidden">
            <TextField
              placeholder="Search by token address or Crowdpooling address"
              type="text"
              inputProps={{
                className:
                  "text-gray-100 tracking-wide font-light text-sm py-3 px-2",
              }}
              classes={{
                root: "py-0 w-full text-gray-100 overflow-hidden",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Search} alt="search" className="mr-0" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <p className="text-gray-100 pt-5">
            <Table />
          </p>
        </div>
        <div className="bg-white shadow-full rounded-3xl md:p-7 p-5 md:px-12 lg:px-16 md:pt-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pb-8">
            <div className="">
              <img src={img} alt="" />
              <h2 className="text-primary text-md font-medium pt-2">
                For Developers
              </h2>
              <p className="text-sm text-gray-600">
                Creating a Crowdpooling campaign can help you create a highly
                liquid trading venue for your project tokens, with an equal
                opportunity community token distribution mechanic that ensures
                no frontrunning and bot interference.
              </p>
            </div>
            <div className="">
              <img src={img} alt="" />
              <h2 className="text-primary text-md font-medium pt-2">
                Single-Token Market Making
              </h2>
              <p className="text-sm text-gray-600">
                You only need to supply the tokens you want to distribute and
                nothing more. No more liquidity provision in pairs! Crowdpooling
                will help you create the liquidity market for your token with
                the community's help.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Link to="/launchcrowdpooling">
              <Button
                variant="contained"
                classes={{
                  root: "rounded-xl tracking-normal w-full md:w-auto md:px-10 pb-4.5 pt-4 md:text-xl text-base",
                }}
                color="primary"
              >
                Launch a Crowdpooling Campaign
              </Button>
            </Link>
          </div>
        </div>*/}
      </div>
    </LandingTemplate>
  );
}

export default CreateCp;
