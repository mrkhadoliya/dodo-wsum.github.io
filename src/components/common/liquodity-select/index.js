import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "ETH" },
  { id: 2, name: "USDC" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected} className="z-50">
      {({ open }) => (
        <>
          <div className="md:mt-1 -mt-2 relative">
            <Listbox.Button className="relative md:w-full focus:outline-none sm:text-sm">
              <p className="cursor-pointer text-gray-100 flex items-center pl-2 w-24 justify-between">
                <CurrencyRupeeIcon className="text-primary mr-2 h-5" />
                <p className="text-md font-medium ">{selected.name}</p>
                <ChevronDownIcon className="ml-2 h-3.5 " />
              </p>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-50 mt-4 md:w-32 w-auto left-0 bg-gray-200 shadow-lg max-h-30 rounded py-1 text-base overflow-auto focus:outline-none sm:text-sm"
                style={{ zIndex: 1000 }}
              >
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-primary" : "text-gray-700",
                        "cursor-pointer select-none relative py-1.5 px-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "truncate flex items-center"
                          )}
                        >
                          <div
                            className={classNames(
                              selected ? "bg-primary" : "bg-gray-700",
                              "h-2 w-2 mr-2 rounded-full"
                            )}
                          ></div>
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
