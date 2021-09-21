import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";

function Navs({ navs, developer, mining }) {
  const location = useLocation();
  const [clocation, setclocation] = useState();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    console.log(location);
    setclocation(location.pathname);
  }, [location]);
  return (
    <>
      {navs?.map((v, k) => {
        return (
          <Link key={k} to={v.path}>
            <p
              className={`text-sm py-2 lg:py-10 cursor-pointer font-medium uppercase  hover:text-primary  transition-all ${console.log()} ${
                v.path === clocation ? "text-primary" : "text-gray-930"
              }`}
            >
              {v.name}
            </p>
          </Link>
        );
      })}
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-primary" : "text-gray-900",
                "text-sm py-1.5 cursor-pointer font-medium uppercase text-gray-930 hover:text-primary focus:text-primary transition-all flex items-center"
              )}
            >
              <span
                className={
                  clocation === "/liquidity-mining" ? "text-primary" : ""
                }
              >
                Mining
              </span>
              <ChevronDownIcon
                className="ml-2 lg:ml-0.5 xl:ml-1 h-3 w-3"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="md:absolute z-10 mt-8 transform w-screen max-w-xs sm:px-0 lg:ml-0 pt-0.5"
              >
                <div className="bg-black-290 overflow-hidden shadow-lg py-2">
                  {mining?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="p-4 py-3 flex items-center text-gray-650 rounded-none options hover:bg-gray-920 transition-all"
                    >
                      {/* <item.icon
                        className="flex-shrink-0 h-6 w-6 text-primary rounded-full p-1"
                        aria-hidden="true"
                      /> */}
                      <div className="w-full">
                        <p className="text-sm font-medium ">{item.name}</p>
                        <p className="mt-1 text-xs">{item.description}</p>
                      </div>
                      {/* <div className="w-10 pr-1 flex justify-end icon_right">
                        <div className="w-6">
                          <img
                            src={ArrowRight}
                            className="w-full h-4"
                            alt="ArrowRight"
                          />
                        </div>
                      </div> */}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-primary" : "text-gray-930",
                "text-sm py-1.5 cursor-pointer font-medium uppercase text-gray-930 hover:text-primary focus:text-primary transition-all flex items-center"
              )}
            >
              <span
                className={
                  clocation === "/create-token" ||
                  clocation === "/Pool" ||
                  clocation === "/create-cp" ||
                  clocation === "/dashboard"
                    ? "text-primary"
                    : ""
                }
              >
                Developer
              </span>
              <ChevronDownIcon
                className="ml-2 lg:ml-0.5 xl:ml-1 h-3 w-3"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="md:absolute z-10 mt-8 transform w-screen max-w-xs sm:px-0 lg:ml-0 pt-0.5"
              >
                <div className="bg-black-290 overflow-hidden shadow-lg py-2">
                  {developer?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="p-4 py-3 flex items-center text-gray-650 rounded-none options hover:bg-gray-920 transition-all"
                    >
                      {/* <item.icon
                        className="flex-shrink-0 h-6 w-6 text-primary rounded-full p-1"
                        aria-hidden="true"
                      /> */}
                      <div className="w-full">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="mt-1 text-xs">{item.description}</p>
                      </div>
                      {/* <div className="w-10 pr-1 flex justify-end icon_right">
                        <div className="w-6">
                          <img
                            src={ArrowRight}
                            className="w-full h-4"
                            alt="ArrowRight"
                          />
                        </div>
                      </div> */}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

export default Navs;
