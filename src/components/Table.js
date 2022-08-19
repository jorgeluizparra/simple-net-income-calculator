import React from "react";

import { XIcon } from '@heroicons/react/outline'

export default function Table({ items=[], onClose }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
      <div className="px-4 py-5 sm:px-6 flex">
        <h3 className="text-lg leading-6 font-medium text-gray-900 inline my-auto">Tax calculation result</h3>
        <div className="order-2 flex-shrink-0 sm:order-3 ml-auto">
          <button
            onClick={() => onClose()}
            type="button"
            className="-mr-1 flex p-2 bg-black rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>  
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
            {items.map((item, index) => (
                <div key={index} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="capitalize text-sm font-medium text-gray-500">{item.title}</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
                </div>
            ))}
        </dl>
      </div>
    </div>
  )
}
