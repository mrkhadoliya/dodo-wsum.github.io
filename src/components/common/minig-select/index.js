import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Sort by value locked" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
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
            <Listbox.Button className="bg-transparent relative md:w-full border border-gray-100 rounded-full shadow-sm md:pl-3 h-5 md:h-auto w-5 md:pr-10 py-1 text-left cursor-default focus:outline-none sm:text-sm">
              <span className="hidden md:block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center md:pr-2 pointer-events-none">
                <SelectorIcon
                  className="md:h-5 h-4 md:w-5 w-4 md:text-gray-400 text-gray-100 mr-0.5"
                  aria-hidden="true"
                />
              </span>
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
                className="absolute z-50 mt-3 md:w-48 w-auto right-0 bg-black-100 shadow-lg max-h-30 rounded-2xl py-1 text-base border border-gray-100 overflow-auto focus:outline-none sm:text-sm"
                style={{ zIndex: 1000 }}
              >
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
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
