import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BasicTable from "../../../components/Tabel";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
function PoolTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pool">
      <AppBar position="" className="border-b border-gray-640 pool">
        <Tabs
          classes={{
            indicator: "bg-primary",
          }}
          className="text-gray-100 text-center transform-none w-full"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="All Pools"
            {...a11yProps(0)}
            className="ml-0 transform-none rounded-t-lg"
          />
          <Tab
            label="Public Pools"
            {...a11yProps(1)}
            className="ml-0 transform-none rounded-t-lg"
          />
          <Tab
            label="Private Pools"
            {...a11yProps(2)}
            className="ml-0 transform-none rounded-t-lg"
          />
          <Tab
            label="Pegged Pools"
            {...a11yProps(3)}
            className="ml-0 transform-none rounded-t-lg"
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="-mx-6">
          <BasicTable />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="-mx-6">
          <BasicTable />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="-mx-6">
          <BasicTable />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="-mx-6">
          <BasicTable />
        </div>
      </TabPanel>
    </div>
  );
}

export default PoolTabs;
