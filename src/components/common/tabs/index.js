import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
          <Typography color="dark">{children}</Typography>
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
    textAlign: "center",
    paddingTop: 60,
  },
}));

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

  return (
    <div className={`${classes.root} crowdTabs`}>
      <AppBar position="static" color="default">
        <Tabs
          classes={{
            indicator: "bg-transparent",
            root: "shadow-lg rounded-full"
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Favorites" {...a11yProps(0)} />
          <Tab label="Participated" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          style={{ paddingTop: 90 }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <p className="text-gray-100">
            You don't have any favorite Crowdpooling campaigns.
          </p>
        </TabPanel>
        <TabPanel
          style={{ paddingTop: 90 }}
          value={value}
          index={1}
          dir={theme.direction}
        >
          <p className="text-gray-100">
            You haven't participated in any Crowdpooling campaigns.
          </p>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;
