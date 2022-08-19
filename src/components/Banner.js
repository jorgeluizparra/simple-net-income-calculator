import React from "react";

import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

const Banner = ({ message, color, onClose }) => {
  return (
    <div className="bg-red-800 mt-5">
      <div className="py-3 px-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
                {message}
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
                onClick={() => onClose()}
                type="button"
                className="-mr-1 flex p-2 rounded-md border border-red-800 hover:border-white focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;