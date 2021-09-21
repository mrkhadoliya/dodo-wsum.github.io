import { React, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { RadioGroup } from "@headlessui/react";
import RadioField from "components/common/radio-field";
import Menu from "images/menu.svg";
import Chart from "components/common/bar-chart";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "none",
    color: "#f0f0f0",
  },
}));
function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const data = [
    {
      value: "1M",
    },
    {
      value: "All",
    },
  ];
  const chart = [
    {
      value: "Trading Volume",
    },
    {
      value: "TVL",
    },
    {
      value: "Number of Addresses",
    },
    {
      value: "Number of Trades",
    },
    {
      value: "Number of Pools",
    },
    {
      value: "Trading Pairs",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [ProfileType, setProfileType] = useState(null);
  return (
    <div className={`${classes.root} mining-tabs w-full`}>
      <AppBar position="static" color="default">
        <div className="flex justify-between items-center border-b border-gray-300">
          <Tabs
            classes={{
              indicator: "bg-primary w-8 h-1",
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="full width tabs example"
          >
            <Tab
              className="w-42 text-xs md:text-sm"
              label="Key Metrics"
              {...a11yProps(0)}
            />
            <Tab
              className="w-42 text-xs md:text-sm"
              label="Trading Pair Data"
              {...a11yProps(1)}
            />
          </Tabs>
        </div>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          style={{ paddingTop: 40 }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:gap-20 px-2 w-full">
            {chart?.map((v, k) => {
              return (
                <div className="flex flex-col bg-white overflow-hidden rounded-2xl shadow-full">
                  <div className="w-full flex items-center justify-between py-5 px-6">
                    <p className="text-primary text-base flex items-center">
                      <div className="rounded-full h-6 w-6 bg-primary mr-2 flex items-center justify-center cursor-pointer">
                        <img src={Menu} alt="Menu" className="w-2.5" />
                      </div>
                      {v.value}
                    </p>
                    <RadioField
                      key={k}
                      setSelected={setProfileType}
                      selected={ProfileType}
                      mainClass=""
                      data={
                        <div className="space-x-2 flex items-center">
                          {data.map((demo) => (
                            <RadioGroup.Option
                              key={demo.name}
                              value={demo}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-primary shadow-lg text-white"
                                    : "bg-secondary text-white",
                                  "rounded-full bg-transparent shadow-sm px-5 py-1.5 cursor-pointer focus:outline-none"
                                )
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex items-center justify-center w-full">
                                    <p className="text-xs font-semibold w-full text-center">
                                      {demo.value}
                                    </p>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      }
                    />
                  </div>
                  <div className="lg:flex px-6 py-2 justify-between">
                    <div>
                      <h1 className="text-gray-100 font-bold -mt-1 text-3xl">
                        $ 282,489,698.14
                      </h1>
                      <p className="text-gray-700 text-sm pt-1">Past 24H</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-100 text-sm space-x-2">
                        <div className="h-2.5 w-2.5 rounded-sm bg-primary"></div>
                        <p className="">ETH Mainnet：$ 190,451,397.9</p>
                      </div>
                      <div className="flex items-center text-gray-100 text-sm space-x-2">
                        <div className="h-2.5 w-2.5 rounded-sm bg-secondary"></div>
                        <p className="">BSC Mainnet：$ 92,038,219.44</p>
                      </div>
                      <div className="flex items-center text-gray-100 text-sm space-x-2">
                        <div className="h-2.5 w-2.5 rounded-sm bg-primary"></div>
                        <p className="">HECO Mainnet：$ 80.8</p>
                      </div>
                    </div>
                  </div>
                  <Chart />
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel
          style={{ paddingTop: 40 }}
          value={value}
          index={1}
          dir={theme.direction}
          className="text-gray-700 font-light"
        >
          You haven't participated in any Crowdpooling campaigns.
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;
