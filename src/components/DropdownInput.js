import React, { Fragment }  from "react";

import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

export default function DropdownInput ({selected, onSelect, children }) {
  return (
    <Listbox value={selected} onChange={onSelect}>
      {({ open }) => (
        <>
          <Listbox.Label className="mt-5 block text-sm font-medium text-gray-700">Country</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {children}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
