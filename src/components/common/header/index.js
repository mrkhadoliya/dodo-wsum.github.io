import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "images/wsum-io-logo.png";
import Navs from "components/common/navs";
import NavRight from "components/common/nav-right";

function Header() {
  const navs = [
    {
      path: "/exchange",
      name: "Exchange",
    },
    {
      path: "/liquidity",
      name: "Liquidity",
    },
    {
      path: "/crowdpooling",
      name: "Crowdpooling",
    },
  ];
  const navs2 = [
    {
      path: "",
      name: "Mining",
    },
    {
      path: "",
      name: "Developer",
    },
  ];
  const mining = [
    {
      name: "Liquidity Mining",
      description: "Earn WSUM rewards by staking assets for market making",
      to: "/liquidity-mining",
      icon: ChevronDownIcon,
    },
    /*{
      name: "vWSUM",
      description: "Mint vWSUM to earn more WSUM",
      to: "/vWSUM",
      icon: ChevronDownIcon,
    }*/
    ,
  ];
  const developer = [
    {
      name: "Create a token",
      description: "Create your own tokens with one click. No coding required!",
      to: "/create-token",
      icon: ChevronDownIcon,
    },
    /*{
      name: "Pool",
      description:
        "Create liquidity markets for free and customize your market making strategies",
      to: "/Pool",
      icon: ChevronDownIcon,
    },
    
    <div className="hidden flex-1 lg:flex items-center justify-end space-x-5">
        <NavRight />
      </div>*/
  {
      name: "Create Crowdpooling",
      description:
        "Equal opportunity token distribution with community-built pools",
      to: "/create-cp",
      icon: ChevronDownIcon,
    },
    {
      name: "Dashboards",
      description: "Get the latest WSUM platform stats",
      to: "/dashboard",
      icon: ChevronDownIcon,
    },
  ];
  return (
    <>
      <Popover className="w-full xl:w-11/12 mx-auto z-50">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center mx-auto w-full">
              <div className="flex items-center justify-between w-full lg:w-auto space-x-5">
                <div className="flex justify-start -ml-1">
                  <Link className="cursor-pointer" to="/">
                    <img className="w-52" src={Logo} alt="logo" />
                  </Link>
                </div>
                <div className="lg:hidden mt-0.5">
                  <Popover.Button className="flex items-center justify-center text-gray-100 focus:outline-none">
                    <MenuIcon className="md:h-6 h-5 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex pl-4 items-center justify-end xl:space-x-6 space-x-4">
                  <Navs
                    navs={navs}
                    navs2={navs2}
                    mining={mining}
                    developer={developer}
                  />
                </div>
              </div>
 
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-18 inset-x-0 transition transform origin-top-right lg:hidden z-50"
              >
                <div className="rounded-lg bg-gray-200 shadow-xl divide-y-2 divide-gray-50">
                  <div className="py-6 px-5 flex flex-col">
                    <Navs
                      navs={navs}
                      navs2={navs2}
                      mining={mining}
                      developer={developer}
                    />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
export default Header;
