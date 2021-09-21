import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import MinigSelect from "components/common/minig-select";
import Card from "components/common/card";
import CardStack from "components/common/card-stake";
import StackModal from "components/common/stack-modal";
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
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(open);
  });
  return (
    <div className={`${classes.root} mining-tabs w-full -mt-12`}>
      <StackModal
        onClick={handleClickOpen}
        open={open}
        onClose={() => handleClose()}
      />
      <AppBar position="static" color="default">
        <div className="flex justify-between items-center border-b border-gray-900">
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
              className="md:w-20 w-14 text-xs md:text-sm"
              label="Active"
              {...a11yProps(0)}
            />
            <Tab
              className="md:w-20 w-14 text-xs md:text-sm"
              label="Ended"
              {...a11yProps(1)}
            />
          </Tabs>
          <div className="text-gray-100 flex md:space-x-2 space-x-0 items-center">
            <h1 className="md:text-lg text-xs font-medium">
              My Liquidity Only
            </h1>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={handleChangeSwitch}
                  name="checkedB"
                />
              }
            />
            <MinigSelect />
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
          className="text-gray-100"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-10 gap-6 gap-y-16 px-4 pb-5 pt-2">
            <Card onClick={handleClickOpen} />
            <CardStack onClick={handleClickOpen} />
            <Card onClick={handleClickOpen} />
            <Card onClick={handleClickOpen} />
            <CardStack onClick={handleClickOpen} />
            <Card onClick={handleClickOpen} />
          </div>
        </TabPanel>
        <TabPanel
          style={{ paddingTop: 40 }}
          value={value}
          index={1}
          dir={theme.direction}
          className="text-gray-100"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-10 gap-6 gap-y-16 px-4 pb-5 pt-2">
            <CardStack onClick={handleClickOpen} />
            <CardStack onClick={handleClickOpen} />
            <CardStack onClick={handleClickOpen} />
            <Card onClick={handleClickOpen} />
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;
