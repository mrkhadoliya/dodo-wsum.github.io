import { React, useState } from "react";
import {
  TextField,
  InputAdornment,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InviteFriendModal from "components/common/invite-friend-modal";
import Box from "@material-ui/core/Box";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { CurrencyRupeeIcon, ShareIcon } from "@heroicons/react/solid";
import LiquoditySelect from "components/common/liquodity-select";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AddLiquidity(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [show, setShow] = useState(false);
  const showToggle = (key) => {
    setShow(!show);
  };
  return (
    <>
      <InviteFriendModal
        onClick={handleClickOpen}
        open={open}
        onClose={handleClose}
      />
      <div>
        <div className="flex justify-between items-center">
          <ArrowLeftIcon
            className="h-5 cursor-pointer"
            onClick={() => props.click()}
          />
          <IconButton
            onClick={handleClickOpen}
            color="primary"
            className="text-primary bg-gray-200 transition-all p-1.5 rounded-lg"
          >
            <ShareIcon className="h-5" />
          </IconButton>
        </div>
        <div className="max-h-70vh overflow-x-auto">
          <AppBar position="" className="w-full border-b border-gray-900">
            <Tabs
              classes={{
                indicator: "bg-secondary w-6 h-1",
              }}
              className="text-gray-100 transform-none px-0 flex"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                label="Add"
                {...a11yProps(0)}
                className="transform-none text-white p-0"
              />
              <Tab
                label="Remove"
                {...a11yProps(1)}
                className=" transform-none text-white p-0"
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="-m-5">
              <div className="flex items-center justify-end pt-2 pb-1">
                <p className="text-xs cursor-pointer">
                  Available 0
                  <span className="bg-gray-200 text-primary p-1 py-0.5 rounded text-xs ml-0.5">
                    MAX
                  </span>
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl -ml-1 overflow-hidden mt-1 mb-2">
                <TextField
                  type="text"
                  placeholder="0.0"
                  inputProps={{
                    className:
                      "text-right text-gray-100 tracking-wide placeholder-text-xl font-light text-sm py-5 px-2 bg-gray-200",
                  }}
                  classes={{
                    root: "py-0 w-full text-gray-100 rounded-tl-xl rounded-bl-xl overflow-hidden",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        onClick={() => setActive(true)}
                      >
                        <p className="cursor-pointer text-gray-100 flex items-center pl-2 w-24 justify-between">
                          <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                          <p className="text-md font-medium ">ETH</p>
                          <ChevronDownIcon className="ml-2 h-3.5 " />
                        </p>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex justify-center text-white text-2xl">+</div>
              <div className="flex items-center justify-end pb-1">
                <p className="text-xs cursor-pointer">
                  Available 0
                  <span className="bg-gray-200 text-primary p-1 py-0.5 rounded text-xs ml-0.5">
                    MAX
                  </span>
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl -ml-1 overflow-hidden mt-1 mb-1">
                <TextField
                  type="text"
                  placeholder="0.0"
                  inputProps={{
                    className:
                      "text-right text-gray-100 tracking-wide placeholder-text-xl font-light text-sm py-5 px-2 bg-gray-200",
                  }}
                  classes={{
                    root: "py-0 w-full text-gray-100 rounded-tl-xl rounded-bl-xl overflow-hidden",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p className="text-gray-100 flex items-center pl-2 w-18 justify-between">
                          <CurrencyRupeeIcon className="text-primary mr-2 h-6" />
                          <p className="text-md  font-medium ">USDC</p>
                        </p>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="border border-gray-200 p-2.5 px-3 text-sm rounded-xl my-3">
                <div className="flex justify-between items-center">
                  <p className="">Supports single-token supply</p>
                  <p
                    className="flex items-center cursor-pointer"
                    onClick={showToggle}
                  >
                    More{" "}
                    {show === true ? (
                      <ChevronUpIcon className="ml-2 h-3.5 " />
                    ) : (
                      <ChevronDownIcon className="ml-2 h-3.5 " />
                    )}
                  </p>
                </div>
                {show === true ? (
                  <div className="">
                    <p className="text-xs pt-2">Pool</p>
                    <p className="text-xs hover:underline cursor-pointer pb-2">
                      0x75c2...ff34
                    </p>
                    <p className="text-xs">Total Liquidity</p>
                    <p className="text-xs pb-1">
                      4,227.474278 ETH / 8,005,942.9175 USDC
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="-m-6 pt-1">
              <div className="flex items-center justify-end pt-2 pb-1">
                <p className="text-xs cursor-pointer">
                  Available 0
                  <span className="bg-gray-200 text-primary p-1 py-0.5 rounded text-xs ml-0.5">
                    MAX
                  </span>
                </p>
              </div>
              <div className="bg-gray-200 flex items-center rounded-xl mt-1 mb-2">
                <LiquoditySelect />
                <TextField
                  type="text"
                  placeholder="0.0"
                  inputProps={{
                    className:
                      "text-right text-gray-100 tracking-wide placeholder-text-xl font-light text-sm py-5 px-2 bg-gray-200",
                  }}
                  classes={{
                    root: "py-0 w-full text-gray-100 rounded-r-xl overflow-hidden",
                  }}
                />
              </div>
              <div className="border border-gray-200 p-2.5 px-3 mt-2 text-sm rounded-xl">
                <p className="text-xs pt-2">Pool</p>
                <p className="text-xs hover:underline cursor-pointer pb-2">
                  0x75c2...ff34
                </p>
                <p className="text-xs">Total Liquidity</p>
                <p className="text-xs pb-1">
                  4,227.474278 ETH / 8,005,942.9175 USDC
                </p>
              </div>
            </div>
          </TabPanel>
        </div>

        <Button
          variant="contained"
          classes={{
            root: "rounded-xl tracking-normal tracking-wider py-4 md:text-base mt-6 text-md w-full",
          }}
          color="secondary"
        >
          Enter an amount
        </Button>
      </div>
    </>
  );
}
export default AddLiquidity;
