import React from "react";
import { LandingTemplate } from "layout";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  InputAdornment,
  Typography,
  Box,
  Tab,
  Tabs,
  AppBar,
} from "@material-ui/core";
import Search from "images/search.svg";
// import banner from "images/banner1.jpg";
import banner from "images/newWsum1.jpg";
import banner2 from "images/newWsum2.jpg";
import banner3 from "images/newWsum3.jpg";
import PoolTabs from "components/common/pool-tabs";
import { WifiIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
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

function Liquidity() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <LandingTemplate>
      <div className="bg-gray-200 pool">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 md:gap-0 items-start xl:px-10 md:px-7 px-4 py-12 lg:py-20 xl:w-11/12 mx-auto">
          <div className="lg:col-span-8 w-full text-white lg:pr-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-full">
              <div className="grid md:grid-cols-2 grid-cols-1 bg-white w-full rounded-tl-xl overflow-hidden">
                <div className="w-full">
                  <AppBar position="static" className="w-full">
                    <Tabs
                      classes={{
                        indicator: "bg-primary",
                      }}
                      className="text-gray-100 text-center transform-none w-full"
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      aria-label="simple tabs example"
                    >
                      <Tab
                        label="Explore"
                        {...a11yProps(0)}
                        className="transform-none bg-white text-gray-100 text-center px-11 whitespace-nowrap text-xs md:text-md"
                      >
                        dafgjg
                      </Tab>
                      <Tab
                        label="My Pool List"
                        {...a11yProps(1)}
                        className="transform-none bg-white text-gray-100 text-center px-11 whitespace-nowrap text-xs md:text-md"
                      />
                    </Tabs>
                  </AppBar>
                </div>
                <div className="bg-white rounded-tr-xl">
                  <TextField
                    placeholder="Search Token Symbol / Pool Address"
                    type="text"
                    inputProps={{
                      className:
                        "text-gray-100 tracking-wide font-light text-sm py-4 px-4",
                    }}
                    classes={{
                      root: "py-0 w-full overflow-hidden",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Search} alt="search" className="ml-3" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <TabPanel value={value} index={0}>
                <PoolTabs />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PoolTabs />
              </TabPanel>
            </div>
          </div>
          <div className="lg:col-span-4 text-white">
            <div className="bg-white text-gray-100 rounded-2xl w-full p-6 md:px-7 shadow-full z-50">
              <p>My Pool Analysis</p>
              <div className="mt-6 mb-12">
                <div className="grid lg:grid-cols-2 md:grid-cols-3 items-center grid-cols-2 gap-5">
                  <div className="flex items-start">
                    <div className="rounded-2xl p-3 mr-2 bg-primary text-white">
                      <WifiIcon width="25px" height="25px" />
                    </div>
                    <div
                      className=" text-xs text-gray-100"
                      style={{ fontSize: "11px", color: "#848484" }}
                    >
                      <p style={{ fontSize: "40px" }} className="mb-2">
                        -
                      </p>
                      <p style={{ fontSize: "11px", color: "#848484" }}>
                        Traders (24H)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-2xl p-3 mr-2 bg-primary text-white">
                      <WifiIcon width="25px" height="25px" />
                    </div>
                    <div
                      className=" text-xs text-gray-100"
                      style={{ fontSize: "11px", color: "#848484" }}
                    >
                      <p style={{ fontSize: "40px" }} className="mb-2">
                        -
                      </p>
                      <p style={{ fontSize: "11px", color: "#848484" }}>
                        Total Liquidity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-2xl p-3 mr-2 bg-primary text-white">
                      <WifiIcon width="25px" height="25px" />
                    </div>
                    <div
                      className=" text-xs text-gray-100"
                      style={{ fontSize: "11px", color: "#848484" }}
                    >
                      <p style={{ fontSize: "40px" }} className="mb-2">
                        -
                      </p>
                      <p style={{ fontSize: "11px", color: "#848484" }}>
                        Volume (24H)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/poolcreate">
                <Button
                  variant="contained"
                  classes={{
                    root: "rounded-xl tracking-normal tracking-wider py-4 md:text-base text-md w-full mt-10",
                  }}
                  color="primary"
                >
                  Create a Pool
                </Button>
              </Link>
              <img
                src={banner}
                alt="banner"
                className="rounded-2xl shadow-full w-full max-h-48 cursor-pointer mt-5"
              />
              <img
                src={banner2}
                alt="banner2"
                className="rounded-2xl shadow-full w-full max-h-48 cursor-pointer mt-3"
              />
              <img
                src={banner3}
                alt="banner3"
                className="rounded-2xl shadow-full w-full max-h-48 cursor-pointer mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
}

export default Liquidity;
