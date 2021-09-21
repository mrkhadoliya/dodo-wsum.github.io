import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
function Dropdown(props) {
  const { mainMenuClass, menuItem, options } = props;
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <div className="flex items-center">
            <Menu.Button>{menuItem}</Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className={`${mainMenuClass} origin-top-right z-10 absolute navbar-right right-0 shadow-xl py-1 rounded-none text-gray-650 bg-black-290 transition-all focus:outline-none outline-none`}
            >
              {options}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
Dropdown.defaultProps = {
  mainMenuClass: "-mr-3 mt-10",
};
export default Dropdown;
