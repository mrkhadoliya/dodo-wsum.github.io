import { React, useState } from "react";
import { TextField } from "@material-ui/core";
import { RadioGroup } from "@headlessui/react";
import RadioField from "components/common/radio-field";
function GasPrice({ dropOptionsChild, inputClass, containerClass }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [ProfileType, setProfileType] = useState(null);
  return (
    <div>
      <>
        <RadioField
          setSelected={setProfileType}
          selected={ProfileType}
          mainClass=""
          data={
            <div className={containerClass}>
              {dropOptionsChild.map((demo) => (
                <RadioGroup.Option
                  key={demo.name}
                  value={demo}
                  className={({ active }) =>
                    classNames(
                      active
                        ? "bg-primary shadow-lg text-white"
                        : "bg-secondary text-white",
                      "rounded-lg bg-transparent shadow-sm px-4 py-2.5 cursor-pointer focus:outline-none"
                    )
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex items-center justify-center w-full">
                        <p className="text-xs md:text-sm font-semibold w-full text-center">
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
      </>
      <div className={inputClass}>
        <TextField
          placeholder="custum"
          type="text"
          variant="outlined"
          inputProps={{
            className: "text-gray-100 text-sm py-2.5 px-2 bg-gray-200 rounded-lg",
          }}
          classes={{
            root: "py-0 text-gray-100 rounded-lg",
          }}
        />
      </div>
    </div>
  );
}
GasPrice.defaultProps = {
  containerClass: "space-y-2 py-2 flex flex-col items-start",
};
export default GasPrice;
