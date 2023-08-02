import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ stateTerrSelectText }) {
  const [stateTerr, setStateterr] = useState(stateTerrSelectText);

  const onClickHandler = (val) => {
    setStateterr(val);
    document.getElementById("postcode").focus();
  };

  return (
    <Menu as="div" id="state_terr" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {stateTerr}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {[
              "Canberra",
              "Northern Territory",
              "NSW",
              "Queensland",
              "South Australia",
              "Tasmania",
              "Victoria",
              "Western Australia",
            ].map((val, { active }) => (
              <Menu.Item key={val}>
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-700" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => onClickHandler(val)}
                >
                  {val}
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
