import React from "react";
import { TextField, InputAdornment, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Dropdown from "components/common/dropdown";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Search from "images/search.svg";
import {
  ArrowLeftIcon,
  InformationCircleIcon,
  MenuAlt3Icon,
} from "@heroicons/react/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/solid";
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

function Searchs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var obj = [
    {
      name: "Alice",
    },
    {
      name: "Alice",
    },
    {
      name: "Alice",
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-center">
          <ArrowLeftIcon
            className="h-5 cursor-pointer"
            onClick={() => props.click()}
          />
          <p className="text-center w-full text-xl">Pay Token</p>
        </div>
        <div className="bg-gray-200 rounded-xl overflow-hidden w-full mt-4 mb-2">
          <TextField
            placeholder="Enter the symbol Token address"
            type="text"
            inputProps={{
              className:
                "text-gray-100 tracking-wide font-light text-sm py-4 px-4 bg-gray-200 rounded-tl-xl rounded-bl-xl",
            }}
            classes={{
              root: "py-0 w-full text-gray-100 rounded-tl-xl rounded-bl-xl overflow-hidden",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={Search} alt="search" className="ml-4 mr-3" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="max-h-96 overflow-x-auto">
          <AppBar position="" className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200">
              <Tabs
                classes={{
                  indicator: "bg-gray-200 w-5",
                }}
                className="text-gray-100 transform-none flex justify-between items-start w-ful"
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  label="All"
                  {...a11yProps(0)}
                  className="transform-none text-white pl-0"
                />
                <Tab
                  label="My List "
                  {...a11yProps(1)}
                  className="transform-none text-white pl-0"
                />
                <Tab
                  label="Layout 2"
                  {...a11yProps(2)}
                  className="transform-none text-white pl-0"
                />
                <Tab
                  label="Trending"
                  {...a11yProps(3)}
                  className="transform-none text-white pl-0"
                />
              </Tabs>
              <div>
                <Dropdown
                  mainMenuClass="w-40 rounded-xl overflow-hidden mt-2"
                  menuItem={
                    <>
                      <MenuAlt3Icon className="cursor-pointer text-gray-200 h-5" />
                    </>
                  }
                  options={
                    <div className="bg-black-290">
                      <Link to="/exchange">
                        <div className="flex items-center py-3 px-4 space-x-2 hover:bg-gray-920 text-gray-650 transition-all cursor-pointer">
                          <p className="text-sm font-medium">Layer 2</p>
                        </div>
                      </Link>
                    </div>
                  }
                />
              </div>
            </div>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="-mt-2 -mx-6 max-h-80 overflow-y-auto">
              {obj.map(() => (
                <div className="flex justify-between items-start py-2 hover:bg-indigo-50 rounded-xl p-2 transition-all">
                  <div className="flex items-center ">
                    <CurrencyRupeeIcon className="h-8" />
                    <div className="pl-2">
                      <p className="uppercase text-md">Alice</p>
                      <p className="text-md">0</p>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <p className="mr-2 text-md">Alice</p>
                    <InformationCircleIcon className="h-5 " />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="-mt-2 -mx-6 max-h-80 overflow-y-auto">
              {obj.map(() => (
                <div className="flex justify-between items-start py-2 hover:bg-indigo-50 rounded-xl p-2 transition-all">
                  <div className="flex items-center ">
                    <CurrencyRupeeIcon className="h-8" />
                    <div className="pl-2">
                      <p className="uppercase text-md">Alice</p>
                      <p className="text-md">0</p>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <p className="mr-2 text-md">Alice</p>
                    <InformationCircleIcon className="h-5 " />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="-mt-2 -mx-6 max-h-80 overflow-y-auto">
              {obj.map(() => (
                <div className="flex justify-between items-start py-2 hover:bg-indigo-50 rounded-xl p-2 transition-all">
                  <div className="flex items-center ">
                    <CurrencyRupeeIcon className="h-8" />
                    <div className="pl-2">
                      <p className="uppercase text-md">Alice</p>
                      <p className="text-md">0</p>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <p className="mr-2 text-md">Alice</p>
                    <InformationCircleIcon className="h-5 " />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="-mt-2 -mx-6 max-h-80 overflow-y-auto">
              {obj.map(() => (
                <div className="flex justify-between items-start py-2 hover:bg-indigo-50 rounded-xl p-2 transition-all">
                  <div className="flex items-center ">
                    <CurrencyRupeeIcon className="h-8" />
                    <div className="pl-2">
                      <p className="uppercase text-md">Alice</p>
                      <p className="text-md">0</p>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <p className="mr-2 text-md">Alice</p>
                    <InformationCircleIcon className="h-5 " />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
export default Searchs;
