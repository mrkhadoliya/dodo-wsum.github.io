import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FormControlLabel, TextField } from "@material-ui/core";
import { RadioGroup } from "@headlessui/react";
import { IconButton } from "@material-ui/core";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import RadioField from "components/common/radio-field";
import coins from "images/coins.png";
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

function SettingSearch(props) {
  const wallet = [
    {
      name: "0.5%",
    },
    {
      name: "1%",
    },
    {
      name: "3%",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [ProfileType, setProfileType] = React.useState(null);
  return (
    <>
      <div className="flex items-center">
        <ArrowLeftIcon
          className="h-5 cursor-pointer"
          onClick={() => props.click()}
        />
        <p className="text-center w-full text-lg">Trade Settings</p>
      </div>

      <p className="text-sm text-gray-200 pt-5">Slippage Tolerance</p>
      <div className="grid grid-cols-5 gap-2 pt-2 items-center justify-center pb-4 text-center">
        {wallet?.map((v, k) => {
          return (
            <RadioField
              key={k}
              setSelected={setProfileType}
              selected={ProfileType}
              mainClass=""
              data={
                <div className="flex items-center">
                  <RadioGroup.Option
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-secondary text-white"
                          : " text-primary bg-gray-200",
                        "rounded-lg bg-transparent shadow-sm w-full px-1 pt-0 pb-0.5 cursor-pointer focus:outline-none"
                      )
                    }
                  >
                    {({ checked }) => (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="text-sm pt-1">{v.name}</p>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                </div>
              }
            />
          );
        })}
        <TextField
          type="text"
          inputProps={{
            className:
              "text-gray-100 tracking-wide placeholder-text-xl font-light md:text-sm text-xs px-1 bg-gray-200",
          }}
          classes={{
            root: "py-0 w-full text-gray-100 rounded-lg overflow-hidden",
          }}
        />
        <p className="text-sm text-gray-200 text-left">%</p>
      </div>
      <p className="text-sm text-gray-200 py-2">Transaction Deadline</p>
      <div className="flex items-center space-x-2">
        <TextField
          type="text"
          inputProps={{
            className:
              "text-gray-100 tracking-wide rounded-lg placeholder-text-xl font-light md:text-sm text-xs px-1 bg-gray-200",
          }}
          classes={{
            root: "py-0 w-16 text-gray-100 rounded-lg overflow-hidden",
          }}
        />
        <p className="text-sm text-gray-200"> min </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-200">Expert Mode</p>
        <div className="-mr-6">
          <FormControlLabel control={<IOSSwitch name="checkedB" />} />
        </div>
      </div>
    </>
  );
}
export default SettingSearch;
