import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
  Button,
  Tab,
  Tabs,
  AppBar,
} from "@material-ui/core";
import { XIcon } from "@heroicons/react/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/solid";
import StakeTable from "components/common/stake-tabel";
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
function FullWidthTabs({ onClick, onClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${classes.root} w-full`}>
      <AppBar position="static" color="default">
        <div className="flex justify-between items-center border-b border-primary">
          <Tabs
            classes={{
              indicator: "bg-primary w-6 h-0.5",
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="full width tabs example"
          >
            <Tab
              className="w-18 pl-0 text-xs md:text-sm transform-none hover:text-primary"
              label="Stack"
              {...a11yProps(0)}
            />
            <Tab
              className="w-18 pl-0 text-xs md:text-sm transform-none hover:text-primary"
              label="Unstake"
              {...a11yProps(1)}
            />
          </Tabs>
          <div className="text-gray-100 flex md:space-x-2 space-x-0 items-center">
            <IconButton
              color="primary"
              className="transition-all absolute right-1 top-3"
              aria-label="delete"
            >
              <XIcon
                onClick={() => onClose()}
                className="h-4.5 text-gray-900"
              />
            </IconButton>
          </div>
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
          <div className="-mt-5 text-sm font-normal">
            <p className="text-gray-700">Single-Token Staking</p>
            <p className="text-gray-700">
              You only need to stake TRIBE here to get WSUM
            </p>
          </div>
          <div className="pt-6">
            <StakeTable />
          </div>
          <div className="flex text-gray-100 items-center justify-between pt-5 pb-1">
            <p className="md:text-md text-sm">Stake</p>
            <p className="text-xs cursor-pointer">
              Available 0
              <span className="bg-gray-200 rounded text-primary p-1 text-xs ml-0.5">
                MAX
              </span>
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden mt-1 mb-2">
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
                    <p className="text-gray-100 flex items-center pl-2 justify-between">
                      <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                      <p className="md:text-md text-sm font-medium uppercase">
                        TRIBE
                      </p>
                    </p>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex text-gray-100 items-center justify-between pb-1">
            <p className="md:text-md text-sm">Amount Staked</p>
            <p className="md:text-md text-sm">0≈ $0</p>
          </div>
          <div className="flex justify-center pt-7 pb-2">
            <Button
              onClick={() => onClose()}
              variant="contained"
              classes={{
                root: "rounded-lg tracking-normal tracking-wider py-3 md:text-md text-md w-32",
              }}
              color="secondary"
            >
              Stake
            </Button>
          </div>
        </TabPanel>
        <TabPanel
          style={{ paddingTop: 40 }}
          value={value}
          index={1}
          dir={theme.direction}
          className="text-gray-100"
        >
          <div className="-mt-5">
            <div className="">
              <StakeTable />
            </div>
            <div className="flex text-gray-100 items-center justify-between pt-5 pb-1">
              <p className="md:text-md text-sm">Unstake</p>
              <p className="text-xs cursor-pointer">
                Available 0
                <span className="bg-gray-200 rounded text-primary p-1 text-xs ml-0.5">
                  MAX
                </span>
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl overflow-hidden mt-1 mb-2">
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
                      <p className="text-gray-100 flex items-center pl-2 justify-between">
                        <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                        <p className="md:text-md text-sm font-medium uppercase">
                          TRIBE
                        </p>
                      </p>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex text-gray-100 items-center justify-end space-x-2 pb-1">
              <p className="text-sm bg-gray-200 px-3 w-16 py-1 cursor-pointer text-center rounded">
                25%
              </p>
              <p className="text-sm bg-gray-200 px-3 w-16 py-1 cursor-pointer text-center rounded">
                50%
              </p>
              <p className="text-sm bg-gray-200 px-3 w-16 py-1 cursor-pointer text-center rounded">
                75%
              </p>
              <p className="text-sm bg-gray-200 px-3 w-16 py-1 cursor-pointer text-center rounded">
                100%
              </p>
            </div>
            <div className="flex justify-center pt-7 pb-2">
              <Button
                onClick={() => onClose()}
                variant="contained"
                classes={{
                  root: "rounded-lg tracking-normal tracking-wider py-3 md:text-md text-md w-32",
                }}
                color="secondary"
              >
                Untake
              </Button>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;
